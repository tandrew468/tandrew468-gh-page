import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is still under construction.
        </p>
        <p>Some of my projects that I have worked on are:</p>
        <a
          className=""
          href="http://131.170.250.223/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Australian Space Database
        </a>
        <a
            className=""
            href="http://bookeroo.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
        >
          Bookeroo
        </a>
        <a
            className="https://www.linkedin.com/in/tandrew468/"
            href=""
            target="_blank"
            rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>
        <a
            className="https://github.com/tandrew468"
            href=""
            target="_blank"
            rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </header>
    </div>
  );
}

export default App;
