import * as types from "../actions/actionTypes";

const initialState = [];

const typedCvCareer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDNEWCAREER:
      return [
        ...state,
        {
          in_office: 0,
          from_date: ["", ""],
          to_date: ["", ""],
          title: "",
          sub_title: "",
          ma: [],
        },
      ];
    default:
      return state;
  }
};

export default typedCvCareer;
