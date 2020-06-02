import React from "react";
import styled from "styled-components";
import { MatchUpBtn } from "./MatchUpTop";
import { matchupSmall } from "../../config";

const MatchUpBottom = ({ checkToken }) => {
  return (
    <MatchUpBottomWrap>
      <h3>
        8,000개 이상의 글로벌 기업들이 매치업을 통해 인재를 찾고 있습니다.
        <br />
        지금 바로 이력서 등록하고 인사담당자들과 만나보세요.
      </h3>
      <BrandImages />
      <MatchUpBtn onClick={checkToken}>지금 시작하기</MatchUpBtn>
    </MatchUpBottomWrap>
  );
};

export default MatchUpBottom;

const MatchUpBottomWrap = styled.div`
  height: 640px;
  line-height: 1.5;
  text-align: center;
  color: rgb(255, 255, 255);
  background-image: url(https://static.wanted.co.kr/images/matchup/intro/04_bg.png);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 100px;

  h3 {
    font-size: 30px;
  }

  @media only screen and (max-width: ${matchupSmall}) {
    max-height: 540px;
    background-image: url(https://static.wanted.co.kr/images/matchup/intro/mobile/04_bg.png);
    background-size: 100% 100%;
    padding: 60px 40px 0;

    h3 {
      font-size: 18px;
    }
  }
`;

const BrandImages = styled.div`
  background-image: url(https://static.wanted.co.kr/images/matchup/intro/logos.png);
  background-position: 50%;
  background-size: auto;
  background-repeat: no-repeat;
  margin: 30px auto 50px;
  height: 120px;
  @media only screen and (max-width: ${matchupSmall}) {
    margin: 50px auto;
    background-size: contain;
    background-image: url(https://static.wanted.co.kr/images/matchup/intro/mobile/logos.png);
    height: 125px;
  }
`;
