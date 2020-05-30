import * as types from "../actions/actionTypes";

const initialState = false;

const isLoginModalOn = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGINMODALON:
      return true;
    case types.LOGINMODALOFF:
      return false;
    default:
      return state;
  }
};

export default isLoginModalOn;
