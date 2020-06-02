import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";
import { connect } from "react-redux";
import LayoutUser from "../components/LayoutUser";
import WdDetailSlide from "../components/WdDetail/WdDetailSlide";
import WdDetailBody from "../components/WdDetail/WdDetailBody";
import WdDetailBottom from "../components/WdDetail/WdDetailBottom";
import WdDetailRecommend from "../components/WdDetail/WdDetailRecommend";
import WdDetailRightSide from "../components/WdDetail/WdDetailRightSide";
import { wdDetailSmall } from "../config";
import { loginModalOn } from "../actions";

const WdDetail = ({ data, loginModalOn }) => {
  const applyBtn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      loginModalOn();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>
          {data.position_name} | {data.company_name}
        </title>
      </Head>
      <LayoutUser footer={false}>
        <WdDetailWrap>
          <BodyWrap>
            <Article>
              <WdDetailSlide detailImages={data.detail_images} />
              <WdDetailBody
                positionName={data.position_name}
                companyName={data.company_name}
                location={data.location}
                country={data.country}
                tags={data.tags}
                reward={data.reward}
                body={data.body}
              />
              <WdDetailBottom data={data.info} />
            </Article>
            <WdDetailRightSide reward={data.reward} applyBtn={applyBtn} />
          </BodyWrap>
          <WdDetailRecommend list={data.more} />
        </WdDetailWrap>
        <SubmitBtnMobile onClick={applyBtn}>지원하기</SubmitBtnMobile>
      </LayoutUser>
    </>
  );
};

WdDetail.getInitialProps = async () => {
  const res = await axios("http://localhost:3000/static/data/wddetail.json");
  return {
    data: res.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(WdDetail);

const WdDetailWrap = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 70px 0 80px;
  @media only screen and (max-width: ${wdDetailSmall}) {
    width: 100%;
    padding: 50px 0 40px;
  }
`;

const Article = styled.article`
  display: inline-block;
  width: calc(100% - 360px);
  @media only screen and (max-width: ${wdDetailSmall}) {
    width: 100%;
  }
`;

const BodyWrap = styled.div`
  width: 100%;
  position: relative;
`;

const SubmitBtnMobile = styled.div`
  position: fixed;
  display: none;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100vw;
  height: 50px;
  border-radius: 3px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  color: #fff;
  text-align: center;
  @media only screen and (max-width: ${wdDetailSmall}) {
    display: block;
  }
`;
