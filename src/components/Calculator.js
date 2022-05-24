import './Calculator.css';

function Calculator() {
  return (
    <div className="wrapper">
      <form>
        <input type="text" id="input" />
      </form>
      <table className="keyboard-wrapper">
        <tbody className="keyboard">
          <tr>
            <th><button type="button" className="AC">AC</button></th>
            <th><button type="button" className="plus-minus">+/-</button></th>
            <th><button type="button" className="percent">%</button></th>
            <th><button type="button" className="divide">:</button></th>
          </tr>
          <tr>
            <th><button type="button" className="one">1</button></th>
            <th><button type="button" className="two">2</button></th>
            <th><button type="button" className="three">3</button></th>
            <th><button type="button" className="multiply">X</button></th>
          </tr>
          <tr>
            <th><button type="button" className="four">4</button></th>
            <th><button type="button" className="five">5</button></th>
            <th><button type="button" className="six">6</button></th>
            <th><button type="button" className="minus">-</button></th>
          </tr>
          <tr>
            <th><button type="button" className="seven">7</button></th>
            <th><button type="button" className="eight">8</button></th>
            <th><button type="button" className="nine">9</button></th>
            <th><button type="button" className="plus">+</button></th>
          </tr>
          <tr>
            <th colSpan={2}><button type="button" className="zero">0</button></th>
            <th><button type="button" className="dot">.</button></th>
            <th><button type="button" className="equal">=</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
