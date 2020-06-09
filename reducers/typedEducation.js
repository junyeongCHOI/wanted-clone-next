import {
  ADDNEWEDUCATION,
  LOADEDUCATION,
  TYPINGESTARTYDATE,
  TYPINGESTARTMDATE,
  TYPINGEENDYDATE,
  TYPINGEENDMDATE,
  TYPINGESCHOOLNAME,
  TYPINGEMAJOR,
  TYPINGECONTETN,
  PUSHISWORKINGBTNE,
} from "../actions/actionTypes";

const initailProps = [];

const typedEducation = (state = initailProps, action) => {
  const ary = [...state];

  switch (action.type) {
    case ADDNEWEDUCATION:
      return [
        ...state,
        {
          id: action.id,
          is_working: false,
          start: ["", ""],
          end: ["", ""],
          school: "",
          specialism: "",
          subject: "",
        },
      ];

    case LOADEDUCATION:
      return action.payload;

    case PUSHISWORKINGBTNE:
      ary[action.idx] = {
        ...ary[action.idx],
        is_working: !ary[action.idx].is_working,
      };
      return ary;

    case TYPINGESTARTYDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        start: [action.payload, ary[action.idx].start[1]],
      };
      return ary;

    case TYPINGESTARTMDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        start: [ary[action.idx].start[0], action.payload],
      };
      return ary;

    case TYPINGEENDYDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        end: [action.payload, ary[action.idx].end[1]],
      };
      return ary;

    case TYPINGEENDMDATE:
      ary[action.idx] = {
        ...ary[action.idx],
        end: [ary[action.idx].end[0], action.payload],
      };
      return ary;

    case TYPINGESCHOOLNAME:
      ary[action.idx] = {
        ...ary[action.idx],
        school: action.payload,
      };
      return ary;

    case TYPINGEMAJOR:
      ary[action.idx] = {
        ...ary[action.idx],
        specialism: action.payload,
      };
      return ary;

    case TYPINGECONTETN:
      ary[action.idx] = {
        ...ary[action.idx],
        subject: action.payload,
      };
      return ary;

    default:
      return state;
  }
};

export default typedEducation;
