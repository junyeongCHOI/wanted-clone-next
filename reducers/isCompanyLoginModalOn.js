import * as types from "../actions/actionTypes";

const initialState = false;

const isCompanyLoginModalOn = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPANYLOGINMODALON:
      return true;
    case types.COMPANYLOGINMODALOFF:
      return false;
    default:
      return state;
  }
};

export default isCompanyLoginModalOn;
