import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_KFG_MENU from "../mocks/kfcMenuMock.json";
import user from "@testing-library/user-event";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_KFG_MENU),
  });
});

it("should render KFC menu correctly with recommended accordion open", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  expect(screen.getByRole('heading', {name: 'KFC', level: 2})).toBeInTheDocument();
});

it("should close the RECOMMENDED accordion when clicked on it", async () => {
  user.setup();
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const recommendedElement = screen.getByText(/Recommended/);
  let addBtns = screen.getAllByRole("button", { name: "Add +" });
  expect(recommendedElement).toBeInTheDocument();
  expect(addBtns.length).toBeGreaterThan(0);
  await user.click(recommendedElement);
  addBtns = screen.queryAllByRole("button", { name: "Add +" });
  expect(addBtns.length).toBe(0);
});

it("should update the number of items in the header Cart when user clicks on Add btn", async () => {
    user.setup();
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  expect(screen.getByText('Cart (0)')).toBeInTheDocument();
  const addBtns = screen.getAllByRole('button', {name: 'Add +'});
  await user.click(addBtns[0]);
  await user.click(addBtns[1]);
  expect(screen.getByText('Cart (2)')).toBeInTheDocument();
});
