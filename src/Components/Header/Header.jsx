import React, { useContext } from "react";
import "../Header/Header.css";
import ActiveLink from "../Active Link/ActiveLink";
import { AuthContext } from "../../../Auth Providers/AuthProviders";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        toast.error("U cannot log out");
      });
  };
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

      {user ? (
        <div className=" flex space-x-6 items-center">
          <span>{user.email}</span>{" "}
          <button className="btn " onClick={handleLogOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            SignOut
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
