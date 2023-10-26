import React from "react";
import "./Hamburger.scss";

const Header = () => {
  return (
    <div>
      <div className="mobile-menu">
        {/* // Hamburger Menu Hide for Desktop */}

        <input type="checkbox" id="checkbox" unchecked />
        <label className="mobile-btn" for="checkbox">
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

      <div>
        <a href="/" alt="shopping cart">
          <img src="/images/icon-cart.svg" alt="shopping cart" />
        </a>
        <a href="/" alt="profile">
          <img src="/images/image-avatar.png" alt="profile" />
        </a>
      </div>
    </div>
  );
};

export default Header;
