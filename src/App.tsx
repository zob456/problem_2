import React from 'react';
import './App.css';

// components
import Calculator from './components/Calculator'




function App() {

  const btns: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0,]

  return (
    <div className="App">
      <header className="App-header">
        <Calculator btns={btns} />
      </header>
    </div>
  );
}

export default App;
