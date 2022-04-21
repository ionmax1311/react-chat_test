import { ADD_MESSAGE, REMOVE_MESSAGE, EDIT_MESSAGE } from "./constants";

export const addMessageAction = (payload) => ({ type: ADD_MESSAGE, payload });
export const removeMessageAction = (payload) => ({
	type: REMOVE_MESSAGE,
	payload,
});
export const editMessageAction = (payload) => ({
	type: EDIT_MESSAGE,
	payload,
});
