// "https://api.quotable.io/quotes/random"

import { useState, useEffect } from "react";
import "./quote.css";

export default function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");

  async function fetchQuote() {

    try{

        setLoading(true)
        const response = await fetch("https://api.adviceslip.com/advice", {
            method: "GET",
          });
        const result = await response.json();

        if(result ){
            setLoading(false)
            console.log(result);
            setQuote(result);
        }
        
    }catch(e){
        setLoading(false)
        console.log(e);
    }
    
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  if(loading){
    return <h3>Loading data ! please wait.</h3>
  }

  return (
    <div className="main-container">
      <h1># Random Quote Generator</h1>
      <div className="quotes-div">
        <p>{quote.slip.advice}</p>
      </div>
      <button className="refresh" onClick={() => handleRefresh()}>
        Refresh
      </button>
    </div>
  );
}
