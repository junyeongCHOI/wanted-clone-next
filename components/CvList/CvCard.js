import React from "react";
import styled from "styled-components";

const CvCard = ({ children }) => {
  return <CvCardWrap>{children}</CvCardWrap>;
};

export default CvCard;

const CvCardWrap = styled.div`
  margin: 0 0 20px 20px;
  width: calc(25% - 25px);
  height: 190px;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
`;
