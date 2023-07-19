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
import { MdOutlineMail } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const Aside = () => {
  return (
    <div className="asideBar">
      <div className="aside_logo">
        <img src={require("../../assets/logo-icon.png")} alt="logo" />
        <h1>TailAdmin</h1>
      </div>
      <div className="aside_container">
        <div className="aside_comp">
          <h4>Menu</h4>
          <button className="aside_comp_subs bg_active">
            <div className="subs_heading">
              <span>
                <RxDashboard />
              </span>
              <h3>Dashboard</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <IoCalendarOutline />
              </span>
              <h3>Calendar</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <GoPerson />
              </span>
              <h3>Profile</h3>
            </div>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <BsListTask />
              </span>
              <h3>Task</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <FaWpforms />
              </span>
              <h3>Forms</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <HiOutlineTableCells />
              </span>
              <h3>Tables</h3>
            </div>
          </button>
          <button className="aside_comp_subs ">
            <div className="subs_heading">
              <span>
                <RiPagesLine />
              </span>
              <h3>Pages</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
        </div>
        <div className="aside_comp">
          <h4>Support</h4>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <MdOutlineMail />
              </span>
              <h3>Messages</h3>
            </div>
            <div className="subs_message">
              <span>5</span> <span>Pro</span>
            </div>
          </button>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <BiDownload />
              </span>
              <h3>Inbox</h3>
            </div>
            <div className="subs_message">
              <span>Pro</span>
            </div>
          </button>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <LiaFileInvoiceDollarSolid />
              </span>
              <h3>Invoice</h3>
            </div>
            <div className="subs_message">
              <span>Pro</span>
            </div>
          </button>
        </div>
        <div className="aside_comp">
          <h4>Others</h4>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <AiOutlinePieChart />
              </span>
              <h3>Charts</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <MdOutlineSpaceDashboard />
              </span>
              <h3>UI Elements</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
          <button className="aside_comp_subs">
            <div className="subs_heading">
              <span>
                <HiArrowRightOnRectangle />
              </span>
              <h3>UI Elements</h3>
            </div>
            <span>
              <AiOutlineDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
