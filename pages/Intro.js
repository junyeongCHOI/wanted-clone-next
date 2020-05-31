import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import styled from "styled-components";
import { loginModalOn } from "../actions";
import LayoutUser from "../components/LayoutUser";
import IntroTop from "../components/Intro/IntroTop";
import IntroBottom from "../components/Intro/IntroBottom";
import IntroCards from "../components/Intro/IntroCards";

const Intro = ({ loginModalOn }) => {
  return (
    <>
      <Head>
        <title>원티드 - 지인 추천하고 보상금 받기</title>
      </Head>
      <LayoutUser>
        <IntroWrap>
          <IntroTop loginModalOn={loginModalOn} />
          <IntroCards />
          <IntroBottom loginModalOn={loginModalOn} />
        </IntroWrap>
      </LayoutUser>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(Intro);

const IntroWrap = styled.div`
  width: 100vw;
  padding-top: 50px;
  min-width: 450px;
`;
