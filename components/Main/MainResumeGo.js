import React from "react";
import styled from "styled-components";
import { CvWriteBodyAPI } from "../../config";
import Router from "next/router";
import axios from "axios";

const MainResumeGo = () => {
  const makeNewResume = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(CvWriteBodyAPI, {
        headers: {
          Authorization: token,
        },
      });
      Router.push(`/CvWrite?id=${res.data.data.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainResumeGoWrap>
      <h2>프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요</h2>
      <GoResumeBtn onClick={makeNewResume}>이력서 작성하기</GoResumeBtn>
    </MainResumeGoWrap>
  );
};

export default MainResumeGo;

const MainResumeGoWrap = styled.div`
  width: 87.72%;
  height: 90px;
  display: block;
  position: relative;
  padding: 0 30px;
  max-width: 1060px;
  background: #258bf7;
  border-radius: 3px;
  display: felx;
  justify-content: space-between;
  align-items: center;
  margin: 80px auto;
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
`;

const GoResumeBtn = styled.div`
  color: #258bf7;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 40px;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
`;
