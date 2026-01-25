import preact from "preact";
import { FaHome } from "react-icons/fa";
import { LuHardDrive } from "react-icons/lu";
import { CgPokemon } from "react-icons/cg";

const NavItem: preact.ComponentType<{
  id: string;
  name: string;
  icon: preact.ComponentType<{ className?: string }>;
  active?: boolean;
}> = ({ id, name, icon: Icon, active = false }) => {
  const activeClass = active
    ? "bg-neutral-800 rounded text-emerald-400"
    : "text-gray-500 hover:text-gray-300";
  return (
    <button
      key={id}
      className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${activeClass}`}
    >
      <Icon className="text-[14px] mb-0.5" />
      <span className="text-[10px] font-medium tracking-wide">{name}</span>
    </button>
  );
};

const Footer: preact.ComponentType = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-neutral-900/90 backdrop-blur-md border-t border-white/10 flex justify-around items-center pb-2 pt-2 z-50 shadow-2xl">
      <NavItem id="journal" name="Journal" icon={CgPokemon} active={true} />
      <NavItem id="ranch" name="Ranch" icon={FaHome} />
      <NavItem id="storage" name="Storage" icon={LuHardDrive} />
    </footer>
  );
};

export default Footer;
