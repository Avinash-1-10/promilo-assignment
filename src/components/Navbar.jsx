import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
        alt="Provision Store"
      />
      <div className="navlink-container">
        <NavLink to="/products" className="navlink" activeclassname="active">
          Products
        </NavLink>
        <NavLink to="/about" className="navlink" activeclassname="active">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
