import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../utills/date";
import iconSend from "../icon-send.png";
import { addMessageAction } from "../actions";

const NewMessage = () => {
  const [messageInput, setMessagesInput] = useState("");
  const dispatch = useDispatch();

  const message = {
    id: Date.now(),
    text: messageInput,
    date: formatDate(),
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter" && messageInput.length) {
      dispatch(addMessageAction(message));
      setMessagesInput("");
    }
  };

  const sendMessage = () => {
    dispatch(addMessageAction(message));
    setMessagesInput("");
  };

  return (
    <div className="input-wrap">
      <input
        className="input-message"
        type="text"
        value={messageInput}
        onChange={(e) => setMessagesInput(e.target.value)}
        onKeyPress={keyPressHandler}
      />
      <span
        className={`input-btn ${messageInput.length ? "" : "disabled"}`}
        onClick={() => {
          sendMessage();
        }}
      >
        <img src={iconSend} alt="iconSend" />
      </span>
    </div>
  );
};

export default NewMessage;
