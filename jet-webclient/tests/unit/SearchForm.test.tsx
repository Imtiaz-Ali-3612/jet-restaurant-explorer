// SearchComponent.test.tsx
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SearchForm from '../../src/components/RestaurantSearch/SearchForm/SearchForm';
import '@testing-library/jest-dom';

// Mock the fetch function
const mockFetch = jest.fn();
// mocking the fetch request
act(() => {
  mockFetch.mockResolvedValueOnce({
    json: () => Promise.resolve([]),
  });
});
// mocking the css import inside the component
jest.mock('../../src/components/SearchForm/SearchForm.css', () => ({}));
global.fetch = mockFetch;
describe('SearchForm', () => {
  test('testing search input form', async () => {
    const mockOnSearch = jest.fn();
    const { getByText, getByLabelText } = render(<SearchForm showSearch={mockOnSearch} />);
    const postcodeInput = getByLabelText('Search a restaurant');
    const submitButton = getByText('SHOW');
    await act(async () => {
      fireEvent.change(postcodeInput, { target: { value: 'E1 7HT' } });
      fireEvent.click(submitButton);
    });
    expect(mockOnSearch).toHaveBeenCalledWith('E1 7HT');
  });
});
