import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";

export default combineReducers({ search: searchReducer, user: userReducer });
