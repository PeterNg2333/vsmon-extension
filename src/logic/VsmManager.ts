import { IGameState, IMonsterState, IFlowState } from "./types";

class VsmManager {
    public KEY_STREAK_TIMEOUT = 5000;
    public XP_MULTIPLIER_BASE = 1;
    public XP_MULTIPLIER_MAXCLAMP = 2;
    public XP_MULTIPLIER_GROWTH_RATE = 0.1;
    private state: IGameState;

    constructor(initialState?: IGameState) {
        this.state = initialState || this._getDefaultState();
    }

    private _getDefaultState(): IGameState {
        return {
            maxSquadSize: 6,
            squad: [],
            repository: [],
            totalKeystrokes: 0,
            flow: {
                isActive: false,
                combo: 0,
                multiplier: 1,
                lastInputTime: 0
            }
        }
    }

    public getState(): IGameState {
        return this.state;
    }

    public setState(state: IGameState): void {
        this.state = state;
    }

    public handleKeystroke(amount: number = 1): void {
        this.state.totalKeystrokes += amount;
        this._updateFlowState(amount);
        this._addXpToAllMonsters(this.state.squad, this.state.flow.multiplier, amount);

    }

    private _addXpToAllMonsters(monsters: IMonsterState[], xpMultiplier: number, amount: number): void {
        if (this.state.squad.length <= 0) return;

        const baseXp = amount * xpMultiplier;
        const xpPerMon = baseXp / monsters.length;

        monsters.forEach(monster => {
            monster.xp += xpPerMon;
            let xpRequired = monster.level * 50 * (monster.species.rarity || 1);
            while (monster.xp >= xpRequired) {
                monster.level++;
                monster.xp -= xpRequired;
                xpRequired = monster.level * 50 * (monster.species.rarity || 1);
                console.log(`[VSMon] ${monster.nickname} (${monster.species.name}) LV：${monster.level}`);
            }
        });
    }

    private _updateFlowState(amount: number): void {
        const now = Date.now();
        const gap = now - this.state.flow.lastInputTime;
        const isWithinKeyStreakTimeout = gap < this.KEY_STREAK_TIMEOUT;

        if (isWithinKeyStreakTimeout) {
            this.state.flow.combo += Math.min(10, amount);
            const multiplierBonus = Math.floor(this.state.flow.combo / 50) * this.XP_MULTIPLIER_GROWTH_RATE;
            this.state.flow.multiplier = Math.min(
                this.XP_MULTIPLIER_MAXCLAMP,
                this.XP_MULTIPLIER_BASE + multiplierBonus
            );
            this.state.flow.isActive = true;
        } else {
            this.state.flow.combo = 0;
            this.state.flow.multiplier = this.XP_MULTIPLIER_BASE;
            this.state.flow.isActive = false;
        }

        this.state.flow.lastInputTime = now;
    }
}

export { VsmManager };