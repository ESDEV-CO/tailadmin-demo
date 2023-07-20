import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

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
          <div className="user_info">
            <span>Shahab Yaseen</span>
            <span>UX Designer</span>
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
