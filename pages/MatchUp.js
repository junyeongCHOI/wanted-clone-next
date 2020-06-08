import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Router from "next/router";
import { loginModalOn } from "../actions";
import Head from "next/head";
import LayoutUser from "../components/LayoutUser";
import MatchUpTop from "../components/Matchup/MatchUpTop";
import MatchUpCards from "../components/Matchup/MatchUpCards";
import MatchUpSlide from "../components/Matchup/MatchUpSlide";
import MatchUpBottom from "../components/Matchup/MatchUpBottom";

const MatchUp = ({ loginModalOn }) => {
  const checkToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      loginModalOn();
    } else {
      Router.push("/profile?match=profile");
    }
  };

  return (
    <>
      <Head>
        <title>MatchUp, 이제 지원하지 말고 제안 받으세요!</title>
      </Head>
      <LayoutUser>
        <MatchUpWrap>
          <MatchUpTop checkToken={checkToken} />
          <MatchUpCards />
          <MatchUpSlide />
          <MatchUpBottom checkToken={checkToken} />
        </MatchUpWrap>
      </LayoutUser>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(MatchUp);

const MatchUpWrap = styled.div`
  width: 100vw;
  min-width: 400px;
  padding-top: 50px;
  background-position: 50%;
`;
