import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [value, setValue] = useState(0);

  const input = (e) => {
    const newVal = calculate(value, e.target.innerHTML);
    setValue(newVal);
    const result = document.getElementById('input');
    if (newVal.next !== null) {
      result.value = newVal.next;
    } else {
      result.value = newVal.total;
    }
  };

  return (
    <div className="calculator-wrapper">
      <h2 className="calculator-title">Lets do some Math!</h2>
      <div className="calculator">
        <form>
          <input name="input" type="text" id="input" />
        </form>
        <table className="keyboard-wrapper">
          <tbody className="keyboard">
            <tr>
              <th><button type="button" className="AC" onClick={input}>AC</button></th>
              <th><button type="button" className="plus-minus" onClick={input}>+/-</button></th>
              <th><button type="button" className="percent" onClick={input}>%</button></th>
              <th><button type="button" className="divide" onClick={input}>÷</button></th>
            </tr>
            <tr>
              <th><button type="button" className="one" onClick={input}>1</button></th>
              <th><button type="button" className="two" onClick={input}>2</button></th>
              <th><button type="button" className="three" onClick={input}>3</button></th>
              <th><button type="button" className="multiply" onClick={input}>x</button></th>
            </tr>
            <tr>
              <th><button type="button" className="four" onClick={input}>4</button></th>
              <th><button type="button" className="five" onClick={input}>5</button></th>
              <th><button type="button" className="six" onClick={input}>6</button></th>
              <th><button type="button" className="minus" onClick={input}>-</button></th>
            </tr>
            <tr>
              <th><button type="button" className="seven" onClick={input}>7</button></th>
              <th><button type="button" className="eight" onClick={input}>8</button></th>
              <th><button type="button" className="nine" onClick={input}>9</button></th>
              <th><button type="button" className="plus" onClick={input}>+</button></th>
            </tr>
            <tr>
              <th colSpan={2}><button type="button" className="zero" onClick={input}>0</button></th>
              <th><button type="button" className="dot" onClick={input}>.</button></th>
              <th><button type="button" className="equal" onClick={input}>=</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
