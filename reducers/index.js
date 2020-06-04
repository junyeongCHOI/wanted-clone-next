import { combineReducers } from "redux";
import isLoginModalOn from "./isLoginModalOn";
import isRegisterModalOn from "./isRegisterModalOn";
import typedCv from "./typedCv";
import typedCvCareer from "./typedCvCareer";
import loginEmail from "./loginEmail";
import isPasswordModalOn from "./isPasswordModalOn";
import typedCvAward from "./typedCvAward";

const reducers = combineReducers({
  isLoginModalOn,
  isPasswordModalOn,
  isRegisterModalOn,
  typedCv,
  typedCvCareer,
  loginEmail,
  typedCvAward,
});

export default reducers;
