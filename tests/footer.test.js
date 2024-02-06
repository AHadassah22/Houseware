import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../src/todo/components/Footer'; // Adjust the import path

test('renders footer with correct item count', () => {
  const todos = [
    { id: '1', title: 'Todo 1', completed: false },
    { id: '2', title: 'Todo 2', completed: true },
    { id: '3', title: 'Todo 3', completed: false }
  ];
  render(<Footer todos={todos} />);
  const itemCountElement = screen.getByTestId('item-count');
  expect(itemCountElement).toBeInTheDocument();
  expect(itemCountElement).toHaveTextContent('2 items left!');
});

test('calls removeCompleted function when Clear Completed button is clicked', () => {
  const mockRemoveCompleted = jest.fn();
  render(<Footer removeCompleted={mockRemoveCompleted} />);
  const clearCompletedButton = screen.getByTestId('clear-completed');
  fireEvent.click(clearCompletedButton);
  expect(mockRemoveCompleted).toHaveBeenCalled();
});
