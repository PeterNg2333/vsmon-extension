import preact from "preact";
import { FaHome } from "react-icons/fa";
import { LuHardDrive } from "react-icons/lu";
import { CgPokemon } from "react-icons/cg";

interface NavItemProps {
  id: string;
  name: string;
  icon: preact.ComponentType<{ class?: string }>;
  active?: boolean;
  onClick: () => void;
}

const NavItem: preact.ComponentType<NavItemProps> = ({
  id,
  name,
  icon: Icon,
  active = false,
  onClick,
}) => {
  const activeClass = active
    ? "bg-neutral-800 rounded text-emerald-400"
    : "text-gray-500 hover:text-gray-300";
  return (
    <button
      key={id}
      onClick={onClick}
      class={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${activeClass}`}
    >
      <Icon class="text-[14px] mb-0.5" />
      <span class="text-[10px] font-medium tracking-wide">{name}</span>
    </button>
  );
};

interface FooterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Footer: preact.ComponentType<FooterProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div class="flex-none z-50">
      <footer class="w-full bg-neutral-900/90 backdrop-blur-md border-t border-white/10 flex justify-around items-center pb-2 pt-2 shadow-2xl">
        <NavItem
          id="journal"
          name="Journal"
          icon={CgPokemon}
          active={activeTab === "journal"}
          onClick={() => onTabChange("journal")}
        />
        <NavItem
          id="ranch"
          name="Ranch"
          icon={FaHome}
          active={activeTab === "ranch"}
          onClick={() => onTabChange("ranch")}
        />
        <NavItem
          id="storage"
          name="Storage"
          icon={LuHardDrive}
          active={activeTab === "storage"}
          onClick={() => onTabChange("storage")}
        />
      </footer>
    </div>
  );
};

export default Footer;
