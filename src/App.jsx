import { useState } from 'react';
import './App.css'

function App() {

  const [quote, setQuote] = useState('');

  async function getQuote(){

    const URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    const res = await fetch(
      `${URL}/v2/randomquotes?categories=wisdom`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );
    const data  = await res.json();

    console.log(data);
    setQuote(data[0].quote);
  }

  return (
    <div className="app">
      <header>
        <div className="left-section">
          <div className="brand">QUOTELY</div>
        </div>
        <div className="right-section">
          <div className="theme-toggle">theme</div>
        </div>
      </header>
      <main>
        <div className="quote-container">
          {quote && quote}
        </div>
        <div className="tags">#life</div>
        <button className="heading" onClick={getQuote}>Get Random Quote</button>
      </main>
    </div>
  );
}

export default App;