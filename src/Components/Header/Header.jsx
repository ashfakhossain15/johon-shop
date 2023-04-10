import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div className="web-name">
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div className="nav-anc">
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
