import { ADD_MESSAGE, REMOVE_MESSAGE } from "../../actions/constants";

const defaultState = {
  messages: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
