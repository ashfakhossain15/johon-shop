import React from "react";
import "../Header/Header.css";
import ActiveLink from "../Active Link/ActiveLink";
const Header = () => {
  return (
    <nav className="header sticky top-0 z-[20]">
      <div className="web-name">
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div className=" space-x-6 pr-8 flex">
        <ActiveLink to="/">Shop</ActiveLink>
        <ActiveLink to="/order">Order</ActiveLink>
        <ActiveLink to="/inventory">Inventory</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/register">Register</ActiveLink>
      </div>
    </nav>
  );
};

export default Header;
