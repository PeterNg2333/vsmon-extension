import preact from "preact";

import { useEffect } from "preact/hooks";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { HostToViewMessageType } from "../../logic/types";
import {
  gameState,
  xpUpdate,
  setGameState,
  setXPUpdate,
} from "../store/GameStateStore";

const App: preact.ComponentType = () => {
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
    <main class="flex flex-col min-h-screen bg-neutral-900 text-white overflow-hidden">
      <Header />

      <main class="flex flex-col w-full pt-16 items-center justify-center">
        <div class="p-8">
          {xpUpdate.value ? (
            <div>
              <p>Name: {xpUpdate.value.id}</p>
              <p>XP: {xpUpdate.value.xp}</p>
              <p>Level: {xpUpdate.value.level}</p>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </main>

      <Footer />
    </main>
  );
};

export default App;
