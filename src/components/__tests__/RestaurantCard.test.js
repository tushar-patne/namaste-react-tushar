import MOCK_RESTAURANT from "../mocks/restCardMock.json"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"

it('should render restaurant cart', () => {
    render(<RestaurantCard resData={MOCK_RESTAURANT} />);
    const restaurantName = screen.getByText('Chinese Wok');
    expect(restaurantName).toBeInTheDocument();
})