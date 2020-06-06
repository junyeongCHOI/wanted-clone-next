import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  typingEStartYdate,
  typingEStartMdate,
  typingEEndYDate,
  typingEEndMdate,
  pushIsWorkingBtnE,
  typingEschoolName,
  typingEMajor,
  typingEContent,
} from "../../actions";

const CvWriteEducationInfo = ({
  data,
  idx,
  typingEStartYdate,
  typingEStartMdate,
  typingEEndYDate,
  typingEEndMdate,
  pushIsWorkingBtnE,
  typingEschoolName,
  typingEMajor,
  typingEContent,
}) => {
  return (
    <CvWriteEducationInfoWrap>
      <CWEDateSide>
        <DateTime>
          <DateTimeInput
            placeholder="YYYY"
            value={data.start[0]}
            type="text"
            maxLength="4"
            onChange={(e) => typingEStartYdate(e.target.value, idx)}
          />
          .
          <DateTimeInput
            placeholder="MM"
            value={data.start[1]}
            type="text"
            maxLength="2"
            onChange={(e) => typingEStartMdate(e.target.value, idx)}
          />
          <DateDisplayWrap style={{ display: data.is_working && "none" }}>
            -
            <DateTimeInput
              placeholder="YYYY"
              value={data.end[0]}
              type="text"
              maxLength="4"
              onChange={(e) => typingEEndYDate(e.target.value, idx)}
            />
            .
            <DateTimeInput
              placeholder="MM"
              value={data.end[1]}
              type="text"
              maxLength="2"
              onChange={(e) => typingEEndMdate(e.target.value, idx)}
            />
          </DateDisplayWrap>
        </DateTime>
        <CheckBoxWrap onClick={pushIsWorkingBtnE}>
          <DateCheckBox>
            <i
              className={
                data.is_working ? "xi-check-square" : "xi-checkbox-blank"
              }
              style={{
                color: data.is_working ? "#176fd8" : "rgba(0, 0, 0, 0.4)",
              }}
            />
          </DateCheckBox>
          현재 재학중
        </CheckBoxWrap>
      </CWEDateSide>
      <CWEInfoSide>
        <DeleteCBtn>
          <i className="xi-close-min" />
        </DeleteCBtn>
        <CWETitle
          placeholder="학교명"
          value={data.school}
          type="text"
          maxLength="100"
          onChange={(e) => typingEschoolName(e.target.value)}
        />
        <CWESubtitle
          placeholder="전공 및 학위"
          value={data.specialism}
          type="text"
          maxLength="80"
          onChange={(e) => typingEMajor(e.target.value)}
        />
        <CWESubject
          placeholder="이수과목 또는 연구내용"
          value={data.subject}
          type="text"
          maxLength="80"
          onChange={(e) => typingEContent(e.target.value)}
        />
      </CWEInfoSide>
    </CvWriteEducationInfoWrap>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    typingEStartYdate: (val) => dispatch(typingEStartYdate(val, ownProps.idx)),
    typingEStartMdate: (val) => dispatch(typingEStartMdate(val, ownProps.idx)),
    typingEEndYDate: (val) => dispatch(typingEEndYDate(val, ownProps.idx)),
    typingEEndMdate: (val) => dispatch(typingEEndMdate(val, ownProps.idx)),
    pushIsWorkingBtnE: () => dispatch(pushIsWorkingBtnE(ownProps.idx)),
    typingEschoolName: (val) => dispatch(typingEschoolName(val, ownProps.idx)),
    typingEMajor: (val) => dispatch(typingEMajor(val, ownProps.idx)),
    typingEContent: (val) => dispatch(typingEContent(val, ownProps.idx)),
  };
};

export default connect(null, mapDispatchToProps)(CvWriteEducationInfo);

const CvWriteEducationInfoWrap = styled.div`
  display: flex;
  padding: 30px;
`;

const CWEDateSide = styled.div`
  width: 25%;
`;

const DateTime = styled.div`
  display: felx;
  color: #555;
`;

const DateTimeInput = styled.input`
  text-align: center;
  width: 36px;
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857143;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CheckBoxWrap = styled.div`
  display: felx;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const DateCheckBox = styled.div`
  margin-right: 5px;
  font-size: 12px;
`;

const DateDisplayWrap = styled.div`
  display: flex;
`;

const CWEInfoSide = styled.div`
  position: relative;
  width: 75%;
`;

const DeleteCBtn = styled.div`
  position: absolute;
  font-size: 24px;
  color: #d1d1d1;
  top: 10px;
  right: 10px;
  padding: 7px;
  cursor: pointer;
  &:hover {
    color: #176fd8;
  }
`;

const CWEInput = styled.input`
  margin-bottom: 3px;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto;
  color: #3b3d40;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CWETitle = styled(CWEInput)`
  font-size: 20px;
  font-weight: 600;
`;

const CWESubtitle = styled(CWEInput)`
  font-size: 16px;
  font-weight: 600;
`;

const CWESubject = styled(CWEInput)`
  font-size: 16px;
  font-weight: 600;
`;
