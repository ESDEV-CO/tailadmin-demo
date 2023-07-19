import React from "react";
import "./Aside.css";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { HiOutlineTableCells } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";

const Aside = () => {
  return (
    <div className="asideBar">
      <div className="logo">
        <img src={require("../../assets/logo-icon.png")} alt="logo" />
        <h1>TailAdmin</h1>
      </div>
      <div className="aside_comp">
        <h4>Menu</h4>
        <div className="aside_comp_subs bg_active">
          <div>
            <button>
              <RxDashboard />
            </button>
            <h3>Dashboard</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <IoCalendarOutline />
            </button>
            <h3>Calendar</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <GoPerson />
            </button>
            <h3>Profile</h3>
          </div>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <BsListTask />
            </button>
            <h3>Task</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <FaWpforms />
            </button>
            <h3>Forms</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <HiOutlineTableCells />
            </button>
            <h3>Tables</h3>
          </div>
        </div>
        <div className="aside_comp_subs ">
          <div>
            <button>
              <RiPagesLine />
            </button>
            <h3>Pages</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
      </div>
      <div className="aside_comp">
        <h4>Support</h4>
        <div className="aside_comp_subs">
          <div>
            <button>
              <RxDashboard />
            </button>
            <h3>Dashboard</h3>
          </div>
          <button>
            <AiOutlineDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
