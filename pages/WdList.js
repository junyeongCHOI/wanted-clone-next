import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";
import LayoutUser from "../components/LayoutUser";
import WdCards from "../components/WdList/WdCards";
import WdPremiumCards from "../components/WdList/WdPremiumCards";
import FilterBox from "../components/WdList/FilterBox";

const WdList = ({ data, PData }) => {
  return (
    <>
      <Head>
        <title>채용 | 인사</title>
      </Head>
      <LayoutUser footer={false}>
        <WdListWrap>
          <WantedPosition>
            지금 이 시간, <span>꼭 봐야할 공고</span>에요!
            <WdPremiumCards items={PData} />
            <FilterBox />
          </WantedPosition>
          <WdCards data={data} />
        </WdListWrap>
      </LayoutUser>
    </>
  );
};

WdList.getInitialProps = async () => {
  const [res, PRes] = await Promise.all([
    axios("http://localhost:3000/static/data/wdlistitems.json"),
    axios("http://localhost:3000/static/data/wdpremiumcards.json"),
  ]);
  return { data: res.data.items, PData: PRes.data.items };
};

export default WdList;

const WdListWrap = styled.div`
  width: 90vw;
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 50px;
`;

const WantedPosition = styled.div`
  margin: 30px 0 15px;
  font-size: 22px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  span {
    color: rgb(58, 104, 249);
  }
`;
