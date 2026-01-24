import { IGameState, IFlowState } from "./game.interface";

// From VSCode Host/Chrome to View
type HostToViewMessageType =
    | { type: 'SYNC_STATE'; payload: IGameState }
    | { type: 'XP_UPDATE'; payload: { id: string, xp: number, level: number } }
    | { type: 'FLOW_STATUS'; payload: IFlowState };



// From View to VSCode Host/Chrome
type ViewToHostMessageType =
    | { type: 'READY' }
    | { type: 'RENAME_MONSTER'; payload: { id: string, newName: string } };

export { HostToViewMessageType, ViewToHostMessageType };
