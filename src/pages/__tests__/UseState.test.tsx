import React from 'react';
import { render } from '@testing-library/react';
import UseState from '../UseState';
import userEvent from '@testing-library/user-event';

test('UseState page', () => {
  const { getByText } = render(<UseState />);

  expect(getByText(/Count: 0/i)).toBeInTheDocument();

  const addButton = getByText('Add 1');
  const subtractButton = getByText('Subtract 1');
  const clearButton = getByText('Reset Count');

  userEvent.click(addButton);
  userEvent.click(addButton);

  expect(getByText(/Count: 2/i)).toBeInTheDocument();

  userEvent.click(subtractButton);
  userEvent.click(subtractButton);
  userEvent.click(subtractButton);
  userEvent.click(subtractButton);
  userEvent.click(subtractButton);

  expect(getByText(/Count: -3/i)).toBeInTheDocument();

  userEvent.click(clearButton);

  expect(getByText(/Count: 0/i)).toBeInTheDocument();
});
