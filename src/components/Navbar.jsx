import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/pro.png"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        src={logo}
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
