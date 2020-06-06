import React from "react";
import styled from "styled-components";
import WdCard from "../WdList/WdCard";

const MainFitList = ({ position_recommend }) => {
  return (
    <MainFitListWrap>
      <h2>
        나에게 딱 맞는 포지션 <i className="xi-cog" />
      </h2>
      <MainFitListContainer>
        {position_recommend.map((item) => (
          <WdCard item={item} />
        ))}
      </MainFitListContainer>
    </MainFitListWrap>
  );
};

export default MainFitList;

const MainFitListWrap = styled.div`
  margin-bottom: 60px;
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: normal;
    text-align: left;
    color: #333;
    display: felx;
    align-items: center;
    i {
      color: #9d9d9d;
      cursor: pointer;
    }
  }
`;

const MainFitListContainer = styled.div`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;
