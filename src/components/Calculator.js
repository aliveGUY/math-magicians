import { calculate, type, clear } from './logic/calculate';

function Calculator() {
  return (
    <div className="wrapper">
      <form>
        <input name="input" type="text" id="input" />
      </form>
      <table className="keyboard-wrapper">
        <tbody className="keyboard">
          <tr>
            <th><button type="button" className="AC" onClick={clear}>AC</button></th>
            <th><button type="button" className="plus-minus">+/-</button></th>
            <th><button type="button" className="percent" onClick={type}>%</button></th>
            <th><button type="button" className="divide" onClick={type}>÷</button></th>
          </tr>
          <tr>
            <th><button type="button" className="one" onClick={type}>1</button></th>
            <th><button type="button" className="two" onClick={type}>2</button></th>
            <th><button type="button" className="three" onClick={type}>3</button></th>
            <th><button type="button" className="multiply" onClick={type}>x</button></th>
          </tr>
          <tr>
            <th><button type="button" className="four" onClick={type}>4</button></th>
            <th><button type="button" className="five" onClick={type}>5</button></th>
            <th><button type="button" className="six" onClick={type}>6</button></th>
            <th><button type="button" className="minus" onClick={type}>-</button></th>
          </tr>
          <tr>
            <th><button type="button" className="seven" onClick={type}>7</button></th>
            <th><button type="button" className="eight" onClick={type}>8</button></th>
            <th><button type="button" className="nine" onClick={type}>9</button></th>
            <th><button type="button" className="plus" onClick={type}>+</button></th>
          </tr>
          <tr>
            <th colSpan={2}><button type="button" className="zero" onClick={type}>0</button></th>
            <th><button type="button" className="dot" onClick={type}>.</button></th>
            <th><button type="button" className="equal" onClick={calculate}>=</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
