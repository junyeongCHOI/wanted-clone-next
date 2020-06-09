import { combineReducers } from "redux";
import isLoginModalOn from "./isLoginModalOn";
import isRegisterModalOn from "./isRegisterModalOn";
import isCompanyLoginModalOn from "./isCompanyLoginModalOn";
import isCompanyRegisterOn from "./isCompanyRegisterOn";
import typedCv from "./typedCv";
import typedCvCareer from "./typedCvCareer";
import loginEmail from "./loginEmail";
import isPasswordModalOn from "./isPasswordModalOn";
import typedCvAward from "./typedCvAward";
import typedEducation from "./typedEducation";
import typedCvLink from "./typedCvLink";

const reducers = combineReducers({
  isLoginModalOn,
  isPasswordModalOn,
  isRegisterModalOn,
  isCompanyLoginModalOn,
  isCompanyRegisterOn,
  typedCv,
  typedCvCareer,
  loginEmail,
  typedCvAward,
  typedEducation,
  typedCvLink,
});

export default reducers;
