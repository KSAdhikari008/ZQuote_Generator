import './App.css'

function App() {
 

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
        <div className="quote-container"></div>
        <div className="tags">#life</div>
        <button className="heading">Random Quote</button>
      </main>
    </div>
  );
}

export default App;