import { combineReducers } from "redux";
import isLoginModalOn from "./isLoginModalOn";
import isRegisterModalOn from "./isRegisterModalOn";
import typedCv from "./typedCv";

const reducers = combineReducers({
  isLoginModalOn,
  isRegisterModalOn,
  typedCv,
});

export default reducers;
