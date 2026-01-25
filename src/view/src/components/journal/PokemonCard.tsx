import preact from "preact";
import { CgPokemon } from "react-icons/cg";

interface PokemonCardProps {
  index: number;
}

const PokemonCard: preact.ComponentType<PokemonCardProps> = ({ index }) => {
  return (
    <div class="w-full h-12 bg-neutral-800/80 rounded-lg border border-white/10 flex flex-row items-center ps-1.5 pe-2 gap-2 hover:bg-neutral-800 transition-all cursor-pointer group hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Icon Side */}
      <div class="flex-none w-6 h-6 bg-black/30 rounded-full flex items-center justify-center border border-white/5 text-xl text-yellow-400">
        <CgPokemon />
      </div>

      {/* Stats Side */}
      <div class="flex-1 flex flex-col justify-center gap-1 overflow-hidden">
        <div class="flex justify-between items-baseline">
          <span class="font-bold text-neutral-200 truncate">Pikachu</span>
          <span class="font-mono text-[10px] text-blue-300">
            Lv.{index + 2}
          </span>
        </div>

        {/* XP Bar */}
        <div class="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
          <div
            class="h-full bg-blue-500 rounded-full"
            style={{ width: `${(Math.random() * 100).toFixed(0)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
