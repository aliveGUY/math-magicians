import operate from '../components/logic/operate';

describe('Operate', () => {
  test('sum', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });

  test('subtract', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });

  test('multiply', () => {
    expect(operate(1, 1, 'x')).toBe('1');
  });

  test('divide', () => {
    expect(operate(1, 1, '÷')).toBe('1');
  });

  test('percent', () => {
    expect(operate(1, 1, '%')).toBe('0');
  });
});
