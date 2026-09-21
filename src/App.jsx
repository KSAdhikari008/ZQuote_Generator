import { useState } from 'react';
import './App.css'

function App() {

  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function getQuote(){
    setLoading(true);

    try{
      
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
      setQuote(data[0]);

    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
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
        <input type='text'  className="search-category"/>
        {loading 
          ? <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          : quote && 
          <div className="quote-container">
            <div className="quote">
              {quote.quote}
            </div>
            <div className="author">
              - {quote.author ? quote.author : "unknown"}
            </div>
            <div className="categories">
              {quote.categories.map(c => "#"+c+" ")}
            </div>
          </div>
        }
        <button className="getBtn" onClick={getQuote} disabled={loading && true}>Get Quote</button>
      </main>
    </div>
  );
}

export default App;