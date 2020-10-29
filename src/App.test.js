import React from 'React';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/single/i);
  expect(linkElement).toBeInTheDocument();
});
