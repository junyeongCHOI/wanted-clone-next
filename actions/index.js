import * as types from "./actionTypes";

export const loginModalOn = () => {
  return {
    type: types.LOGINMODALON,
  };
};

export const loginModalOff = () => {
  return {
    type: types.LOGINMODALOFF,
  };
};

export const passwordModalOn = () => {
  return {
    type: types.PASSWORDMODALON,
  };
};

export const passwordModalOff = () => {
  return {
    type: types.PASSWORDMODALOFF,
  };
};

export const registerModalOn = () => {
  return {
    type: types.REGISTERMODALON,
  };
};

export const registerModalOff = () => {
  return {
    type: types.REGISTERMODALOFF,
  };
};

export const typingCvTitle = (val) => {
  return {
    type: types.TYPINGCVTITLE,
    payload: val,
  };
};

export const typingCvName = (val) => {
  return {
    type: types.TYPINGCVNAME,
    payload: val,
  };
};

export const typingCvEmail = (val) => {
  return {
    type: types.TYPINGCVEMAIL,
    payload: val,
  };
};

export const typingCvPhone = (val) => {
  return {
    type: types.TYPINGCVPHONE,
    payload: val,
  };
};

export const typingCvAbout = (val) => {
  return {
    type: types.TYPINGCVABOUT,
    payload: val,
  };
};

export const addNewCareer = (rId, id) => {
  return {
    type: types.ADDNEWCAREER,
    payload: {
      rId,
      id,
    },
  };
};

export const typingCStartYdate = (val, idx) => {
  return {
    type: types.TYPINGCSTARTYDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
  };
};

export const typingCStartMdate = (val, idx) => {
  return {
    type: types.TYPINGCSTARTMDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
  };
};

export const typingCEndYdate = (val, idx) => {
  return {
    type: types.TYPINGENDYDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
  };
};

export const typingCEndMdate = (val, idx) => {
  return {
    type: types.TYPINGCENDMDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
  };
};

export const typingCWCompnay = (val, idx) => {
  return {
    type: types.TYPINGCWCOMPANY,
    payload: val,
    idx,
  };
};

export const typingCWPosition = (val, idx) => {
  return {
    type: types.TYPINGCWPOSITION,
    payload: val,
    idx,
  };
};

export const addNewProject = (id, idx, career_id) => {
  return {
    type: types.ADDNEWPROJECT,
    payload: {
      id,
      career_id,
    },
    idx,
  };
};

export const typingCRStartYDate = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRSTARTYDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
    UIdx,
  };
};

export const typingCRStartMDate = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRSTARTMDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
    UIdx,
  };
};

export const typingCREndYDate = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRENDYDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
    UIdx,
  };
};

export const typingCREndMDate = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRENDMDATE,
    payload: val.replace(/[^0-9]/g, ""),
    idx,
    UIdx,
  };
};

export const typingCRCompany = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRCOMPANY,
    payload: val,
    idx,
    UIdx,
  };
};

export const typingCRProject = (val, idx, UIdx) => {
  return {
    type: types.TYPINGCRPROJECT,
    payload: val,
    idx,
    UIdx,
  };
};

export const reduceLoginEmail = (val) => {
  return {
    type: types.REDUCELOGINEMAIL,
    payload: val,
  };
};
