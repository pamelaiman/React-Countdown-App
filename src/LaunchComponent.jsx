import { useState } from "react";
import "./App.css";

function LaunchCountdown() {
  const [count, setCount] = useState(5);

  function resetNumber() {
    setCount(5);
  }

  function minusOne() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function numberOrEmojiForCount(num) {
    if (num === 1) {
      return "👩‍🚀";
    } else if (num === 0) {
      return "🚀";
    } else {
      return num;
    }
  }

  const displayedNumber = numberOrEmojiForCount(count);

  return (
    <>
      <div>
        <div className="countDisplay">{displayedNumber}</div>
        <button onClick={resetNumber}>Reset</button>
        <button onClick={minusOne}>Decrement</button>
      </div>
    </>
  );
}

export default LaunchCountdown;
