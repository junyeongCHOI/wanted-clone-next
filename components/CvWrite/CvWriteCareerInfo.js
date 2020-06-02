import React from "react";
import styled from "styled-components";
import { AddMore } from "./CvWriteBody";

const CvWriteCareerInfo = () => {
  return (
    <CvWriteCareerInfoWrap>
      <CWCDateSide>
        <DateTime>
          <DateTimeInput placeholder="YYYY" />
          .
          <DateTimeInput placeholder="MM" />
          -
          <DateTimeInput placeholder="YYYY" />
          .
          <DateTimeInput placeholder="MM" />
        </DateTime>
        <CheckBoxWrap>
          <DateCheckBox />
          현재 재직중
        </CheckBoxWrap>
      </CWCDateSide>
      <CWCInfoSide>
        <CWCTitle placeholder="회사명" />
        <CWCSubTitle placeholder="부서명/직책" />
        <AddMoreInfo>+ 주요 성과 추가</AddMoreInfo>
      </CWCInfoSide>
    </CvWriteCareerInfoWrap>
  );
};

export default CvWriteCareerInfo;

const CvWriteCareerInfoWrap = styled.div`
  display: flex;
  padding: 30px;
`;

const CWCDateSide = styled.div`
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
  width: 12px;
  height: 12px;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  margin-right: 5px;
`;

const CWCInfoSide = styled.div`
  width: 75%;
`;

const CWCInput = styled.input`
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

const CWCTitle = styled(CWCInput)`
  font-size: 20px;
  font-weight: 600;
`;

const CWCSubTitle = styled(CWCInput)`
  font-size: 16px;
  font-weight: 600;
`;

const AddMoreInfo = styled.div`
  width: 100%;
  padding: 30px 0;
  font-size: 18px;
  color: #176fd8;
  cursor: pointer;
`;
