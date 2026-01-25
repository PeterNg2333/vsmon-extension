import preact from "preact";
import AdventureScene from "../components/journal/AdventureScene";
import SquadPanel from "../components/journal/SquadPanel";
import { xpUpdate } from "../../store/GameStateStore";

const JournalTab: preact.ComponentType = () => {
  return (
    <section class="flex-1 flex flex-col relative w-full overflow-hidden">
      <AdventureScene xpUpdate={xpUpdate} />
      <SquadPanel />
    </section>
  );
};

export default JournalTab;
