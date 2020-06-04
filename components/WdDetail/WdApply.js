import React from "react";
import styled from "styled-components";

const WdApply = ({ applyBtn, hRef }) => {
  return (
    <WdApplyWrap ref={hRef}>
      <WDApplyTitle>
        <h2>지원하기</h2>
        <BackBtn onClick={applyBtn}>뒤로</BackBtn>
      </WDApplyTitle>
    </WdApplyWrap>
  );
};

export default WdApply;

const WdApplyWrap = styled.div`
  border-radius: 3px 3px 0 0;
  border: 1px solid #e1e2e3;
`;

const WDApplyTitle = styled.div`
  position: relative;
  background: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e2e3;
  position: relative;
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    line-height: 22px;
  }
`;

const BackBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
`;
