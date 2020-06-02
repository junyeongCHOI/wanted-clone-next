import React, { useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import Head from "next/head";
import LayoutUser from "../components/LayoutUser";
import CvWriteTopWrap from "../components/CvWrite/CvWriteTop";
import CvWriteBody from "../components/CvWrite/CvWriteBody";
import CvWriteBottom from "../components/CvWrite/CvWriteBottom";

const CvWrite = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>원티드 - 지인 추천하고 보상금 받기</title>
      </Head>
      <LayoutUser footer={false}>
        <CvWriteWrap>
          <CvWriteTopWrap />
          <CvWriteBody />
          <CvWriteBottom />
        </CvWriteWrap>
      </LayoutUser>
    </>
  );
};

export default CvWrite;

const CvWriteWrap = styled.div`
  padding: 80px 0;
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
`;
