import preact from "preact";
import PokemonCard from "./PokemonCard";

const SquadPanel: preact.ComponentType = () => {
  return (
    <div
      class="h-auto shrink-0 max-h-[50%] w-full relative bg-neutral-800/30 backdrop-blur-sm px-2 py-2.5 overflow-y-auto 
          [&::-webkit-scrollbar]:w-1.5 
          [&::-webkit-scrollbar-track]:bg-transparent 
          [&::-webkit-scrollbar-thumb]:bg-white/10 
          [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:hover:bg-white/20"
    >
      {/* Strict Responsive Grid: 1x6, 2x3, or 3x2 based on sidebar width */}
      <div class="grid grid-cols-1 min-[280px]:grid-cols-2 min-[480px]:grid-cols-3 gap-2 h-full content-start text-xs">
        {Array.from({ length: 6 }).map((_, index) => (
          <PokemonCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SquadPanel;
