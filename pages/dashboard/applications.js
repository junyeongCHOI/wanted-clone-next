import React, { useEffect } from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import LayoutCompany from "../../components/LayoutCompany";
import ApplicationList from "../../components/Dashboard/ApplicationList";
import AppDetail from "../../components/Dashboard/AppDetail";

const match = {
  new: <ApplicationList />,
  detail: <AppDetail />,
};

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const applications = ({ router }) => {
  useEffect(() => {
    if (!router.query.match) {
      Router.push("/dashboard/applications?match=new");
    }
  }, [router.query.match]);

  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany loggedin>
        <ApplicationsWrap>
          <ApplicationsContainer>
            <LeftSide isOn={router.query.category === "matchup"}>
              <h2>채용 중 포지션</h2>
              <Link href="/dashboard/applications?match=new">
                <a>
                  <h4>포지션 전체</h4>
                </a>
              </Link>
              <Link href="/dashboard/applications?match=new&category=matchup">
                <a>
                  <h3>매치업</h3>
                </a>
              </Link>
              <h2 style={{ marginTop: "30px" }}>마감된 포지션</h2>
              <BannerWrap>
                <Slider {...slideSettings}>
                  <BannerItemWrap>
                    <Banner img="https://wanted-marketing-image.s3.ap-northeast-2.amazonaws.com/service_introduction/dashboard_applications_lnb_banner_2_img_200511.jpg" />
                    <h4>프로젝트 의뢰하기</h4>
                  </BannerItemWrap>
                  <BannerItemWrap>
                    <Banner img="https://wanted-marketing-image.s3.ap-northeast-2.amazonaws.com/service_introduction/dashboard_applications_lnb_banner_1_img_200608.jpg" />
                    <h4>기업 추천하고, 혜택 받기</h4>
                  </BannerItemWrap>
                </Slider>
              </BannerWrap>
            </LeftSide>
            <ContextSide>
              <ResWrap
                style={{ display: router.query.match !== "new" && "none" }}
              >
                <Res>
                  <h2>응답률</h2>
                  <h3>0.0%</h3>
                </Res>
                <Res border>
                  <h2>평균 응답일</h2>
                  <h3>0.0일</h3>
                </Res>
              </ResWrap>
              {match[router.query.match]}
            </ContextSide>
          </ApplicationsContainer>
        </ApplicationsWrap>
      </LayoutCompany>
    </>
  );
};

export default withRouter(applications);

const ApplicationsWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(244, 244, 244);
`;

const ApplicationsContainer = styled.div`
  padding-top: 150px;
  width: 87.73%;
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
`;

const LeftSide = styled.div`
  width: 240px;
  line-height: 1.4;

  h2 {
    overflow-wrap: break-word;
    font-size: 14px;
    word-break: keep-all;
    font-weight: 600;
    color: rgb(17, 17, 17);
    padding: 10px 0px;
    border-bottom: 1px solid rgb(216, 216, 216);
    border-top: 1px solid rgb(51, 51, 51);
  }

  h3 {
    overflow-wrap: break-word;
    font-size: 16px;
    word-break: keep-all;
    font-weight: 600;
    color: ${({ isOn }) => (isOn ? "#36f" : "rgb(17, 17, 17)")};
    padding: 20px 0px 0px;
    cursor: pointer;
  }

  h4 {
    overflow-wrap: break-word;
    font-size: 16px;
    word-break: keep-all;
    font-weight: 600;
    color: ${({ isOn }) => (isOn ? "rgb(17, 17, 17)" : "#36f")};
    padding: 20px 0px 0px;
    cursor: pointer;
  }
`;

const BannerWrap = styled.div`
  width: 240px;
  height: 300px;
`;

const Banner = styled.div`
  width: 240px;
  height: 240px;
  margin-top: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
`;

const BannerItemWrap = styled.div`
  h4 {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    background-color: #fff;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: rgb(51, 102, 255);
  }
`;

const ContextSide = styled.div`
  width: calc(100% - 260px);
  margin-left: 20px;
`;

const ResWrap = styled.div`
  width: 100%;
  height: 60px;
  display: felx;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-bottom: 22px;
  border: 1px solid rgb(225, 226, 227);
  border-radius: 3px;
`;

const Res = styled.div`
  padding: 0 20px;
  width: 50%;
  border-left: ${({ border }) => border && "1px solid rgb(225, 226, 227)"};
  display: flex;
  justify-content: space-between;
  h2 {
    overflow-wrap: break-word;
    color: rgb(117, 117, 117);
    font-size: 16px;
    word-break: keep-all;
    font-weight: 400;
    line-height: 28px;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: rgb(51, 51, 51);
  }
`;
