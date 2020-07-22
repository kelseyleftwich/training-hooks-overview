import React from 'react';
import { render } from '@testing-library/react';
import UseCallback from '../UseCallback';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useArtWithCallback.ts');

test('UseCallback page', async () => {
  const { getByText, findByText, getAllByRole } = render(<UseCallback />);
  // this will be in the DOM before the API returns
  expect(getByText(/No info or records/i)).toBeInTheDocument();

  // wait for API to return with page number
  const pageNumber = await findByText('Page: 1');
  expect(pageNumber).toBeInTheDocument();

  const articles = getAllByRole('article');
  expect(articles.length).toBe(3);

  const nextButton = getByText(/Next Page/i);

  userEvent.click(nextButton);

  const newPageNumber = await findByText('Page: 2');

  expect(newPageNumber).toBeInTheDocument();
});
