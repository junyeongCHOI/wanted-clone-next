import React from "react";
import styled from "styled-components";
import { matchupSmall } from "../../config";

const MatchUpTop = ({ checkToken }) => {
  return (
    <MatchUpTopWrap>
      <MatchUpTitle>찾아오는 면접 제안, MatchUp</MatchUpTitle>
      <MatchUpSubtitle>
        프로필 등록 한번으로 인사담당자에게 직접 면접 제안을 받으세요.
      </MatchUpSubtitle>
      <MatchUpBtn onClick={checkToken}>매치업 등록하기</MatchUpBtn>
      <BottomImg />
    </MatchUpTopWrap>
  );
};

export default MatchUpTop;

const MatchUpTopWrap = styled.div`
  width: 100%;
  padding-top: 100px;
  text-align: center;
`;

const MatchUpTitle = styled.h1`
  font-size: 56px;
  font-weight: 600;
  line-height: 1.2;
  @media only screen and (max-width: ${matchupSmall}) {
    font-size: 32px;
  }
`;

const MatchUpSubtitle = styled.h4`
  font-size: 18px;
  line-height: 1.5;
  margin: 20px 0 30px;
  @media only screen and (max-width: ${matchupSmall}) {
    font-size: 15px;
  }
`;

export const MatchUpBtn = styled.div`
  display: inline-block;
  margin: 0 5px;
  padding: 15px 55px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  background-color: #3a68f9;
  border-color: #3a68f9;
  border-width: 1px;
  color: #fff;
  line-height: 1.4;
  cursor: pointer;
  @media only screen and (max-width: ${matchupSmall}) {
    padding: 17px 45px;
  }
`;

const BottomImg = styled.div`
  margin-top: 65px;
  background-image: url(https://static.wanted.co.kr/images/matchup/intro/01_kr_20200326.jpg);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 276px;
`;
