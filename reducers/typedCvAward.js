import {
  ADDNEWAWARD,
  TYPINGRYDATE,
  TYPINGRMDATE,
  LOADAWARD,
  TYPINGANAME,
  TYPINGACONTENT,
} from "../actions/actionTypes";

const initialState = [];

const typedCvAward = (state = initialState, action) => {
  const ary = [...state];

  switch (action.type) {
    case ADDNEWAWARD:
      return [
        ...state,
        {
          id: action.payload.id,
          resume_id: action.payload.rId,
          date: ["", ""],
          name: "",
          content: "",
        },
      ];
    case LOADAWARD:
      return [...action.payload];
    case TYPINGRYDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        date: [action.payload, ary[action.idx].date[1]],
      };
      return ary;
    case TYPINGRMDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        date: [ary[action.idx].date[0], action.payload],
      };
      return ary;
    case TYPINGANAME:
      ary[action.idx] = {
        ...ary[action.idx],
        name: action.payload,
      };
      return ary;
    case TYPINGACONTENT:
      ary[action.idx] = {
        ...ary[action.idx],
        content: action.payload,
      };
      return ary;
    default:
      return state;
  }
};
export default typedCvAward;
