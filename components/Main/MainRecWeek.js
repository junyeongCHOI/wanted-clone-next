import React from "react";
import styled from "styled-components";
import WdCard from "../WdList/WdCard";

const MainRecWeek = ({ Recommendation_week }) => {
  return (
    <MainRecWeekWrap>
      <h2>금주의 추천</h2>
      <MainRecWeekContainer>
        {Recommendation_week.map((item, idx) => (
          <WdCard key={idx} item={item} />
        ))}
      </MainRecWeekContainer>
    </MainRecWeekWrap>
  );
};

export default MainRecWeek;

const MainRecWeekWrap = styled.div`
  margin-bottom: 60px;
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }
`;

const MainRecWeekContainer = styled.div`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;
