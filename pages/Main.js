import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import { MYIP, MainALData } from "../config";
import LayoutUser from "../components/LayoutUser";
import MainSlider from "../components/Main/MainSlider";
import MainResumeGo from "../components/Main/MainResumeGo";
import MainFitList from "../components/Main/MainFitList";
import MainThemeList from "../components/Main/MainThemeList";
import MainNewList from "../components/Main/MainNewList";
import MainRecWeek from "../components/Main/MainRecWeek";
import Loading from "../components/Loading";

const Main = () => {
  const [mainData, setMainData] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(MainALData, {
        headers: {
          Authorization: token,
        },
      });
      const slideData = await axios.get(`${MYIP}/static/data/mainslider.json`);
      setMainData({ ...slideData.data, ...res.data });
    })();
  }, []);

  if (!mainData) {
    return (
      <>
        <Head>
          <title>원티드 - 지인 추천하고 보상금 받기</title>
        </Head>
        <LayoutUser>
          <Loading />
        </LayoutUser>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>원티드 - 지인 추천하고 보상금 받기</title>
      </Head>
      <LayoutUser>
        <MainWrap>
          <MainSlider data={mainData.items} />
          <MainResumeGo />
          <MainContainer>
            {mainData.position_recommend.length === 0 || (
              <MainFitList position_recommend={mainData.position_recommend} />
            )}
          </MainContainer>
          <MainThemeList theme_list={mainData.theme_list} />
          <MainContainer>
            <MainNewList new_employment={mainData.new_employment} />
            <MainRecWeek Recommendation_week={mainData.Recommendation_week} />
          </MainContainer>
        </MainWrap>
      </LayoutUser>
    </>
  );
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
