import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";

it("should render the component correctly", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", {
    name: "Login",
  });
  expect(loginBtn).toBeInTheDocument();
});

it("should render the component with Cart link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartLink = screen.getByText(/Cart/);
  expect(cartLink).toBeInTheDocument();
});

// it("should log in when clicked on Login button", async () => {
//   const user = userEvent.setup();
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <UserContext.Provider value={{ loggedInUser: user, setUser }}>
//           <Header />
//         </UserContext.Provider>
//       </Provider>
//     </BrowserRouter>
//   );
//   const loginBtn = screen.getByRole("button", {
//     name: "Login",
//   });
//   // const logoutBtn = await screen.findByRole('button', {
//   //   name: 'Logout'
//   // })
//   let loggedInUser = screen.getByTestId("loggedInUser");
//   expect(loggedInUser).toHaveTextContent("Guest User");
//   expect(loginBtn).toBeInTheDocument();
//   await user.click(loginBtn);
//   // expect(logoutBtn).toBeInTheDocument();
//   loggedInUser = screen.getByTestId("loggedInUser");
//   expect(loggedInUser).toHaveTextContent("Tushar Patne");
// });
