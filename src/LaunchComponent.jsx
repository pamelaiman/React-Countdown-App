import { useState } from "react";
import "./App.css";

export default function LaunchCountdown() {
  const [count, setCount] = useState(5);

  function resetNumber() {
    setCount(5);
    const utterance = new SpeechSynthesisUtterance("5");
    speechSynthesis.speak(utterance);
  }

  function minusOne() {
    if (count > 2) {
      const newCount = count - 1;
      setCount(newCount);
      const utterance = new SpeechSynthesisUtterance(newCount);
      speechSynthesis.speak(utterance);
    } else if (count === 2) {
      setCount("👩‍🚀");
      const utterance = new SpeechSynthesisUtterance(
        "preparing for take off..."
      );
      speechSynthesis.speak(utterance);
    } else if (count === "👩‍🚀") {
      setCount("🚀");
      const utterance = new SpeechSynthesisUtterance("BLAST OFF!");
      speechSynthesis.speak(utterance);
    }
  }

  return (
    <>
      <div>
        <div className="countDisplay">{count}</div>
        <button onClick={resetNumber}>Reset</button>
        <button onClick={minusOne}>Decrement</button>
      </div>
    </>
  );
}
