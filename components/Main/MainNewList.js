import React from "react";
import styled from "styled-components";
import WdCard from "../WdList/WdCard";

const MainNewList = ({ new_employment }) => {
  return (
    <MainNewListWrap>
      <h2>신규 채용 회사</h2>
      <MainNewListContainer>
        {new_employment.map((item) => (
          <WdCard item={item} />
        ))}
      </MainNewListContainer>
    </MainNewListWrap>
  );
};

export default MainNewList;

const MainNewListWrap = styled.div`
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

const MainNewListContainer = styled.div`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;
