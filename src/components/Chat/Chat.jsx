import React from "react";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_user">
        <span className="chat_user_info">
          <div className="first_user">
            <img src={require("../../assets/user1.png")} alt="user1" />
            <span class="online_status"></span>
          </div>
          <div className="chat_user_detail">
            <h3>David Heilo</h3>
            <div>
              <h4>Hello, How are you?</h4> <h6>. 12 min</h6>
            </div>
          </div>
        </span>
        <span className="chat_span">3</span>
      </div>
      <div className="chat_user">
        <span className="chat_user_info ">
          <div className="first_user">
            <img src={require("../../assets/user2.png")} alt="user2" />
            <span class="online_status"></span>
          </div>
          <div className="chat_user_detail read_opacity">
            <h3>Henry Fisher</h3>
            <div>
              <h4>I'm Waiting for You</h4> <h6>. 5:54 PM</h6>
            </div>
          </div>
        </span>
      </div>
      <div className="chat_user">
        <span className="chat_user_info ">
          <div className="first_user">
            <img src={require("../../assets/user3.png")} alt="user3" />
            <span class="away_status"></span>
          </div>
          <div className="chat_user_detail read_opacity">
            <h3>Wilium Smith</h3>
            <div>
              <h4>Where are you now?</h4> <h6>. 10:12 PM</h6>
            </div>
          </div>
        </span>
      </div>
      <div className="chat_user">
        <span className="chat_user_info">
          <div className="first_user">
            <img src={require("../../assets/user4.png")} alt="user4" />
            <span class="online_status"></span>
          </div>
          <div className="chat_user_detail">
            <h3>Henry Deco</h3>
            <div>
              <h4>Thank you so much!</h4> <h6>. sun</h6>
            </div>
          </div>
        </span>
        <span className="chat_span">2</span>
      </div>
      <div className="chat_user">
        <span className="chat_user_info ">
          <div className="first_user">
            <img src={require("../../assets/user5.png")} alt="user5" />
            <span class="offline_status"></span>
          </div>
          <div className="chat_user_detail read_opacity">
            <h3>Jubin Jack</h3>
            <div>
              <h4>I really love that!</h4> <h6>. Oct 23</h6>
            </div>
          </div>
        </span>
      </div>
      <div className="chat_user">
        <span className="chat_user_info ">
          <div className="first_user">
            <img src={require("../../assets/user3.png")} alt="user3" />
            <span class="away_status"></span>
          </div>
          <div className="chat_user_detail read_opacity">
            <h3>Wilium Smith</h3>
            <div>
              <h4>Where are you now?</h4> <h6>. Sep 20</h6>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Chat;
