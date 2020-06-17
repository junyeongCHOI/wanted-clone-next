import React from "react";
import styled from "styled-components";

const SearchTag = ({ name, onClick }) => {
  return <SearchTagWrap onClick={onClick}>#{name}</SearchTagWrap>;
};

export default SearchTag;

const SearchTagWrap = styled.div`
  margin-right: 12px;
  margin-bottom: 20px;
  padding: 17px 23px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eaf5ff;
    color: #268bf7;
  }
`;
