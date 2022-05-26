import operate from './operate';

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

export { calculate, type, clear };
