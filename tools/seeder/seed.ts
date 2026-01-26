
import { PokemonClient } from 'pokenode-ts';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Jimp = require('jimp');

// Inline Interfaces to avoid ts-node import issues
enum MonsterType {
    Normal = 'normal',
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
    Electric = 'electric',
    Ice = 'ice',
    Fighting = 'fighting',
    Poison = 'poison',
    Ground = 'ground',
    Flying = 'flying',
    Psychic = 'psychic',
    Bug = 'bug',
    Rock = 'rock',
    Ghost = 'ghost',
    Dragon = 'dragon',
    Steel = 'steel',
    Fairy = 'fairy',
    Dark = 'dark',
}

enum MonsterRarity {
    Common = 1,
    Rare = 2,
    Epic = 3,
    Legendary = 4
}

interface IMonsterSpecies {
    id: number;
    name: string;
    types: MonsterType[];
    rarity: MonsterRarity;

    baseStats: {
        hp: number;
        atk: number;
        def: number;
        spAtk: number;
        spDef: number;
        speed: number;
    };

    catchRate: number;
    baseExp: number;
    growthRate: string;

    spriteInfo: {
        main: string;
        frameSize?: { width: number, height: number };
        animations?: { idle: number[]; walk: number[]; frameRate: number };
    };

    evolution?: {
        targetId: number;
        level?: number;
        item?: string;
    };

    meta?: Record<string, any>;
}

// Mappings
const TYPE_MAP: Record<string, MonsterType> = {
    normal: MonsterType.Normal,
    fire: MonsterType.Fire,
    water: MonsterType.Water,
    grass: MonsterType.Grass,
    electric: MonsterType.Electric,
    ice: MonsterType.Ice,
    fighting: MonsterType.Fighting,
    poison: MonsterType.Poison,
    ground: MonsterType.Ground,
    flying: MonsterType.Flying,
    psychic: MonsterType.Psychic,
    bug: MonsterType.Bug,
    rock: MonsterType.Rock,
    ghost: MonsterType.Ghost,
    dragon: MonsterType.Dragon,
    steel: MonsterType.Steel,
    fairy: MonsterType.Fairy,
    dark: MonsterType.Dark,
};

const api = new PokemonClient();

async function downloadImage(url: string, filepath: string, shouldCrop: boolean) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'arraybuffer',
        }) as any;

        if (shouldCrop) {
            try {
                const image = await Jimp.read(response.data);
                // Auto-crop: Removes transparent border
                image.autocrop({ tolerance: 0, cropOnlyFrames: false });
                await image.writeAsync(filepath);
                return true;
            } catch (cropErr) {
                console.warn(`Crop failed for ${url}, falling back to raw save:`, cropErr);
                // Fallback to raw save if Jimp fails
                fs.writeFileSync(filepath, response.data);
                return true;
            }
        } else {
            // Raw save
            fs.writeFileSync(filepath, response.data);
            return true;
        }

    } catch (err) {
        console.error(`Error processing image ${url}:`, err);
        // Do not crash the entire process, just log failure
        return false;
    }
}

const GEN_RANGES: Record<number, { start: number, end: number, name: string }> = {
    1: { start: 1, end: 151, name: 'gen1' },
    2: { start: 152, end: 251, name: 'gen2' },
    3: { start: 252, end: 386, name: 'gen3' },
    4: { start: 387, end: 493, name: 'gen4' },
    5: { start: 494, end: 649, name: 'gen5' },
};

async function main() {
    const argv = await yargs(hideBin(process.argv))
        .option('gen', {
            type: 'number',
            description: 'Generation to seed (1-5)',
        })
        .option('start', {
            type: 'number',
            description: 'Start ID (overrides gen)',
        })
        .option('end', {
            type: 'number',
            description: 'End ID (overrides gen)',
        })
        .option('name', {
            type: 'string',
            description: 'Output filename (without extension)',
        })
        .option('no-crop', {
            type: 'boolean',
            description: 'Disable auto-cropping of sprites',
            default: false
        })
        .help()
        .argv;

    console.log('DEBUG ARGV:', argv); // Debug log

    let startId = 1;
    let endId = 151;
    let outputName = 'gen1';

    // Access properties safely
    const gen = argv.gen as number | undefined;

    if (gen && GEN_RANGES[gen]) {
        const range = GEN_RANGES[gen];
        startId = range.start;
        endId = range.end;
        outputName = range.name;
    }

    if (argv.start) startId = argv.start;
    if (argv.end) endId = argv.end;
    if (argv.name) outputName = argv.name;

    const OUTPUT_FILE = path.join(__dirname, `../../src/logic/data/${outputName}.db.ts`);
    const SPRITE_DIR = path.join(__dirname, `../../src/view/public/sprites/${outputName}`);

    console.log(`Starting Seeder with Auto-Crop: ${outputName} (IDs ${startId}-${endId})`);

    // Ensure directories exist
    if (!fs.existsSync(SPRITE_DIR)) {
        fs.mkdirSync(SPRITE_DIR, { recursive: true });
    }

    const pokedex: Record<string, IMonsterSpecies> = {};
    const evolutionMap: Record<string, string> = {}; // prev -> next

    for (let i = startId; i <= endId; i++) {
        const id = i.toString();
        process.stdout.write(`Fetching #${id}... `);

        try {
            // 1. Fetch Pokemon Data
            const pokemon = await api.getPokemonById(i);
            const species = await api.getPokemonSpeciesById(i);

            // 2. Download & Crop Sprite
            const spriteUrl = pokemon.sprites.front_default;
            if (spriteUrl) {
                const spritePath = path.join(SPRITE_DIR, `${id}.png`);
                await downloadImage(spriteUrl, spritePath, !argv['no-crop']);
            }

            // 3. Map Data
            const typeName = pokemon.types[0].type.name;
            const type = TYPE_MAP[typeName] || MonsterType.Normal;

            // Handle Evolution
            if (species.evolves_from_species) {
                const prevId = species.evolves_from_species.url.split('/').filter(Boolean).pop();
                if (prevId) {
                    evolutionMap[prevId] = id;
                }
            }

            // Rarity Logic
            const totalStats = pokemon.stats.reduce((acc, s) => acc + s.base_stat, 0);
            let rarity = MonsterRarity.Common;
            if (totalStats > 400) rarity = MonsterRarity.Rare;
            if (totalStats > 500) rarity = MonsterRarity.Epic;
            if (species.is_legendary || species.is_mythical) rarity = MonsterRarity.Legendary;

            // Stats Mapping
            const getStat = (name: string) => pokemon.stats.find(s => s.stat.name === name)?.base_stat || 50;

            pokedex[id] = {
                id: i, // number
                name: species.name.charAt(0).toUpperCase() + species.name.slice(1),
                types: [type],
                rarity: rarity,

                baseStats: {
                    hp: getStat('hp'),
                    atk: getStat('attack'),
                    def: getStat('defense'),
                    spAtk: getStat('special-attack'),
                    spDef: getStat('special-defense'),
                    speed: getStat('speed'),
                },

                catchRate: species.capture_rate || 45,
                baseExp: pokemon.base_experience || 60,
                growthRate: species.growth_rate?.name || 'medium',

                spriteInfo: {
                    main: `sprites/${outputName}/${id}.png`,
                    frameSize: { width: 96, height: 96 },
                    animations: { idle: [], walk: [], frameRate: 0 }
                },

                meta: {
                    height: pokemon.height,
                    weight: pokemon.weight,
                    is_legendary: species.is_legendary,
                    is_mythical: species.is_mythical,
                    genera: species.genera.find((g: any) => g.language.name === 'en')?.genus
                }
            };

            console.log('OK');

        } catch (error) {
            console.error(`FAILED: ${error}`);
        }
    }

    // Link Evolutions
    // Link Evolutions
    Object.keys(pokedex).forEach(key => {
        if (evolutionMap[key]) {
            pokedex[key].evolution = {
                targetId: parseInt(evolutionMap[key]),
                level: 25 // Placeholder, logic layer can override or we fetch chain later
            };
        }
    });

    // Write File
    let stringifyPokedex = JSON.stringify(pokedex, null, 4);

    // Enum Replacement Hack
    const rarityMap = {
        1: 'MonsterRarity.Common',
        2: 'MonsterRarity.Rare',
        3: 'MonsterRarity.Epic',
        4: 'MonsterRarity.Legendary'
    };
    Object.entries(rarityMap).forEach(([k, v]) => {
        stringifyPokedex = stringifyPokedex.replace(new RegExp(`"rarity": ${k}`, 'g'), `"rarity": ${v}`);
    });

    stringifyPokedex = stringifyPokedex.replace(/"types": \[\s*"([^"]+)"\s*\]/g, (match, t) => {
        const enumKey = Object.keys(MonsterType).find(key => MonsterType[key as keyof typeof MonsterType] === t);
        return enumKey ? `"types": [MonsterType.${enumKey}]` : match;
    });

    const constName = `POKEDEX_${outputName.toUpperCase()}`;

    let fileCtx = `import { IMonsterSpecies, MonsterRarity, MonsterType } from '../types/monster.interface';\n\n`;
    fileCtx += `export const ${constName}: Record<string, IMonsterSpecies> = ${stringifyPokedex};\n\n`;
    fileCtx += `export const getSpecies = (id: string): IMonsterSpecies | undefined => ${constName}[id];`;

    // Ensure output directory exists before writing
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, fileCtx);
    console.log(`\nSuccess! Database written to ${OUTPUT_FILE}`);
}


// Command: npx ts-node tools/seeder/seed.ts --gen 3
main();
