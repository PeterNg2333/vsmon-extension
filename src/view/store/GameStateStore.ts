import { signal, computed } from "@preact/signals";
import { IGameState, IXPUpdatePayload } from "../../logic/types";

const gameState = signal<IGameState | null>(null);
const xpUpdate = signal<IXPUpdatePayload | null>(null);

const setGameState = (state: IGameState) => {
    gameState.value = state;
}

const setXPUpdate = (update: IXPUpdatePayload) => {
    xpUpdate.value = update;
}

// ======== Computed Fields ========= //


export { gameState, xpUpdate, setGameState, setXPUpdate };
