import React from 'react';
import renderer from 'react-test-renderer';
import { isNumber, calculate } from './calculate';
import operate from './operate';

it('renders correctly', () => {
  const tree = renderer
    .create(<h1>Facebook</h1>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Recognizes numeric', () => {
  expect(isNumber('1')).toBe(true);
});

test('Snap together two number', () => {
  const operation = {
    total: '0',
    next: '1',
    operation: '+',
  };
  const a = calculate(operation, '1');
  expect(a.next).toBe('11');
});

test('calculate', () => {
  const operation = {
    total: '1',
    next: '1',
    operation: '+',
  };
  const a = calculate(operation, '=');
  expect(a.total).toBe('2');
});

test('sum', () => {
  expect(operate(1, 1, '+')).toBe('2');
});

test('multiply', () => {
  expect(operate(1, 1, 'x')).toBe('1');
});
