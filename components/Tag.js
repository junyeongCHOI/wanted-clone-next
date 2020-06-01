import React from "react";
import styled from "styled-components";

const Tag = ({ name }) => {
  return <TagWrap>#{name}</TagWrap>;
};

export default Tag;

const TagWrap = styled.div`
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 10px;
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
  cursor: pointer;
`;
