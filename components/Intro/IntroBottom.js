import React from "react";
import styled from "styled-components";
import { StartBtn } from "./IntroTop";
import { homeIntroSmall } from "../../config";

const IntroBottom = ({ loginModalOn }) => {
  return (
    <IntroBottomWrap>
      <h1>나에게 딱 맞는 회사 찾기</h1>
      <h4>회원가입 후, 지금 가장 인기있는 채용 소식을 팔로우 해보세요.</h4>
      <Brands>
        <BrandImgs>
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_naver.png"
            alt="brandImages"
          />
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_toss.png"
            alt="brandImages"
          />
        </BrandImgs>
        <BrandImgs>
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_kakao.png"
            alt="brandImages"
          />
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_coupang.png"
            alt="brandImages"
          />
        </BrandImgs>
      </Brands>
      <Brands bottom>
        <BrandImgs>
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_airbnb.png"
            alt="brandImages"
          />
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_wooahan.png"
            alt="brandImages"
          />
        </BrandImgs>
        <BrandImgs>
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_skt.png"
            alt="brandImages"
          />
          <img
            src="https://static.wanted.co.kr/images/home/logos/logo_facebook.png"
            alt="brandImages"
            className="facebook"
          />
        </BrandImgs>
      </Brands>
      <StartBtn onClick={loginModalOn}>지금 시작하기</StartBtn>
    </IntroBottomWrap>
  );
};

export default IntroBottom;

const IntroBottomWrap = styled.div`
  width: 100%;
  padding: 100px 0px;
  text-align: center;
  color: rgb(51, 51, 51);

  h1 {
    font-size: 50px;
    font-weight: 600;
  }

  h4 {
    font-size: 20px;
    margin-top: 16px;
    color: rgb(102, 102, 102);
  }

  @media only screen and (max-width: ${homeIntroSmall}) {
    padding: 65px 0px;

    h1 {
      letter-spacing: -0.5px;
      font-size: 32px;
    }

    h4 {
      font-size: 14px;
      margin-top: 10px;
      line-height: 1.6;
    }
  }
`;

const Brands = styled.div`
  margin: ${({ bottom }) => (bottom ? "30px 0 80px" : "60px 0 0")};
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${homeIntroSmall}) {
    margin: 20px 0px 35px;
    flex-direction: column;
    align-items: center;
    justify-content: unset;
  }
`;

const BrandImgs = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0px 35px;
    width: 160px;
    height: 64px;
  }
  .facebook {
    margin-top: 20px;
    height: 17.77px;
  }
  @media only screen and (max-width: ${homeIntroSmall}) {
    img {
      margin: 5px 20px;
      width: 100px;
      height: 40px;
    }
    .facebook {
      margin-top: 20px;
      height: 10.11px;
    }
  }
`;
