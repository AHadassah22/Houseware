import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../src/todo/components/Input'; // Adjust the import path

test('calls onSubmit function when Enter key is pressed', () => {
  const mockSubmit = jest.fn();
  render(<Input onSubmit={mockSubmit} />);
  const inputElement = screen.getByTestId('text-input');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
  expect(mockSubmit).toHaveBeenCalledWith('New Todo');
});
