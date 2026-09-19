import './App.css'

function App() {
 

 
  return (
    <div className="app">
      <header>
        <div className="left-section">
          <div className="brand">ZQUOTELY</div>
        </div>
        <div className="right-section">
          <div className="theme-toggle"></div>
        </div>
      </header>
      <main>
        <div className="quote-container"></div>
        <div className="tags"></div>
        <button className="heading">Random Quote</button>
      </main>
    </div>
  );
}

export default App;