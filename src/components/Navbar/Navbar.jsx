import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_search">
        <span>
          <BsSearch />
        </span>
        <input type="text" placeholder="Type to search" />
      </div>
      <div className="navbar_user">
        <div className="nav_user_notification">
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="nav_user_login"></div>
      </div>
    </div>
  );
};

export default Navbar;
