import React from "react";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_user">
        <span className="chat_user_info">
          <img src={require("../../assets/user1.png")} alt="user1" />
          <div className="chat_user_detail">
            <h4>David Heilo</h4>
            <span>Hello, How are you?</span> <span>. 12 min</span>
          </div>
        </span>
        <span className="chat_span">3</span>
      </div>
    </div>
  );
};

export default Chat;
