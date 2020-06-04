import { PASSWORDMODALON, PASSWORDMODALOFF } from "../actions/actionTypes";

const initialState = false;

const isPasswordModalOn = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORDMODALON:
      return true;
    case PASSWORDMODALOFF:
      return false;
    default:
      return state;
  }
};

export default isPasswordModalOn;
