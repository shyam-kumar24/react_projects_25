import { useState } from "react";
import "./style.css";

export default function BmiCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')


  function calculateBmi() {

    if(!height || !weight){
      setErrorMsg("Please enter both height and weight");
      return
    }

    if(height <= 0 || weight <= 0){
      setErrorMsg("Please enter valid numeric values for both height and weight");
      return
    }


    const BMI = weight/((height/100)**2)
    setBmi(BMI)

    setErrorMsg('')
  }

  
  return (
    <div className="main-container">
      <h1>BMI calculator</h1>
      <div className="height-div">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          className="height"
          id="height"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className="weight-div">
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          className="weight"
          id="weight"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <button className="button" onClick={() => calculateBmi()}>
        calculate BMI
      </button>
      {errorMsg ? <p>{errorMsg}</p> : null}
      { errorMsg !== '' ? null : bmi < 18.5 ? <p>under weight</p> : bmi >= 18.5 && bmi <= 24.9 ? <p>normal weight</p> : bmi >= 25 && bmi <= 29.9 ? <p>over weight</p> : bmi > 30 ? <p>obese</p>: null}   
    </div>
  );
}
