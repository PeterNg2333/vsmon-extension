import { signal, computed } from "@preact/signals";
import { IGameState, IXPUpdatePayload } from "../../logic/types";

const gameState = signal<IGameState | null>(null);
const xpUpdate = signal<IXPUpdatePayload | null>(null);

// ======== Computed Fields ========= //


export { gameState, xpUpdate };
