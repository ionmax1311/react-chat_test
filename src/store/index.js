import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, composeWithDevTools());
