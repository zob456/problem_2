import React, { useState } from 'react';
import './App.css';

// components
import Calculator from './components/Calculator'




function App() {
  const [input, setInput] = useState<string>('');
  const [currentNum, setCurrentNum] = useState<string>('');
  const [prevNum, setPrevnum] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  const addDecimal = (val: string) => {
    if (input.indexOf('.') === -1) {
      setInput(input + val);
    }
  };

  const clear = () => setInput('')

  const add = () => {
    setPrevnum(input);
    clear()
    setOperator("plus");
  };

  const subtract = () => {
    setPrevnum(input);
    clear()
    setOperator("subtract");
  };

  const multiply = () => {
    setPrevnum(input);
    clear()
    setOperator("multiply");
  };

  const divide = () => {
    setPrevnum(input);
    clear()
    setOperator("divide");
  };

  const evaluate = () => {
    setCurrentNum(input);

    switch (operator) {
      case "plus":
        const plusSolution: number = parseInt(prevNum) +
          parseInt(currentNum)
        return setInput(plusSolution.toString());

      case "subtract":
        const minusSolution: number = parseInt(prevNum) +
          parseInt(currentNum)
        return setInput(minusSolution.toString());

      case "multiply":
        const multiplySolution: number = parseInt(prevNum) +
          parseInt(currentNum)
        return setInput(multiplySolution.toString());

      case "divide":
        const divideSolution: number = parseInt(prevNum) +
          parseInt(currentNum)
        return setInput(divideSolution.toString());

      default:
        break;
    }

  }

  const funcs = [
    add, subtract, multiply, divide, addDecimal, evaluate
  ]



  const btns: any[] = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/']

  return (
    <div className="App">
      <header className="App-header">
        <Calculator funcs={funcs} clear={clear} btns={btns} setInput={setInput} input={input} />
      </header>
    </div>
  );
}

export default App;
