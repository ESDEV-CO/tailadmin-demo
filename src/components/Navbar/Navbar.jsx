import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="mobile_logo">
        <button className="navbar_menu">
          <GiHamburgerMenu />
        </button>
        <div className="navbar_logo">
          <img src={require("../../assets/logo-icon.png")} alt="logo" />
        </div>
      </div>
      <div className="navbar_search">
        <span>
          <BsSearch />
        </span>
        <input type="text" placeholder="Type to search" />
      </div>
      <div className="navbar_user">
        <div className="nav_user_notification">
          <span>
            <Toggle />
          </span>
          <button className="nav_user_notification_btn">
            <IoMdNotificationsOutline />
          </button>
          <button className="nav_user_notification_btn">
            <AiOutlineMessage />
          </button>
        </div>
        <button className="nav_user_login">
          <div className="nav_user_info">
            <span>Shahab Yaseen</span>
            <h6>UX Designer</h6>
          </div>
          <img src={require("../../assets/shahab.png")} alt="user pic" />
          <span>
            <AiOutlineDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
