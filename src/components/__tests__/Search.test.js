import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Body from '../Body'
import MOCK_RESTARAURANTS_LIST from '../mocks/restListMock.json'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RESTARAURANTS_LIST);
        }
    })
})

it('should render body component correctly', async () => {
    await act( () => render(<BrowserRouter><Body /></BrowserRouter>) )
    const searchBtn = screen.getByRole('button', {name: 'Search'});
    expect(searchBtn).toBeInTheDocument();
})

it('should search the restaurants with text pizza', async () => {
    const user = userEvent.setup();
    await act( () => render(<BrowserRouter><Body /></BrowserRouter>) )
    const searchInput = screen.getByPlaceholderText("Search...");
    await user.type(searchInput, 'pizza');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('pizza');
    const restaurantCards = screen.getAllByTestId('rest-card');
    expect(restaurantCards.length).toBe(2);
})