import * as types from "./actionTypes";

export const loginModalOn = () => {
  return {
    type: types.LOGINMODALON,
  };
};

export const loginModalOff = () => {
  return {
    type: types.LOGINMODALOFF,
  };
};

export const registerModalOn = () => {
  return {
    type: types.REGISTERMODALON,
  };
};

export const registerModalOff = () => {
  return {
    type: types.REGISTERMODALOFF,
  };
};

export const typingCvTitle = (e) => {
  return {
    type: types.TYPINGCVTITLE,
    payload: e.target.value,
  };
};

export const typingCvName = (e) => {
  return {
    type: types.TYPINGCVNAME,
    payload: e.target.value,
  };
};

export const typingCvEmail = (e) => {
  return {
    type: types.TYPINGCVEMAIL,
    payload: e.target.value,
  };
};

export const typingCvPhone = (e) => {
  return {
    type: types.TYPINGCVPHONE,
    payload: e.target.value,
  };
};

export const typingCvAbout = (e) => {
  return {
    type: types.TYPINGCVABOUT,
    payload: e.target.value,
  };
};

export const addNewCareer = () => {
  return {
    type: types.ADDNEWCAREER,
  };
};
