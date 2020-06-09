import * as types from "../actions/actionTypes";

const initialState = false;

const isCompanyRegisterOn = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPANYREGISTERMODALON:
      return true;
    case types.COMPANYREGISTERMODALOFF:
      return false;
    default:
      return state;
  }
};

export default isCompanyRegisterOn;
