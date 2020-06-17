import { BUYPLANON, BUYPLANOFF } from "../actions/actionTypes";

const initialState = false;

const isBuyPlanOn = (state = initialState, action) => {
  switch (action.type) {
    case BUYPLANON:
      return true;
    case BUYPLANOFF:
      return false;
    default:
      return state;
  }
};

export default isBuyPlanOn;
