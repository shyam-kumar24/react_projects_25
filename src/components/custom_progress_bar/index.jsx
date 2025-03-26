import { useState } from "react";
import "./progress.css";

export default function ProgressBar() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleProgressPercent(e) {
    setProgressPercent(e.target.value);
    if (e.target.value > 100) {
      setErrorMsg("Please enter a value less than 100");
    } else {
      setErrorMsg("");
    }
  }

  return (
    <div className="progress-bar-container">
      <h1>Custom progress bar</h1>
      <div className="progress-bar">
        <div className="wrapper">
          {progressPercent >= 0 && progressPercent <= 100 ? (
            <div
              style={{ width: `${progressPercent}%` }}
              className="innerWrapper"
            >
              {progressPercent}
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
        <div>
          <label htmlFor="input">Input percentage: </label>
          <input
            type="number"
            value={progressPercent}
            onChange={handleProgressPercent}
            id="input"
          />
        </div>
      </div>
    </div>
  );
}
