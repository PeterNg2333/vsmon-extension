import { IGameState, IFlowState } from "./game.interface";

// ============ From VSCode Host/Chrome to View ============ // 
interface IXPUpdatePayload {
    id: string;
    xp: number;
    level: number;
}

type HostToViewMessageType =
    | { type: 'SYNC_STATE'; payload: IGameState }
    | { type: 'XP_UPDATE'; payload: IXPUpdatePayload }
    | { type: 'FLOW_STATUS'; payload: IFlowState };

export { IXPUpdatePayload, HostToViewMessageType }

// ============ From View to VSCode Host/Chrome ============ // 
interface IRenameMonsterPayload {
    id: string;
    newName: string;
}

type ViewToHostMessageType =
    | { type: 'READY' }
    | { type: 'RENAME_MONSTER'; payload: IRenameMonsterPayload };

export { ViewToHostMessageType, IRenameMonsterPayload };
