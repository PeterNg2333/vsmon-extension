import preact from "preact";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { GiGrapes } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";

const dashBoardData = {
  balls: 100,
  berries: 100,
  speed: "2.0 x",
  map: "Grassland",
};

const DashBoardItem: preact.ComponentType<{
  icon: preact.ComponentType<{ class?: string }>;
  value: string | number;
  color: string;
}> = ({ icon: Icon, value, color }) => {
  return (
    <span class={`text-${color}-400 items-center flex `}>
      <Icon class="text-[12px]" />
      <span class="ps-0.5 items-center justify-center">{value}</span>
    </span>
  );
};

const Header: preact.ComponentType = () => {
  return (
    <div class="flex-none z-50">
      <header class="w-full flex justify-between items-center px-2 py-1.5 bg-neutral-950 border-b border-neutral-800 shadow-sm">
        <div class="flex gap-3 text-[12px]">
          <DashBoardItem
            icon={MdOutlineCatchingPokemon}
            value={dashBoardData.balls}
            color="orange"
          />
          <DashBoardItem
            icon={GiGrapes}
            value={dashBoardData.berries}
            color="pink"
          />
          <DashBoardItem
            icon={RiSpeedFill}
            value={dashBoardData.speed}
            color="blue"
          />
        </div>
        <div class="flex items-center text-[10px] text-gray-500 hover:text-white hover:underline cursor-pointer">
          <span class="bg-neutral-800 px-2 py-0.5 rounded">
            {dashBoardData.map}
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
