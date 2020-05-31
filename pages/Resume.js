import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { connect } from "react-redux";
import LayoutUser from "../components/LayoutUser";
import ResumeTop from "../components/resume/ResumeTop";

const Resume = () => {
  const checkToken = () => {
    const token = localStorage.getItem("loginToken");

    if (!token) {
      loginModalOn();
    } else {
      return true;
    }
  };

  return (
    <>
      <Head>
        <title>서류통과가 잘되는 이력서 | 원티드</title>
      </Head>
      <LayoutUser>
        <ResumeWrap>
          <ResumeTop checkToken={checkToken} />
        </ResumeWrap>
      </LayoutUser>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(Resume);

const ResumeWrap = styled.div`
  padding-top: 50px;
  min-width: 400px;
`;