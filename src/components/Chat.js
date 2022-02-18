import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMessageAction } from "../actions";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  const removeMessage = (message) => {
    dispatch(removeMessageAction(message.id));
  };

  return (
    <div className="chat">
      {messages.map((message) => (
        <div
          className="chat-item"
          key={message.id}
          onClick={() => removeMessage(message)}
        >
          <span className="chat-text">{message.text}</span>
          <span className="chat-time">{message.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Chat;
