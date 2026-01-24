enum MonsterType {
    Normal = 'normal',
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
    Electric = 'electric',
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
    id: string;
    name: string;
    types: MonsterType[];
    rarity: MonsterRarity;
    spriteInfo: {
        sheetPath: string;
        frameSize: { width: number, height: number };
        animations: IMonsterAnimation;
    };
    baseStats: {
        hp: number;
        atk: number;
        def: number;
    };
    evolutionId?: string;
    evolutionLevel?: number;
}

interface IMonsterState {
    id: string;
    species: IMonsterSpecies;
    nickname: string;
    level: number;
    xp: number;
    personality: {
        nature: string;
        statMultipliers: { hp: number; atk: number; def: number };
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
