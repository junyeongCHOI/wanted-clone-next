import styled from "styled-components";
import { footerMedium, footerSmall } from "../config";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <LogoSide>
          <Logo />
          <SpanWrap>
            <LeftSpan>
              <span>서비스 소개</span>
              <span>이용약관</span>
            </LeftSpan>
            <RightSpan>
              <span>개인정보 처리방침</span>
              <span>고객센터</span>
            </RightSpan>
          </SpanWrap>
        </LogoSide>
        <Info>
          (주)원티드랩 (대표이사:제리) | 서울특별시 강남구 테헤란로 142 |
          개인정보보호관리자 : 톰 | 통신판매번호 : 2016-서울강남-00207
          <br />
          유료직업소개사업등록번호 : (국내) 제2016-3220163-14-5-00001호 | (국외)
          F1201020170005 | 사업자등록번호 : 299-86-00021
          <br />
          서비스 및 기업문의 02-539-7118
          <br />© Wantedlab, Inc.
        </Info>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  width: 100vw;
  background-color: rgb(43, 45, 46);
  padding: 30px 0px 70px;
`;

const FooterContainer = styled.div`
  max-width: 90%;
  min-width: 400px;
  margin: 0 auto 25px;
  color: rgb(255, 255, 255, 0.8);
  @media only screen and (max-width: ${footerMedium}) {
    width: 90%;
  }
  @media only screen and (max-width: ${footerSmall}) {
    align-items: center;
  }
`;

const LogoSide = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-size: 16px;

  @media only screen and (max-width: ${footerMedium}) {
    height: 85px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  @media only screen and (max-width: ${footerSmall}) {
    height: 100px;
    align-items: center;
  }
`;

const SpanWrap = styled.div`
  display: flex;
  span {
    margin-right: 45px;
    cursor: pointer;
  }
  @media only screen and (max-width: ${footerSmall}) {
    flex-direction: column;
    align-items: center;
    span {
      font-size: 14px;
      margin: 0px 8px;
    }
  }
`;

const LeftSpan = styled.div`
  @media only screen and (max-width: ${footerSmall}) {
    margin-bottom: 20px;
  }
`;

const RightSpan = styled.div``;

const Logo = styled.div`
  width: 100px;
  height: 16px;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted.png");
  background-size: cover;
  margin-right: 50px;
  @media only screen and (max-width: ${footerSmall}) {
    margin: 0px;
  }
`;

const Info = styled.p`
  font-size: 12px;
  margin-bottom: 25px;
  line-height: 1.66667em;
  @media only screen and (max-width: ${footerSmall}) {
    text-align: center;
  }
`;
