import {
	ADD_MESSAGE,
	REMOVE_MESSAGE,
	EDIT_MESSAGE,
} from "../../actions/constants";

const defaultState = {
	messages: [],
};

export const messageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return { ...state, messages: [...state.messages, action.payload] };
		case REMOVE_MESSAGE:
			return {
				...state,
				messages: state.messages.filter(
					(message) => message.id !== action.payload,
				),
			};
		case EDIT_MESSAGE:
			return {
				...state,
				messages: state.messages.map((message, i) =>
					message.id === action.payload.id
						? {
								...message,
								text: action.payload.text,
						  }
						: message,
				),
			};

		default:
			return state;
	}
};
