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

interface IMonsterAnimation {
    idle: number[];
    walk: number[];
    frameRate: number;
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
        animations?: IMonsterAnimation;
    };
    evolution?: {
        targetId: number;
        level?: number;
        item?: string;
    };
    meta?: Record<string, any>;
}

interface IMonsterState {
    id: string;
    species: IMonsterSpecies;
    nickname: string;
    level: number;
    xp: number;
    personality?: {
        nature: string;
    };
    caughtAt: number;
}
export {
    MonsterType,
    MonsterRarity,
    IMonsterAnimation,
    IMonsterSpecies,
    IMonsterState,
};
