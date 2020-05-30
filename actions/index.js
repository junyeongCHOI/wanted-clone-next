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
