import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginModalOn } from "../actions";
import MatchUpTop from "../components/Matchup/MatchUpTop";
import MatchUpCards from "../components/Matchup/MatchUpCards";
import MatchUpSlide from "../components/Matchup/MatchUpSlide";
import MatchUpBottom from "../components/Matchup/MatchUpBottom";

const MatchUp = ({ loginModalOn }) => {
  const checkToken = () => {
    const token = localStorage.getItem("loginToken");

    if (!token) {
      loginModalOn();
    } else {
      return true;
    }
  };

  return (
    <MatchUpWrap>
      <MatchUpTop checkToken={checkToken} />
      <MatchUpCards />
      <MatchUpSlide />
      <MatchUpBottom checkToken={checkToken} />
    </MatchUpWrap>
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
