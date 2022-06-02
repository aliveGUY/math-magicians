import calculate from '../components/logic/calculate';

describe('Calculate', () => {
  test('multiply', () => {
    const operation = {
      total: '1',
      next: '1',
      operation: 'x',
    };
    const a = calculate(operation, operation.operation);
    expect(a.total).toBe('1');
  });

  test('sum', () => {
    const operation = {
      total: '1',
      next: '1',
      operation: '+',
    };
    const a = calculate(operation, operation.operation);
    expect(a.total).toBe('2');
  });

  test('subtract', () => {
    const operation = {
      total: '1',
      next: '1',
      operation: '-',
    };
    const a = calculate(operation, operation.operation);
    expect(a.total).toBe('0');
  });

  test('divide', () => {
    const operation = {
      total: '1',
      next: '1',
      operation: '÷',
    };
    const a = calculate(operation, operation.operation);
    expect(a.total).toBe('1');
  });

  test('percent', () => {
    const operation = {
      total: '1',
      next: '1',
      operation: '%',
    };
    const a = calculate(operation, operation.operation);
    expect(a.total).toBe('0');
  });
});
