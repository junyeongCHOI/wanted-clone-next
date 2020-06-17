import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { themedata } from "../config";
import LayoutUser from "../components/LayoutUser";
import Loading from "../components/Loading";
import WdCards from "../components/WdList/WdCards";

const Theme = ({ router }) => {
  const [data, setData] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(themedata);
      //   const res = await axios.get(`${themedata}/${router.query.id}?offset=0&limit=40`);
      setData(res.data.theme_top);
      setListData(res.data.theme_list);
    })();
  }, []);

  if (!data) {
    return (
      <>
        <Head>
          <title>테마별로 포지션을 찾아보세요!</title>
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
        <title>테마별로 포지션을 찾아보세요!</title>
      </Head>
      <LayoutUser>
        <ThemeWrap>
          <TopImg
            style={{ backgroundImage: `url(${data.theme_inner_image})` }}
          />
          <ThemeContainer>
            <h2>{data.theme_title}</h2>
            <h3>{data.theme_inner_description}</h3>
            <WdCards data={listData} />
          </ThemeContainer>
        </ThemeWrap>
      </LayoutUser>
    </>
  );
};

export default withRouter(Theme);

const ThemeWrap = styled.div`
  padding: 50px 0;
`;

const TopImg = styled.div`
  height: 300px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const ThemeContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
  padding: 50px;

  h2 {
    margin-bottom: 28px;
    line-height: 1.25;
    font-size: 36px;
    font-weight: 600;
    color: #333;
    word-wrap: break-word;
    word-break: keep-all;
  }

  h3 {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.64;
    letter-spacing: normal;
    color: #999;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: pre-line;
    margin-bottom: 100px;
  }
`;
