import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header sticky top-0">
      <div className="web-name">
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div className="nav-anc">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
