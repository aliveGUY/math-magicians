import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Calculator from '../components/Calculator';

describe('Test of page interractivity', () => {
  test('Homepage are loaded', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Welcome to our page!/i);
  });

  test('User calculates 2 + 2\n\tand output displays inputs properly', () => {
    render(<Calculator />);
    const button = screen.getByText('2');
    const operation = screen.getByText('+');
    const result = screen.getByText('=');
    const output = document.getElementById('input');
    output.value = 0;
    fireEvent.click(button);
    expect(output.value).toBe('2');
    fireEvent.click(operation);
    fireEvent.click(button);
    fireEvent.click(result);

    expect(output.value).toBe('4');
  });

  test('Links are loaded', () => {
    render(<App />);
    const link = document.querySelector('[href="/"]');
    expect(link.innerHTML).toMatch(/Home/i);
  });

  test('You can open quotes', () => {
    render(<App />);
    const link = document.querySelector('[href="/quote"]');
    fireEvent.click(link);
    expect(document.body.textContent).toMatch(/Math MagiciansHomeCalculatorQuoteMathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -Willia paul Thurston/i);
  });
});
