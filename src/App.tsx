import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="font-bold text-3xl">Hi!</div>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <div className="font-semibold "><code>under construction...</code></div>
      </header>

      <Footer />
    </div>
  );
}

export default App;
