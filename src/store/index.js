import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import { messageReducer } from "./reducer/messageReducer";

const rootReducer = combineReducers({
	messages: messageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
