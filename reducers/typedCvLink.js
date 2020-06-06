import { ADDNEWLINK, TYPINGLINK, LOADLINK } from "../actions/actionTypes";

const initialState = [];

const typedCvLink = (state = initialState, action) => {
  const ary = [...state];

  switch (action.type) {
    case ADDNEWLINK:
      return [
        ...state,
        {
          id: action.payload.id,
          resume_id: action.payload.rId,
          url: "",
        },
      ];
    case TYPINGLINK:
      ary[action.idx] = {
        ...ary[action.idx],
        url: action.payload,
      };
      return ary;
    case LOADLINK:
      return [...action.payload];
    default:
      return state;
  }
};

export default typedCvLink;
