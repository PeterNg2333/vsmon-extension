import preact from "preact";
import { Signal } from "@preact/signals";
import { IXPUpdatePayload } from "../../../../logic/types";

interface AdventureSceneProps {
  xpUpdate: Signal<IXPUpdatePayload | null>;
}

const AdventureScene: preact.ComponentType<AdventureSceneProps> = ({
  xpUpdate,
}) => {
  return (
    <div class="flex-1 h-auto w-full relative border-b border-white/5 bg-gradient-to-b from-neutral-900 to-neutral-900/50">
      {/* Placeholder for Canvas/Game Scene */}
      <div class="absolute inset-0 flex items-center justify-center text-neutral-700 font-mono text-xs pointer-events-none">
        [ ADVENTURE SCENE 60% ]
      </div>

      {/* XP Display floating on top */}
      {xpUpdate.value && (
        <div class="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded backdrop-blur text-xs font-mono border border-white/10 z-10">
          XP: {xpUpdate.value.xp}
        </div>
      )}
    </div>
  );
};

export default AdventureScene;
