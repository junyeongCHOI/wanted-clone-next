import React from "react";
import styled from "styled-components";
import { matchupSmall } from "../../config";

const MatchUpCards = () => {
  return (
    <MatchUpCardsWrap>
      <Cards>
        <Card>
          <MatchupIcon url="https://static.wanted.co.kr/images/matchup/intro/icon_01.png" />
          <h2>편리한 프로필 등록</h2>
          <h4>
            복잡하고 어려운 이직을 스마트하게. 이력서 무한작성은 이제 그만. 딱
            한번의 손쉬운 프로필 등록으로 이직 준비 끝
          </h4>
        </Card>
        <Card isMid>
          <MatchupIcon url="https://static.wanted.co.kr/images/matchup/intro/icon_02.png" />
          <h2>개인정보는 안전하게</h2>
          <h4>
            구직활동 노출이 걱정되시나요? 경력 정보만 공개, 개인정보는 안전하게
            지켜드릴게요.
          </h4>
        </Card>
        <Card>
          <MatchupIcon url="https://static.wanted.co.kr/images/matchup/intro/icon_03_kr.png" />
          <h2>합격 보상금 50만원까지</h2>
          <h4>
            면접 제안으로 합격해도 50만원의 합격 축하 보상금이 당신을
            찾아갑니다. 지금 기회를 잡아보세요!
          </h4>
        </Card>
      </Cards>
    </MatchUpCardsWrap>
  );
};

export default MatchUpCards;

const MatchUpCardsWrap = styled.div`
  width: 100%;
  padding: 132px 2% 122px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://static.wanted.co.kr/images/matchup/intro/02_01.jpg);
  @media only screen and (max-width: ${matchupSmall}) {
    padding: 12% 5%;
    background-image: url(https://static.wanted.co.kr/images/matchup/intro/mobile/02_01.jpg);
    background-size: 100% 100%;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${matchupSmall}) {
    display: block;
  }
`;

const Card = styled.div`
  flex-basis: 342px;
  text-align: center;
  min-width: 244px;
  padding: 0 30px 66px;
  border-radius: 10px;
  box-shadow: 40px 69.3px 100px 0 rgba(0, 0, 0, 0.05);
  background-color: rgb(255, 255, 255);
  margin: ${({ isMid }) => isMid && "0px 20px"};

  h2 {
    margin-top: 18px;
    font-size: 24px;
    font-weight: 700;
    color: rgb(51, 51, 51);
    line-height: 1.5;
  }

  h4 {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    line-height: 1.75;
  }

  @media only screen and (max-width: ${matchupSmall}) {
    margin: ${({ isMid }) => isMid && "30px 0px"};
    padding: 30px 12%;
    border-radius: 5px;

    h2 {
      font-size: 20px;
    }

    h4 {
      font-size: 14px;
    }
  }
`;

const MatchupIcon = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 80px;
  color: rgb(51, 51, 51);
  background-image: url(${({ url }) => url});
  background-position: 50% 0;
  background-repeat: no-repeat;
  @media only screen and (max-width: ${matchupSmall}) {
    margin: 0;
  }
`;
