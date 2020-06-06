import React, { useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import { MYIP } from "../config";
import LayoutUser from "../components/LayoutUser";
import MainSlider from "../components/Main/MainSlider";
import MainResumeGo from "../components/Main/MainResumeGo";
import MainFitList from "../components/Main/MainFitList";
import MainThemeList from "../components/Main/MainThemeList";
import MainNewList from "../components/Main/MainNewList";
import MainRecWeek from "../components/Main/MainRecWeek";

const Main = ({
  slideData,
  position_recommend,
  new_employment,
  theme_list,
  Recommendation_week,
}) => {
  return (
    <>
      <Head>
        <title>원티드 - 지인 추천하고 보상금 받기</title>
      </Head>
      <LayoutUser>
        <MainWrap>
          <MainSlider data={slideData} />
          <MainResumeGo />
          <MainContainer>
            <MainFitList position_recommend={position_recommend} />
          </MainContainer>
          <MainThemeList theme_list={theme_list} />
          <MainContainer>
            <MainNewList new_employment={new_employment} />
            <MainRecWeek Recommendation_week={Recommendation_week} />
          </MainContainer>
        </MainWrap>
      </LayoutUser>
    </>
  );
};

Main.getInitialProps = async () => {
  const [slideData, mainData] = await Promise.all([
    axios(`${MYIP}/static/data/mainsilder.json`),
    axios(`${MYIP}/static/data/mainlist.json`),
  ]);
  return {
    slideData: slideData.data.items,
    position_recommend: mainData.data.position_recommend,
    new_employment: mainData.data.new_employment,
    theme_list: mainData.data.theme_list,
    Recommendation_week: mainData.data.Recommendation_week,
  };
};

export default Main;

const MainWrap = styled.div`
  padding: 50px 0;
`;

const MainContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
`;
