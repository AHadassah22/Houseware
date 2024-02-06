import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../../src/todo/components/Item'; // Adjust the import path

test('toggles completed state correctly', () => {
  const todo = { id: '1', title: 'Test Todo', completed: false };
  const mockDispatch = jest.fn();
  render(<Item todo={todo} dispatch={mockDispatch} />);
  const toggleCheckbox = screen.getByTestId('todo-item-toggle');
  fireEvent.click(toggleCheckbox);
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: '1' } });
});
