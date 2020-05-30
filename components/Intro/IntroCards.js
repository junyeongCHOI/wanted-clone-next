import React from "react";
import styled from "styled-components";
import { homeIntroSmall } from "../../config";

const IntroCards = () => {
  return (
    <IntroCardsWrap>
      <CardWrap>
        <Card
          imgUrl="https://static.wanted.co.kr/images/home/main_intro_02_001.png"
          imgUrlMobile="https://static.wanted.co.kr/images/home/mobile/main_intro_02_01.png"
        >
          <Title>매치업</Title>
          <Subtitle>
            프로필 등록 한번으로 인사담당자에게
            <br />
            직접 면접 제안을 받으세요.
          </Subtitle>
          <MoreBtn>더 알아보기</MoreBtn>
        </Card>
        <Card
          mid
          imgUrl="https://static.wanted.co.kr/images/home/main_intro_02_tag_search.png"
          imgUrlMobile="https://static.wanted.co.kr/images/home/mobile/main_02_tag_search.png"
        >
          <Title>태그 검색</Title>
          <Subtitle>
            #재택근무 #반려동물
            <br />내 취향에 맞는 회사를 찾아보세요.
          </Subtitle>
        </Card>
        <Card
          imgUrl="https://static.wanted.co.kr/images/home/main_intro_02_003.png"
          imgUrlMobile="https://static.wanted.co.kr/images/home/mobile/main_intro_02_03.png"
        >
          <Title>지인 추천</Title>
          <Subtitle>
            나를 잘 아는 지인의 추천 받고
            <br />
            50만원 합격 보상금도 받으세요.
          </Subtitle>
        </Card>
      </CardWrap>
    </IntroCardsWrap>
  );
};

export default IntroCards;

const IntroCardsWrap = styled.div`
  width: 100%;
  min-height: 715px;
  background-image: url(https://static.wanted.co.kr/images/home/main_intro_02_bg_20200326.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  @media only screen and (max-width: ${homeIntroSmall}) {
    background-image: url(https://static.wanted.co.kr/images/home/mobile/main_intro_02_bg_20200326.jpg);
  }
`;

const CardWrap = styled.div`
  padding: 115px 50px 0px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${homeIntroSmall}) {
    padding: 10px 20px;
    display: block;
  }
`;

const Card = styled.div`
  width: 340px;
  height: 480px;
  padding-top: 60px;
  text-align: center;
  font-size: 16px;
  color: rgb(51, 51, 51);
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: ${({ mid }) => mid && "0px 20px"};
  @media only screen and (max-width: ${homeIntroSmall}) {
    width: 100%;
    height: 50vh;
    min-height: 360px;
    border-radius: 10px;
    background-size: cover;
    background-position: 50%;
    background-image: url(${({ imgUrlMobile }) => imgUrlMobile});
    margin: 20px 0px;
  }
`;

const Title = styled.div`
  font-size: 36px;
`;

const Subtitle = styled.div`
  margin-top: 25px;
  line-height: 1.4;
`;

const MoreBtn = styled.div`
  color: rgb(58, 104, 249);
  margin-top: 15px;
  cursor: pointer;
`;
