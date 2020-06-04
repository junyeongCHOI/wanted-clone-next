import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  typingCRStartYDate,
  typingCRStartMDate,
  typingCREndYDate,
  typingCREndMDate,
  typingCRCompany,
  typingCRProject,
} from "../../actions";

const CvWriteCareerResult = ({
  startY,
  startM,
  endY,
  endM,
  title,
  content,
  typingCRStartYDate,
  typingCRStartMDate,
  typingCREndYDate,
  typingCREndMDate,
  typingCRCompany,
  typingCRProject,
  UIdx,
  idx,
}) => {
  return (
    <CvWriteCareerResultWrap>
      <CDot />
      <CWCRInputWrap>
        <CWCRCompanyInput
          placeholder="주요 성과"
          type="text"
          maxLength="80"
          value={title}
          onChange={(e) => typingCRCompany(e.target.value, idx, UIdx)}
        />
        <DateTime>
          <DateTimeInput
            placeholder="YYYY"
            type="text"
            maxLength="4"
            value={startY}
            onChange={(e) => typingCRStartYDate(e.target.value, idx, UIdx)}
          />
          .
          <DateTimeInput
            placeholder="MM"
            type="text"
            maxLength="2"
            value={startM}
            onChange={(e) => typingCRStartMDate(e.target.value, idx, UIdx)}
          />
          -
          <DateTimeInput
            placeholder="YYYY"
            type="text"
            maxLength="4"
            value={endY}
            onChange={(e) => typingCREndYDate(e.target.value, idx, UIdx)}
          />
          .
          <DateTimeInput
            placeholder="MM"
            type="text"
            maxLength="2"
            value={endM}
            onChange={(e) => typingCREndMDate(e.target.value, idx, UIdx)}
          />
        </DateTime>
        <CWCRProjectInput
          placeholder="상세 업무 내용과 성과를 기입해주세요"
          type="text"
          maxLength="80"
          value={content}
          onChange={(e) => typingCRProject(e.target.value, idx, UIdx)}
        />
      </CWCRInputWrap>
    </CvWriteCareerResultWrap>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { UIdx, idx } = ownProps;
  return {
    startY: state.typedCvCareer[UIdx].result[idx].start[0],
    startM: state.typedCvCareer[UIdx].result[idx].start[1],
    endY: state.typedCvCareer[UIdx].result[idx].end[0],
    endM: state.typedCvCareer[UIdx].result[idx].end[1],
    title: state.typedCvCareer[UIdx].result[idx].title,
    content: state.typedCvCareer[UIdx].result[idx].content,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    typingCRStartYDate: (val, idx, UIdx) =>
      dispatch(typingCRStartYDate(val, idx, UIdx)),
    typingCRStartMDate: (val, idx, UIdx) =>
      dispatch(typingCRStartMDate(val, idx, UIdx)),
    typingCREndYDate: (val, idx, UIdx) =>
      dispatch(typingCREndYDate(val, idx, UIdx)),
    typingCREndMDate: (val, idx, UIdx) =>
      dispatch(typingCREndMDate(val, idx, UIdx)),
    typingCRCompany: (val, idx, UIdx) =>
      dispatch(typingCRCompany(val, idx, UIdx)),
    typingCRProject: (val, idx, UIdx) =>
      dispatch(typingCRProject(val, idx, UIdx)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CvWriteCareerResult);

const CvWriteCareerResultWrap = styled.div`
  display: felx;
  padding: 20px;
  margin-left: -20px;
`;

const CDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 7px 10px 0 0;
  background-color: #333;
`;

const CWCRInput = styled.input`
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

const CWCRCompanyInput = styled(CWCRInput)`
  font-size: 16px;
`;

const CWCRProjectInput = styled(CWCRInput)`
  font-size: 14px;
  line-height: 1.6;
`;

const CWCRInputWrap = styled.div`
  width: 100%;
`;

const DateTime = styled.div`
  display: felx;
  color: #555;
  margin: 10px 0;
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
