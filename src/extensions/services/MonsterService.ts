import { VsmManager, MonsterType, MonsterRarity } from "../../logic";

class MonsterService {
    constructor(private readonly _manager: VsmManager) { }

    public get activeMonster() {
        return this._manager.getState().squad[0];
    }

    public handleKeystroke(charCount: number) {
        if (!this.activeMonster) return null;

        const oldLevel = this.activeMonster.level;
        this._manager.handleKeystroke(charCount);

        return {
            monster: this.activeMonster,
            didLevelUp: this.activeMonster.level > oldLevel
        };
    }

    public initTestData() {
        const testMon = {
            id: "test-mon-1",
            nickname: "小火龍 (測試員)",
            level: 1,
            xp: 0,
            species: {
                id: "p004",
                name: "小火龍",
                types: [MonsterType.Fire],
                rarity: MonsterRarity.Common,
                spriteInfo: {
                    sheetPath: "",
                    frameSize: { width: 32, height: 32 },
                    animations: { idle: [0], walk: [0], frameRate: 8 },
                },
                baseStats: { hp: 39, atk: 52, def: 43 },
            },
            personality: {
                nature: "Brave",
                statMultipliers: { hp: 1, atk: 1.1, def: 1 },
            },
            caughtAt: Date.now(),
        };

        this._manager.getState().squad.push(testMon);
        this._manager.getState().repository.push(testMon);
    }
}

export default MonsterService;