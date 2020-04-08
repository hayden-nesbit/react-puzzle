import React from 'react';
import './App.css';
import Board from './Board'
import Image from './Image'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-3 mb-5">
      <div className="App">
        <Board />
        <Image />
      </div>
    </div>
  );
}

export default App;
