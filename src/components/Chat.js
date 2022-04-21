import React, { useState } from "react";
import iconDelete from "../icon-delete.png";
import iconEdit from "../icon-edit.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMessageAction, editMessageAction } from "../actions";
import Popup from "./Popup";

const Chat = () => {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages.messages);
	const [editMessage, setEditMessage] = useState();
	const [editId, setEditId] = useState();
	const [showPopup, setShowPopup] = useState(false);

	const removeMessage = (message) => {
		dispatch(removeMessageAction(message.id));
	};

	const editMessageHandler = (message) => {
		setShowPopup(true);
		console.log("message.id--", message.id);
		console.log("message.text--", message.text);
		console.log("message--", message);
		setEditMessage(message.text);
		setEditId(message.id);
	};

	return (
		<div className='chat'>
			<Popup
				active={showPopup}
				setActive={setShowPopup}
				editMessage={editMessage}
				editId={editId}
				setEditMessage={setEditMessage}
			/>
			{messages.map((message) => (
				<div className='chat-item' key={message.id}>
					<div className='chat-text__wrap'>
						<span className='chat-text'>{message.text}</span>
						<div className='chat__icon-wrap'>
							<img
								src={iconEdit}
								alt='iconEdit'
								onClick={() => editMessageHandler(message)}
							/>
							<img
								src={iconDelete}
								alt='iconDelete'
								onClick={() => removeMessage(message)}
							/>
						</div>
					</div>

					<span className='chat-time'>{message.date}</span>
				</div>
			))}
		</div>
	);
};

export default Chat;
