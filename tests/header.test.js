import { render, screen } from '@testing-library/react';
import Header from './src/todo/components/Header';

test('renders header with correct title', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('todos');
});
