import React from "react";
import styled from "styled-components";

const FilterBox = () => {
  return (
    <FilterBoxWrap>
      <FilterBoxContainer>
        <span>최신순</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        국가
        <span>한국</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        지역
        <span>전국</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        경력
        <span>전체</span>
      </FilterBoxContainer>
    </FilterBoxWrap>
  );
};

export default FilterBox;

const FilterBoxWrap = styled.div`
  display: flex;
  padding-top: 45px;
`;

const FilterBoxContainer = styled.div`
  border-radius: 2px;
  border: 1px solid #e1e2e3;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 400;
  padding: 9px 15px;
  margin-right: 10px;

  span {
    margin-left: 3px;
    color: #2886fa;
    font-weight: 600;
  }
`;
