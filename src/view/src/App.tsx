import Preact from "preact";
import { useState, useEffect } from "preact/hooks";

interface XPUpdatePayload {
  id: string;
  xp: number;
  level: number;
}

const App: Preact.ComponentType = () => {
  const [xpData, setXpData] = useState<XPUpdatePayload | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      switch (message.type) {
        case "XP_UPDATE":
          setXpData(message.payload);
          break;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#003d38ff",
        color: "white",
        padding: "10px",
      }}
    >
      <h2>VSMon Garden</h2>

      {xpData ? (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #4fd1c5",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <p>
            <strong>Status:</strong> Connected
          </p>
          <p>Level: {xpData.level}</p>
          <p>XP: {Math.floor(xpData.xp)}</p>
        </div>
      ) : (
        <p>Waiting for keystrokes...</p>
      )}
    </div>
  );
};

export default App;
