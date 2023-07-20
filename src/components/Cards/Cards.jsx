import React from "react";
import "./Cards.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards_card">
        <span className="card_icon">
          <AiOutlineEye />
        </span>
        <div className="card_info">
          <span>
            <h1>$3.456K</h1>
            <h5>Total Views</h5>
          </span>
          <span className="card_info_2">
            0.43% <AiOutlineArrowUp />
          </span>
        </div>
      </div>
      <div className="cards_card">
        <span className="card_icon">
          <RiShoppingCartLine />
        </span>
        <div className="card_info">
          <span>
            <h1>$3.456K</h1>
            <h5>Total Views</h5>
          </span>
          <span className="card_info_2">
            0.43% <AiOutlineArrowUp />
          </span>
        </div>
      </div>
      <div className="cards_card">
        <span className="card_icon">
          <BiShoppingBag />
        </span>
        <div className="card_info">
          <span>
            <h1>$3.456K</h1>
            <h5>Total Views</h5>
          </span>
          <span className="card_info_2">
            0.43% <AiOutlineArrowUp />
          </span>
        </div>
      </div>
      <div className="cards_card">
        <span className="card_icon">
          <IoPeopleOutline />
        </span>
        <div className="card_info">
          <span>
            <h1>$3.456K</h1>
            <h5>Total Views</h5>
          </span>
          <span className="card_info_2D">
            0.43% <AiOutlineArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
