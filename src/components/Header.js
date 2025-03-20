import { useState, useEffect, use } from "react";
import Logo from "../assets/img/food-villa-img.png";
import { Link } from "react-router-dom";

// SPA - Single Page Applications.
// Routing has 2 Types:
// Client Side Routing - we dont need load anything, like no need of network call. Because we already have a component.
// Server Side Routing
const Title = (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      {Title}
      <div className="nav-items">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
