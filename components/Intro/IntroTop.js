import styled from "styled-components";
import { homeIntroSmall } from "../../config";

const IntroTop = () => {
  return (
    <IntroWrap>
      <Go />
      <MainTitle>요즘 이직, 원티드</MainTitle>
      <SubTitle>나에게 딱 맞는 회사, 원티드에서 찾아보세요!</SubTitle>
      <StartBtn>지금 시작하기</StartBtn>
    </IntroWrap>
  );
};

export default IntroTop;

const IntroWrap = styled.div`
  position: relative;
  height: 550px;
  padding-left: calc(50% - 450px);
  background-image: url(https://static.wanted.co.kr/images/home/main_intro_01_20200326.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  @media only screen and (max-width: ${homeIntroSmall}) {
    text-align: center;
    background-image: url(https://static.wanted.co.kr/images/home/mobile/main_intro_01_20200326_1.jpg);
    background-size: contain;
    background-position: bottom;
  }
`;

const MainTitle = styled.h1`
  padding-top: 160px;
  font-size: 50px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  line-height: 1.2;
  @media only screen and (max-width: ${homeIntroSmall}) {
    padding-top: 90px;
    font-size: 32px;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin: 16px 0px 36px;
  color: rgb(102, 102, 102);
  line-height: 1.2;
  @media only screen and (max-width: ${homeIntroSmall}) {
    font-size: 17px;
    margin: 15px 0px 25px;
  }
`;

export const StartBtn = styled.div`
  display: inline-block;
  padding: 21px 80px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: rgb(255, 255, 255);
  background-color: rgb(58, 104, 249);
  border-radius: 45px;
  cursor: pointer;
  @media only screen and (max-width: ${homeIntroSmall}) {
    font-size: 17px;
    padding: 17px 45px;
  }
`;

const Go = styled.div`
  display: none;
  @media only screen and (max-width: ${homeIntroSmall}) {
    position: absolute;
    display: inline-block;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;
    background-image: url(https://static.wanted.co.kr/images/home/mobile/go.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
