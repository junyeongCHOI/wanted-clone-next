import * as types from "../actions/actionTypes";

const initialState = [];

const typedCvCareer = (state = initialState, action) => {
  const ary = [...state];
  let resultAry;

  switch (action.type) {
    case types.ADDNEWCAREER:
      return [
        ...state,
        {
          id: action.payload.id,
          resume_id: action.payload.rId,
          is_working: false,
          start: ["", ""],
          end: ["", ""],
          company: "",
          position: "",
          result: [],
        },
      ];
    case types.TYPINGCSTARTYDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        start: [action.payload, ary[action.idx].start[1]],
      };
      return ary;

    case types.PUSHISWORKINGBTN:
      ary[action.idx] = {
        ...ary[action.idx],
        is_working: !ary[action.idx].is_working,
      };
      return ary;

    case types.TYPINGCSTARTMDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        start: [ary[action.idx].start[0], action.payload],
      };
      return ary;

    case types.TYPINGENDYDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        end: [action.payload, ary[action.idx].end[1]],
      };
      return ary;

    case types.TYPINGCENDMDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        end: [ary[action.idx].end[0], action.payload],
      };
      return ary;

    case types.TYPINGCWCOMPANY:
      ary[action.idx] = {
        ...ary[action.idx],
        company: action.payload,
      };
      return ary;

    case types.TYPINGCWPOSITION:
      ary[action.idx] = {
        ...ary[action.idx],
        position: action.payload,
      };
      return ary;

    case types.ADDNEWPROJECT:
      resultAry = ary[action.idx].result;
      resultAry.push({
        id: action.payload.id,
        career_id: action.payload.career_id,
        title: "",
        content: "",
        start: ["", ""],
        end: ["", ""],
      });
      ary[action.idx] = {
        ...ary[action.idx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRSTARTYDATE:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].start[0] = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRSTARTMDATE:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].start[1] = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRENDYDATE:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].end[0] = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRENDMDATE:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].end[1] = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRCOMPANY:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].title = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.TYPINGCRPROJECT:
      resultAry = ary[action.UIdx].result;
      resultAry[action.idx].content = action.payload;
      ary[action.UIdx] = {
        ...ary[action.UIdx],
        result: resultAry,
      };
      return ary;
    case types.LOADCAREER:
      return [...action.payload];

    default:
      return state;
  }
};

export default typedCvCareer;
