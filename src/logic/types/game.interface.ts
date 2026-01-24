import { IMonsterState } from "./monster.interface";


interface IGameState {
    maxSquadSize: number;
    squad: IMonsterState[]; // squad of monsters in the garden
    repository: IMonsterState[]; // repository of monsters
    totalKeystrokes: number; // total number of keystrokes
    flow: IFlowState;
}

interface IFlowState {
    isActive: boolean;
    combo: number;         // Continuous input count
    multiplier: number;    // Current multiplier (e.g., 1.5)
    lastInputTime: number; // Last input timestamp, used for cooldown calculation
}

export { IGameState, IFlowState };
