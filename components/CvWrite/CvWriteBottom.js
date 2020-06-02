import React from "react";
import styled from "styled-components";

const CvWriteBottom = () => {
  return (
    <CvWriteBottomWrap>
      <CvWriteBottomContainer>
        <TempSubmitBtn>임시 저장</TempSubmitBtn>
        <CvSubmitBtn>작성 완료</CvSubmitBtn>
      </CvWriteBottomContainer>
    </CvWriteBottomWrap>
  );
};

export default CvWriteBottom;

const CvWriteBottomWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
`;

const CvWriteBottomContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 5px;
  margin: 0 auto;
`;

const TempSubmitBtn = styled.div`
  width: 184px;
  min-width: 94px;
  margin: 0 5px;
  background-color: #ffffff;
  border: 1px solid #258bf7;
  border-radius: 3px;
  color: #258bf7;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
`;

const CvSubmitBtn = styled(TempSubmitBtn)`
  border-color: #258bf7;
  background-color: #258bf7;
  color: #fff;
`;
