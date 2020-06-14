import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import LayoutCompany from "../components/LayoutCompany";
import Link from "next/link";
import { connect } from "react-redux";
import { loginModalOn } from "../actions";

const CompanyIntro = ({ loginModalOn }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      location.href = "/dashboard";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Wanted for Employers</title>
      </Head>
      <LayoutCompany>
        <CompanyIntroWrap>
          <IntroItem>
            <IntroItemContainer>
              <h2>
                <span>사람</span>과 <span>일자리</span>를 가장 인간적이고
                <br /> 효율적으로 <span>연결</span>합니다
              </h2>
              <ServiceBtn>서비스 소개서</ServiceBtn>
              <StartBtn onClick={loginModalOn}>시작하기</StartBtn>
            </IntroItemContainer>
          </IntroItem>
          <IntroMid>
            <InTroMidContainer>
              <MidLeft>
                원티드를
                <br />
                이용하는 이유
              </MidLeft>
              <MidRight>
                <h2>국내외 150만 유저 및 8,000개 기업 이용</h2>
                <h2>공고 후 1개월 내 채용 성공률 52%</h2>
                <h2>채용 후 6개월 내 채용 유지율 95%</h2>
                <h2>기존 채널 대비 40% 이상 채용 비용 절감</h2>
              </MidRight>
            </InTroMidContainer>
          </IntroMid>
          <IntroMid style={{ backgroundImage: "none" }}>
            <InTroMidContainer>
              <MidLeft style={{ color: "#333" }}>원티드 서비스</MidLeft>
              <MidRightT>
                <h1 style={{ color: "#21c16c" }}>추천 채용</h1>
                <h2>
                  채용 확정 전까지 아무런 비용 부담없이, 150만 명의
                  추천인들로부터 최적의 인재를 추천 받으세요
                </h2>
                <h1 style={{ color: "#2a91fc" }}>매치업</h1>
                <h2>
                  120,000+명의 엄선된 경력자들 중에 맘에 드는 후보자에게 직접
                  면접을 제안하세요
                </h2>
                <h1 style={{ color: "#ed9a23" }}>네트워크 광고</h1>
                <h2>
                  한번의 신청으로 최대 500만명의 적극적, 잠재적 구직자들에게
                  채용정보를 알리세요
                </h2>
              </MidRightT>
            </InTroMidContainer>
          </IntroMid>
          <IntroMid
            style={{
              backgroundImage:
                "url(http://static.wanted.co.kr/images/recruit/welcome_2.jpg)",
            }}
          >
            <InTroMidContainer>
              <MidLeft>원티드 고객 스토리</MidLeft>
              <MidRight>
                <InterviewBox>
                  "...채용이 어려워 다양한 채널을 이용할 수 밖에 없다보니 처음에
                  원티드를 이용하기 시작할 때 부담도 있었습니다. 그런데 몇달간
                  운용해보니 다른 채널에서는 접하지 못하는 후보자들을 만날 수
                  있었어요.
                  <span>원티드의 가장큰 장점은 지원자 퀄리티라 생각합니다</span>
                  ..."
                  <p>- 국내 선도 IT기업 채용담당자</p>
                </InterviewBox>
                <InterviewBox>
                  "...디지털화를 추진하며 SW엔지니어를 뽑아야 했는데, 회사에
                  대한 기존 인식 때문인지 공고를 내거나 써치펌을 써도 채용할 수
                  없었어요. 그런데
                  <span>
                    원티드 매치업을 통해 공고를 통해 만날 수 없었던 후보자를
                    만나고 직접 포지션과 비전을 설명드려 적합한 분을 채용할 수
                    있었습니다
                  </span>
                  ..."
                  <p>- 국내 선도 제조기업 채용담당자</p>
                </InterviewBox>
              </MidRight>
            </InTroMidContainer>
          </IntroMid>
          <IntroItem>
            <IntroItemContainer>
              <h2 style={{ fontSize: "40px" }}>
                이제 원티드를 통해 최적의 후보자를 만나세요
              </h2>
              <ServiceBtn>서비스 소개서</ServiceBtn>
              <StartBtn onClick={loginModalOn}>시작하기</StartBtn>
            </IntroItemContainer>
          </IntroItem>
        </CompanyIntroWrap>
      </LayoutCompany>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(CompanyIntro);

const CompanyIntroWrap = styled.div`
  padding-top: 50px;
`;

const IntroItem = styled.div`
  width: 100%;
  position: relative;
  padding: 100px 0px;
  background-color: rgb(255, 255, 255);
  text-align: center;
`;

const IntroItemContainer = styled.div`
  width: 87.72%;
  position: relative;
  margin: 0 auto;
  max-width: 1060px;
  h2 {
    line-height: 1.4;
    overflow-wrap: break-word;
    color: rgb(153, 153, 153);
    font-weight: 200;
    font-size: 60px;
    max-width: 80rem;
    text-align: center;
    margin: 0px auto;
    span {
      font-weight: 200;
      color: rgb(51, 51, 51);
    }
  }
`;

const ServiceBtn = styled.div`
  display: inline-block;
  color: rgb(51, 51, 51);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 226, 227);
  border-image: initial;
  border-radius: 3px;
  margin: 40px 10px 0;
  padding: 14px 50px;
  cursor: pointer;
`;

const StartBtn = styled.div`
  cursor: pointer;
  display: inline-block;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  font-weight: 600;
  border-radius: 3px;
  padding: 14px 50px;
  margin: 40px 10px 0;
`;

const IntroMid = styled.div`
  width: 100%;
  position: relative;
  background-size: cover;
  padding: 100px 0px;
  background-image: url(http://static.wanted.co.kr/images/recruit/welcome_1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
`;

const InTroMidContainer = styled.div`
  width: 87.72%;
  margin: 0 auto;
  max-width: 1060px;
  display: flex;
`;

const MidLeft = styled.div`
  width: 33%;
  font-size: 42px;
  font-weight: 300;
  line-height: 1.4;
  overflow-wrap: break-word;
  color: rgb(255, 255, 255);
`;

const MidRight = styled.div`
  width: 67%;
  font-weight: 400;
  line-height: 1.4;
  overflow-wrap: break-word;
  color: rgb(255, 255, 255);

  h2 {
    font-size: 28px;
    padding-bottom: 50px;
  }
`;

const MidRightT = styled.div`
  width: 67%;
  font-weight: 400;
  line-height: 1.4;
  overflow-wrap: break-word;
  color: #999;

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
    padding-bottom: 50px;
  }
`;

const InterviewBox = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(200, 200, 200);
  line-height: 1.67;
  font-size: 24px;

  span {
    color: #fff;
  }

  p {
    margin-top: 20px;
    color: #fff;
    text-align: right;
    font-size: 20px;
    font-weight: 600;
  }
`;
