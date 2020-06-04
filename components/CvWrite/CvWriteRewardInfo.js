import React from "react";
import styled from "styled-components";

const CvWriteRewardInfo = () => {
  return (
    <CvWriteRewardInfoWrap>
      <CWRDateSide>
        <DateTimeInput placeholder="YYYY" type="text" maxLength="4" />
        .
        <DateTimeInput placeholder="MM" type="text" maxLength="2" />
      </CWRDateSide>
      <CWCInfoSide>
        <CWRTitle placeholder="회사명" type="text" maxLength="100" />
        <CWRSubTitle placeholder="부서명/직책" type="text" maxLength="80" />
      </CWCInfoSide>
    </CvWriteRewardInfoWrap>
  );
};

export default CvWriteRewardInfo;

const CvWriteRewardInfoWrap = styled.div`
  display: flex;
  padding: 30px;
`;

const CWRDateSide = styled.div`
  width: 25%;
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

const CWCInfoSide = styled.div`
  width: 75%;
`;

const CWRInput = styled.input`
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

const CWRTitle = styled(CWRInput)`
  font-size: 20px;
  font-weight: 600;
`;

const CWRSubTitle = styled(CWRInput)`
  font-size: 16px;
  font-weight: 600;
`;
