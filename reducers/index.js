import { combineReducers } from "redux";
import isLoginModalOn from "./isLoginModalOn";
import isRegisterModalOn from "./isRegisterModalOn";

const reducers = combineReducers({ isLoginModalOn, isRegisterModalOn });

export default reducers;
