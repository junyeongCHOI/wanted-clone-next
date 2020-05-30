import * as types from "../actions/actionTypes";

const initialState = false;

const isRegisterModalOn = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTERMODALON:
      return true;
    case types.REGISTERMODALOFF:
      return false;
    default:
      return state;
  }
};

export default isRegisterModalOn;
