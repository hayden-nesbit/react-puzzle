import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-3 mb-5">
      <div className="App">
      
        <Board />
      </div>
    </div>
  );
}

export default App;
