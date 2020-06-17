import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Router, { withRouter } from "next/router";
import Head from "next/head";
import LayoutUser from "../components/LayoutUser";
import WdCards from "../components/WdList/WdCards";
import WdPremiumCards from "../components/WdList/WdPremiumCards";
import FilterBox from "../components/WdList/FilterBox";
import { MYIP, WdListAPI, positionadlist } from "../config";

const LIMIT = 20;
const ItemHeight = 1800;
let time = 0;

const WdList = ({ data, PData, router }) => {
  const [listData, setListData] = useState([...data]);
  const [loadAble, setLoadAble] = useState(true);
  const [loadTimes, setloadTimes] = useState(0);

  const scrollCheck = (e) => {
    if (time === 0) {
      if (e.target.scrollingElement.scrollTop > 1400) {
        setloadTimes((prev) => prev + 1);
        time++;
      }
    } else {
      if (e.target.scrollingElement.scrollTop > 1400 + time * ItemHeight) {
        setloadTimes((prev) => prev + 1);
        time++;
      }
    }
  };

  const getData = async () => {
    if (loadAble) {
      const res = await axios.get(
        `${WdListAPI}?sort_by=${router.query.sort_by}&year=${
          router.query.year
        }&country=${router.query.country}&city=${router.query.city}&keyword=${
          router.query.keyword
        }&offset=${loadTimes * 20}&limit=${LIMIT}`
      );
      setListData([...listData, ...res.data.position]);
      if (res.data.position.length < 20 || !res.data.position.length) {
        setLoadAble(false);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (loadTimes === 0) {
      return;
    } else {
      getData();
    }
  }, [loadTimes]);

  useEffect(() => {
    if (
      !router.query.sort_by ||
      !router.query.year ||
      !router.query.country ||
      !router.query.city
    ) {
      Router.push(
        "/WdList?sort_by=latest&year=-1&country=all&city=all&keyword="
      );
      return;
    }
    (async () => {
      setloadTimes(0);
      time = 0;
      window.scrollTo(0, 0);
      setListData([]);
      const res = await axios.get(
        `${WdListAPI}?sort_by=${router.query.sort_by}&year=${router.query.year}&country=${router.query.country}&city=${router.query.city}&keyword=${router.query.keyword}`
      );
      setListData(res.data.position);
    })();
  }, [
    router.query.sort_by,
    router.query.year,
    router.query.country,
    router.query.city,
    router.query.keyword,
  ]);

  useEffect(() => {
    document.addEventListener("scroll", scrollCheck);
    return () => document.removeEventListener("scroll", scrollCheck);
  }, []);

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
            <FilterBox query={router.query} />
          </WantedPosition>
          <WdCards data={listData} />
        </WdListWrap>
      </LayoutUser>
    </>
  );
};

WdList.getInitialProps = async () => {
  const [res, PRes] = await Promise.all([
    axios.get(`${WdListAPI}`),
    axios.get(positionadlist),
  ]);
  return { data: res.data.position, PData: PRes.data.advertisement };
};

export default withRouter(WdList);

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
