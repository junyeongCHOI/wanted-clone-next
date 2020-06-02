import React from "react";
import styled from "styled-components";
import Wdcard from "../WdList/WdCard";
import { wdDetailSmall } from "../../config";

const WdDetailRecommend = ({ list }) => {
  return (
    <>
      <Title>인사 추천 공고</Title>
      <WdDetailRecommendWrap>
        {list.map((item, idx) => (
          <Wdcard key={idx} item={item} />
        ))}
      </WdDetailRecommendWrap>
    </>
  );
};

export default WdDetailRecommend;

const WdDetailRecommendWrap = styled.div`
  display: felx;
  flex-wrap: wrap;
  margin: -10px;
  @media only screen and (max-width: ${wdDetailSmall}) {
    margin: 0;
    padding: 0px 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333333;
  padding-top: 80px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${wdDetailSmall}) {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    padding: 0px 20px;
  }
`;
