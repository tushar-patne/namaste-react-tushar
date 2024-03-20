import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {

  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);

    return (
      <div className="header flex items-center justify-between py-1 px-4 mb-4 shadow-md">
        <div className="logo-container">
          <img
            className="logo w-20"
            src={LOGO_URL}
          />
        </div>
        <ul className="nav-items flex gap-5 font-semibold hover:*:text-amber-500 active:**:*:text-amber-500">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About us</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact us</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart ({cartItems.length})</Link>
          </li>
          <li>
            {isOnline ? '🟢' : '🔴'}
          </li>
          <li>
            {loggedInUser}
          </li>
        </ul>
      </div>
    );
  };

export default Header;