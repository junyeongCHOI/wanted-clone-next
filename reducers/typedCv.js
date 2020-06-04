import * as types from "../actions/actionTypes";

const initialState = {
  title: "",
  name: "",
  email: "",
  phone: "",
  about: "",
  image: "",
};

const typedCv = (state = initialState, action) => {
  switch (action.type) {
    case types.TYPINGCVTITLE:
      return {
        ...state,
        title: action.payload,
      };
    case types.TYPINGCVNAME:
      return {
        ...state,
        name: action.payload,
      };
    case types.TYPINGCVEMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case types.TYPINGCVPHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case types.TYPINGCVABOUT:
      return {
        ...state,
        about: action.payload,
      };
    default:
      return state;
  }
};

export default typedCv;
