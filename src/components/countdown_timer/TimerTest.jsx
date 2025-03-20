import { useState } from "react";
import "./timer.css";

export default function TimerTest() {

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [timer, setTimer] = useState('')


  function handleStart(){
    let totalSeconds = hour*60*60 + minute*60 + second

    if(totalSeconds === 0) return

    let timerId = setInterval(() => {
        totalSeconds--

        let newHour = Math.floor(totalSeconds/(60*60))
        setHour(newHour)
        let leftSeconds1 = totalSeconds - newHour*(60*60) 
        let newMin = Math.floor(leftSeconds1/60)
        setMinute(newMin)
        let leftSeconds2 = leftSeconds1 - newMin*60
        setSecond(leftSeconds2)

    },1000)
    setTimer(timerId)
  }

  function handleReset(){
    clearInterval(timer)
    console.log('reset clicked');
    setHour(0)
    setMinute(0)
    setSecond(0)
  }

  function handlePause(){
    clearInterval(timer)
  }

  return (
    <div className="main-container">
      <h1># Countdown timer</h1>
      <div className="input-div">
        <input
          type="text"
          className="time hour"
          onChange={(e) => setHour(Number(e.target.value))}
          value={hour}
        />
        <input
          type="text"
          className="time minute"
          onChange={(e) => setMinute(Number(e.target.value))}
          value={minute}
        />
        <input
          type="text"
          className="time second"
          onChange={(e) => setSecond(Number(e.target.value))}
          value={second}
        />
      </div>
      <div className="btn-div">
        <button className="pause" onClick={() => handlePause()}>Pause</button>
        <button className="reset" onClick={() => handleReset()}>Reset</button>
        <button className="start"  onClick={() => handleStart()}>Start</button>
      </div>
    </div>
  );
}

// gpt improvisation : 

// import { useState, useRef } from "react";
// import "./timer.css";

// export default function TimerTest() {
//   const [hour, setHour] = useState('');
//   const [minute, setMinute] = useState('');
//   const [second, setSecond] = useState('');
//   const timerRef = useRef(null); // Store the interval ID

//   function handleStart() {
//     let totalSeconds = hour * 60 * 60 + minute * 60 + second;

//     if (totalSeconds === 0 || timerRef.current) return; // Prevent multiple intervals

//     timerRef.current = setInterval(() => {
//       if (totalSeconds <= 0) {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//         return;
//       }

//       totalSeconds--;

//       setHour(Math.floor(totalSeconds / (60 * 60)));
//       let leftSeconds1 = totalSeconds % (60 * 60);
//       setMinute(Math.floor(leftSeconds1 / 60));
//       setSecond(leftSeconds1 % 60);
//     }, 1000);
//   }

//   function handleReset() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//     console.log("reset clicked");
//     setHour('');
//     setMinute('');
//     setSecond('');
//   }

//   function handlePause() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   }

//   return (
//     <div className="main-container">
//       <h1># Countdown timer</h1>
//       <div className="input-div">
//         <input
//           type="text"
//           className="time hour"
//           onChange={(e) => setHour(Number(e.target.value))}
//           value={hour}
//         />
//         <input
//           type="text"
//           className="time minute"
//           onChange={(e) => setMinute(Number(e.target.value))}
//           value={minute}
//         />
//         <input
//           type="text"
//           className="time second"
//           onChange={(e) => setSecond(Number(e.target.value))}
//           value={second}
//         />
//       </div>
//       <div className="btn-div">
//         <button className="pause" onClick={handlePause}>Pause</button>
//         <button className="reset" onClick={handleReset}>Reset</button>
//         <button className="start" onClick={handleStart}>Start</button>
//       </div>
//     </div>
//   );
// }
