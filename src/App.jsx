import { useState } from 'react';
import './App.css'
import { IoLogoGithub } from 'react-icons/io5';

function App() {

  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function getQuote(categoryParam  = ''){
    setLoading(true);

    try{
      
      const URL = import.meta.env.VITE_API_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;
      
      
      const res = await fetch(
        `${URL}/v2/randomquotes?categories=${encodeURIComponent(categoryParam )}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      const data  = await res.json();
      
      if(data.length === 0){
      alert('No quotes available for this category. Try another one.');
        return;
      }

      setQuote(data[0]);
      setCategory('');
      
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  }

  function getByCategory(e){
    e.preventDefault();
    getQuote(category);

  }

  return (
    <div className="app">
      <header>
        <div className="left-section">
          <div className="brand">QUOTELY</div>
        </div>
        <div className="right-section">
          <a href="https://github.com/KSAdhikari008/ZQuote_Generator"><IoLogoGithub/></a>           
          <div className="theme-toggle">theme</div>
        </div>
      </header>

      <main>
        <div className="heading">
          <h1>
            <span>One Thought.</span>
            <span> One Quote.</span>
          </h1>
          <p>Enter a category to begin.</p>
        </div>
        <form onSubmit={getByCategory} className='category-form'>
          <input type='text' 
                className="search-category"
                placeholder='e.g. happiness, love, success' 
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                />
          <button type='submit' className='getBtn' disabled={ loading || !category.trim()} >Get Quote</button>
          </form>
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
              {quote.categories.map(c =>( 
                <span key={c}>#{c} </span> 
                ))}
            </div>
          </div>
        }
        <div className="or">OR</div>
        <button className="getBtn getRandomBtn" 
                onClick={()=>{
                  getQuote('')
                // React passes the click event to the event handler(fnc).
                // onClick={getQuote} effectively calls getQuote(event), so the default argument ('') is not used.
                // Wrapping it in an arrow function prevents the event from being passed to getQuote.
                // React passes the event to the arrow function, which then calls getQuote() normally.
                }} 
                disabled={loading}>Get a Random Quote</button>
      </main>
    </div>
  );
}

export default App;