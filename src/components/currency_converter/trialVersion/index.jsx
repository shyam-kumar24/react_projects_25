import { useEffect, useState } from "react";
import "./currency.css";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amountEntered, setAmountEntered] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState('')
  const [exchangeRate , setExchangeRate] = useState('')


  async function fetchExchangeRate() {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`
    );
    const result = await apiResponse.json();
    const conversionRate = result.rates[toCurrency]
    setConvertedAmount((conversionRate*amountEntered).toFixed(2))

    setExchangeRate(conversionRate)
  }

  useEffect(() => {
    fetchExchangeRate();
  },[fromCurrency,toCurrency,amountEntered]);

  return (
    <div className="main-container">
      <h1># Currency converter</h1>
      <div className="input-div">
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={amountEntered}
          onChange={(e) => setAmountEntered(e.target.value)}
        />
        <select name="" id="" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>
      </div>
      <p>To</p>
      <div className="output-div">
        <input type="text" readOnly value={convertedAmount}/>
        <select name="" id="" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>
      </div>
      <p className="exchange-rate">Exhange Rate:1 {fromCurrency} = {exchangeRate} {toCurrency} </p>
    </div>
  );
}
