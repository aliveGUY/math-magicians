import operate from './operate';

function Calculator() {
  const type = (e) => {
    const form = document.forms[0];
    form[0].value += e.target.innerText;
  };

  const clear = () => {
    const form = document.forms[0];
    form[0].value = '';
  };

  const calculate = () => {
    const form = document.forms[0];
    const equation = form[0].value.match(/\d+|\D+/g);
    let index = 0;
    while (index !== equation.length) {
      if (equation[index] === '-') {
        equation[index + 1] *= (-1);
      }
      if (!Number.isNaN(parseInt(equation[index], 10))) {
        equation[index] *= (-1) * (-1);
      }

      if (typeof equation[index] === 'string' && index > 0) {
        equation[index + 1] = operate(equation[index - 1], equation[index + 1], equation[index] === '-' ? '+' : equation[index]);
        form[0].value = equation[index + 1];
      }
      index += 1;
    }
  };

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
