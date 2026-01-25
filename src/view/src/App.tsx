import preact from "preact";
import { useEffect, useState } from "preact/hooks";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Tabs
import JournalTab from "./tabs/Journal";
import RanchTab from "./tabs/Ranch";
import StorageTab from "./tabs/Storage";

import { HostToViewMessageType } from "../../logic/types";
import { setGameState, setXPUpdate } from "../store/GameStateStore";

// Type for Tab IDs
type TabId = "journal" | "ranch" | "storage";

const App: preact.ComponentType = () => {
  const [activeTab, setActiveTab] = useState<TabId>("journal");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data as HostToViewMessageType;
      switch (message.type) {
        case "XP_UPDATE":
          setXPUpdate(message.payload);
          break;
        case "SYNC_STATE":
          setGameState(message.payload);
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main class="flex flex-col h-screen w-full bg-neutral-900 text-white overflow-hidden selection:bg-blue-500/30">
      <div class="flex-none z-50">
        <Header />
      </div>

      {/* Content Area */}
      {activeTab === "journal" && <JournalTab />}
      {activeTab === "ranch" && <RanchTab />}
      {activeTab === "storage" && <StorageTab />}


        <Footer
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as TabId)}
        />
    </main>
  );
};

export default App;