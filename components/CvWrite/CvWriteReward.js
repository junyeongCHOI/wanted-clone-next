import React from "react";
import styled from "styled-components";
import CvWriteRewardInfo from "./CvWriteRewardInfo";
import { AddMore } from "./CvWriteBody";

const CvWriteReward = () => {
  return (
    <CvWriteRewardWrap>
      <AddMore> + 추가</AddMore>
      <CvWriteRewardInfo />
    </CvWriteRewardWrap>
  );
};

export default CvWriteReward;

const CvWriteRewardWrap = styled.div`
  margin-bottom: 20px;
`;
