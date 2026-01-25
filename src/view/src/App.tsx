import { useEffect, useState } from "preact/hooks";

import { HostToViewMessageType } from "../../logic/types";
import { gameState, xpUpdate } from "../store/GameStateStore";

const App = () => {
  const [msgCount, setMsgCount] = useState<number>(0);

  useEffect(() => {
    console.log("[VSMon View] App component mounted");

    const handleMessage = (event: MessageEvent) => {
      const message = event.data as HostToViewMessageType;
      console.log("[VSMon View] Received message:", message);

      if (message.type === "XP_UPDATE") {
        xpUpdate.value = { ...message.payload };
        setMsgCount((c) => c + 1);
      } else if (message.type === "SYNC_STATE") {
        gameState.value = message.payload;
        setMsgCount((c) => c + 1);
      }
    };

    window.addEventListener("message", handleMessage);

    try {
      const vscode = (window as any).acquireVsCodeApi?.();
      vscode?.postMessage({ type: "READY" });
      console.log("[VSMon View] Sent READY to Host");
    } catch (e) {
      console.warn(
        "[VSMon View] acquireVsCodeApi failed (ignore if in browser)",
      );
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="container-fluid" style={{ padding: "1rem" }}>
      <div className="nes-container with-title is-rounded is-dark">
        <p className="title">VSMon Debug ({msgCount})</p>
        {!xpUpdate.value ? (
          <p>
            Waiting for keystrokes... <br />
            (Please type in your editor)
          </p>
        ) : (
          <div className="lists">
            <ul className="nes-list is-disc">
              <li>ID: {xpUpdate.value.id}</li>
              <li>LV: {xpUpdate.value.level}</li>
              <li>XP: {Math.floor(xpUpdate.value.xp)}</li>
            </ul>
            <progress
              className="nes-progress is-primary"
              value={xpUpdate.value.xp % 100}
              max="100"
            ></progress>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
