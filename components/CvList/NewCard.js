import React from "react";
import styled from "styled-components";
import CvCard from "./CvCard";

const NewCard = () => {
  return (
    <CvCard>
      <NewCardWrap>
        <NewCardContainer>
          <Icon>
            <i className="far fa-clone" />
          </Icon>
          <h4>새 이력서 작성</h4>
        </NewCardContainer>
      </NewCardWrap>
    </CvCard>
  );
};

export default NewCard;

const NewCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const NewCardContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  h4 {
    margin-top: 20px;
  }
`;

const Icon = styled.div`
  width: 74px;
  height: 74px;
  margin: 0 auto;
  background-color: #258bf7;
  border-radius: 50%;
  color: #ffffff;
  display: felx;
  justify-content: center;
  align-items: center;
  i {
    display: block;
    font-size: 21px;
    transform: rotate(270deg);
  }
`;
