import './App.css';
import { useState } from 'react';

const OPERATOR = "operator";

function App() {
  const [ operation, setOperation ] = useState('');
  const [ result, setResult ] = useState(0);
  const [ numberInput, setNumberInput ] = useState('');

  const handleOperation = (operationInput, type = "numberModifier") => {
    
    console.log("handling operation");
    if (operationInput === '0' && operation === "0") {
      console.log("too many zeros") //doesn't work for 0s??
    } else {
      console.log("updating state");
      setOperation(operation.concat(operationInput));
    }
    
  }

  const handleEqual = () => {

  }

  return (
    <div id="calculator">
        <div id="display">
          <p id="displayCalculation">{operation}</p>
          <p id="displayResult">{result}</p>
        </div>
    
        <div id="buttons">
          <button id="zero" style={{ gridArea: 'zero' }} className="button" onClick={() => handleOperation(0)}>0</button>
          <button id="one" style={{ gridArea: 'one' }} className="button" onClick={() => handleOperation(1)}>1</button>
          <button id="two" style={{ gridArea: 'two' }} className="button" onClick={() => handleOperation(2)}>2</button>
          <button id="three" style={{ gridArea: 'three' }} className="button" onClick={() => handleOperation(3)}>3</button>
          <button id="four" style={{ gridArea: 'four' }} className="button" onClick={() => handleOperation(4)}>4</button>
          <button id="five" style={{ gridArea: 'five' }} className="button" onClick={() => handleOperation(5)}>5</button>
          <button id="six" style={{ gridArea: 'six' }} className="button" onClick={() => handleOperation(6)}>6</button>
          <button id="seven" style={{ gridArea: 'seven' }} className="button" onClick={() => handleOperation(7)}>7</button>
          <button id="eight" style={{ gridArea: 'eight' }} className="button" onClick={() => handleOperation(8)}>8</button>
          <button id="nine" style={{ gridArea: 'nine' }} className="button" onClick={() => handleOperation(9)}>9</button>
          <button id="decimal" style={{ gridArea: 'decimal' }} className="button" onClick={() => handleOperation(".")}>.</button>
        
          <button id="clear" style={{ gridArea: 'clear' }} className="button" onClick={() => setOperation('')}>AC</button>

          <button id="add" style={{ gridArea: 'add' }} className="button" onClick={() => handleOperation("+", OPERATOR)}>+</button>
          <button id="subtract" style={{ gridArea: 'subtract' }} className="button" onClick={() => handleOperation("-", OPERATOR)}>-</button>
          <button id="multiply" style={{ gridArea: 'multiply' }} className="button" onClick={() => handleOperation("x", OPERATOR)}>x</button>
          <button id="divide" style={{ gridArea: 'divide' }} className="button" onClick={() => handleOperation("/", OPERATOR)}>/</button>
          <button id="equals" style={{ gridArea: 'equals' }} className="button" onClick={() => handleEqual()}>=</button>
       
        </div>
        
        <p>{"Debuggin || result " + result + " || operation: " + operation + "||"}</p>
  
      </div>
  );
}

export default App;
