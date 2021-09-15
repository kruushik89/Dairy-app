import {createStore} from "redux";
import {todoReducer} from "./reducers/todo.reducer";

export const store = createStore(todoReducer);