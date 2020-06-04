export const navSmall = "767px";
export const footerMedium = "1024px";
export const footerSmall = "767px";
export const homeIntroSmall = "991px";
export const matchupSmall = "767px";
export const resumeSmall = "767px";
export const seekSmall = "995px";
export const wdDetailSmall = "995px";

//API
export const MYIP = "http://localhost:3000";
// http://192.168.219.101:3000

const TOMAPI = "http://192.168.219.106:8000";
export const CvWriteBodyAPI = `${TOMAPI}/user/resume`;
export const createCvM = `${TOMAPI}/user/resumeDetail`;
export const postCvM = `${TOMAPI}/user/resumeDetailWrite`;
export const creatCvResult = `${TOMAPI}/user/resumeResult`;

const SYAPI = "http://192.168.219.102:8000";
export const WdDetailAPI = `${SYAPI}/company/position`;

const PIEAPI = "http://192.168.219.104:8000";
export const ISREGI = `${PIEAPI}/user/exists`;
export const REGISTER = `${PIEAPI}/user/register`;
export const LOGIN = `${PIEAPI}/user/login`;
