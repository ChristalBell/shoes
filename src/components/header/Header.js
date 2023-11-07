import React from "react";
import "./Hamburger.scss";
import "./headerStyles.scss";
import CartModal from "./CartModal";
import counterReducer, { addToCart } from "../../app/counterReducer";
import { useSelector } from "react-redux";

const Header = () => {
  const { count } = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div className="header">
      {/* // Hamburger Menu Hide for Desktop */}
      <div className="mobile-menu">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label className="mobile-btn" htmlFor="checkbox">
          <span></span>
        </label>

        <ul className="header-hamburger">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <a href="/" alt="Sneakers">
        <img src="/images/logo.svg" alt="Sneakers" />
      </a>

      {/* hide for mobile */}
      <div className="desktop-menu">
        <a href="/" alt="Collections">
          Collections
        </a>
        <a href="/" alt="Men">
          Men
        </a>
        <a href="/" alt="Women">
          Women
        </a>
        <a href="/" alt="About">
          About
        </a>
        <a href="/" alt="Contact">
          Contact
        </a>
      </div>

      <div className="right">
        <div className="cart-dropdown">
          <div className="cart-notification">{count}</div>
          <button id="cart-icon">
            <img src="/images/icon-cart.svg" alt="shopping cart" />
          </button>
          <div className="dropdown-content">
            <a href="/" alt="shopping cart">
              <CartModal />
            </a>
          </div>
        </div>

        <a href="/" alt="profile">
          <img
            className="profile"
            src="/images/image-avatar.png"
            alt="profile"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
