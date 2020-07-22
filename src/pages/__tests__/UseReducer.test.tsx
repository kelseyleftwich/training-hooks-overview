import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UseReducer from '../UseReducer';

test('UseReducer page', () => {
  const { getByLabelText, getByText, queryByText } = render(<UseReducer />);

  const addChairToCartButton = getByLabelText(/add Osmond Armchair to cart/i);
  const addTableToCartButton = getByLabelText(/add emile sidetable to cart/i);

  userEvent.click(addChairToCartButton);
  expect(getByText(/osmond armchair 1/i)).toBeInTheDocument();
  userEvent.click(addChairToCartButton);
  expect(getByText(/osmond armchair 2/i)).toBeInTheDocument();

  userEvent.click(addTableToCartButton);
  expect(getByText(/emile sidetable 1/i)).toBeInTheDocument();

  const clearCartButton = getByText(/clear cart/i);
  userEvent.click(clearCartButton);

  expect(clearCartButton).not.toBeInTheDocument();

  expect(queryByText(/emile sidetable 1/i)).toBeNull();
  expect(queryByText(/osmond armchair 2/i)).toBeNull();
});
