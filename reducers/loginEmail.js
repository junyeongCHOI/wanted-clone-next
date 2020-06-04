import { REDUCELOGINEMAIL } from "../actions/actionTypes";

const initialState = "";

const loginEmail = (state = initialState, action) => {
  switch (action.type) {
    case REDUCELOGINEMAIL:
      return action.payload;
    default:
      return state;
  }
};

export default loginEmail;
