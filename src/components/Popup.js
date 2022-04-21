import React from "react";
import { useDispatch } from "react-redux";
import { editMessageAction } from "../actions";

const Popup = ({ active, setActive, editMessage, setEditMessage, editId }) => {
	const dispatch = useDispatch();

	const saveEditMessage = () => {
		const editMessages = {
			id: editId,
			text: editMessage,
		};
		console.log(editMessages);
		dispatch(editMessageAction(editMessages));
		setActive(false);
	};

	return (
		<div className={active ? "popup active" : "popup"}>
			<div className='popup-content' onClick={(e) => e.stopPropagation()}>
				<div className='popup-close' onClick={() => setActive(false)}>
					x
				</div>
				<input
					className='popup-input'
					value={editMessage}
					onChange={(e) => setEditMessage(e.target.value)}
				/>
				<div className='popup__btn-wrap'>
					<button
						className='btn__save'
						onClick={() => saveEditMessage()}>
						Save
					</button>
					<button
						className='btn__cancel'
						onClick={() => setActive(false)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
