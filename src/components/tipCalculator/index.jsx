import { useState } from "react";
import "./tip.css";

export default function TipCalculatorMe() {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [noOfPeople, setNoOfPeople] = useState(1);
  const [totalAmount, setTotalAmount] = useState(null)
  const [errorMsg, setErrorMsg] = useState("");
  
  
  function calculateTip() {

    if( !billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <=0 ){
        setErrorMsg("Please enter valid values for Bill amount & Tip Percentage");
        return
    }

    const totalAt = (billAmount + (billAmount*tipPercentage)/100).toFixed(2)
    
    const tipPerPer = (((billAmount*tipPercentage)/100)/noOfPeople).toFixed(2)
    const totalAmtPerPer = (totalAt/noOfPeople).toFixed(2)
    
    setTotalAmount({
        totalAnt: totalAt,
        tipPerPerson: tipPerPer,
        totalAmtPerPer: totalAmtPerPer
    })

    setErrorMsg('')
  }


  return (
    <div className="main-container">
      <h1>Tip calculator</h1>
      <div className="input-container">
        <div className="input-div">
          <label htmlFor="bill-amount">Bill amount</label>
          <input
            type="number"
            id="bill-amount"
            onChange={(e) => setBillAmount(Number(e.target.value))}
            value={billAmount || ""}
            placeholder="Enter the bill amount.."
          />
        </div>
        <div className="input-div">
          <label htmlFor="tip-percentage">Tip percentage</label>
          <input
            type="number"
            id="tip-percentage"
            onChange={(e) => setTipPercentage(Number(e.target.value))}
            value={tipPercentage || ""}
          />
        </div>
        <div className="input-div">
          <label htmlFor="no-of-people">No of People</label>
          <input
            type="number"
            id="no-of-people"
            onChange={(e) => setNoOfPeople(Number(e.target.value))}
            value={noOfPeople || ""}
          />
        </div>
      </div>
      <button className="calculate-tip-btn"  onClick={() => calculateTip()}>Calculate Tip</button>
        {
            errorMsg ? <p className="error-message">{errorMsg}</p> : null
        }
        {
            totalAmount && (
                <div>
                    <p>Total amount: {totalAmount.totalAnt}</p>
                    <p>Tip per person: {totalAmount.tipPerPerson}</p>
                    <p>Total amount per person: {totalAmount.totalAmtPerPer}</p>
                </div>
            )
        }
      
    </div>
  );
}
