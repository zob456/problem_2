import React, { useState } from 'react';
import { numContext } from './contexts/numContext'
import './App.css';

// components
import CalcBtn from './components/CalcBtn'

function App() {
  const [value, setValue] = useState(10)
  const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <div className="App">
      <header className="App-header">
        <numContext.Provider value={{ value, setValue }}>
          {nums.map(num => (
            <CalcBtn num={num} key={num} />
          ))}
        </numContext.Provider>
      </header>
    </div>
  );
}

export default App;
