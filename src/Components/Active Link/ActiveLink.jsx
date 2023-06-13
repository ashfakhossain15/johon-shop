import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to , children}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "active text-cyan-400" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
