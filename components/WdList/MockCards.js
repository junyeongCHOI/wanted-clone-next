import React from "react";
import styled from "styled-components";
import { seekSmall } from "../../config";

const MockCards = () => {
  return (
    <>
      <MockCardsWrap>
        <HeaderImg />
        <BodyContent>
          <BodyTitle />
          <BodyInfo />
        </BodyContent>
      </MockCardsWrap>
      <MockCardsWrap>
        <HeaderImg />
        <BodyContent>
          <BodyTitle />
          <BodyInfo />
        </BodyContent>
      </MockCardsWrap>
      <MockCardsWrap>
        <HeaderImg />
        <BodyContent>
          <BodyTitle />
          <BodyInfo />
        </BodyContent>
      </MockCardsWrap>
      <MockCardsWrap>
        <HeaderImg />
        <BodyContent>
          <BodyTitle></BodyTitle>
          <BodyInfo />
        </BodyContent>
      </MockCardsWrap>
    </>
  );
};

export default MockCards;

const MockCardsWrap = styled.div`
  width: 25%;
  padding: 10px;
  line-height: 1.42;

  @media only screen and (max-width: ${seekSmall}) {
    width: 50%;
  }
`;

const HeaderImg = styled.div`
  padding-bottom: 75%;
  position: relative;
  background-color: rgb(242, 242, 242);
  background-size: cover;
  background-position: 50%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const BodyContent = styled.div`
  padding: 14px 10px;
  height: 12.5em;
`;

const BodyTitle = styled.div`
  position: relative;
  height: 20px;
  font-size: 18px;
  font-weight: 600;
  max-height: 2.8em;
  background-color: rgb(234, 235, 236);
  border-radius: 3px;
`;

const BodyInfo = styled.div`
  width: 60%;
  height: 20px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  background-color: rgb(234, 235, 236);
  border-radius: 3px;
`;
