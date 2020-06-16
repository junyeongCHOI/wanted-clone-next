import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import Link from "next/link";
import LayoutCompany from "../../components/LayoutCompany";
import Head from "next/head";
import axios from "axios";
import { Purchased } from "../../config";
import moment from "moment-timezone";
import Adhome from "../../components/Dashboard/adhome";
import Topad from "../../components/Dashboard/Topad";

const ad = ({ week1, week2, week3, week4, router }) => {
  useEffect(() => {
    if (!router.query.match) {
      Router.push("/dashboard/ad?match=home");
    }
    if (router.query.pg_token) {
      const token = localStorage.getItem("token");
      (async () => {
        const res = await axios.post(
          Purchased,
          {
            pg_token: router.query.pg_token,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (res.data.is_Paid) {
          alert("결제 완료");
        } else {
          alert("결제 실패");
        }
      })();
    }
  }, [router.query]);

  const matchId = {
    home: <Adhome />,
    ad: <Topad week1={week1} week2={week2} week3={week3} week4={week4} />,
  };

  const { match } = router.query;
  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany loggedin>
        <AdWrap>
          <AdContainer>
            <MenuSide>
              <Link href="/dashboard/ad?match=home">
                <a>
                  <MenuItem isOn={match === "home"}>채용 광고 홈</MenuItem>
                </a>
              </Link>
              <Link href="/dashboard/ad?match=ad">
                <a>
                  <MenuItem isOn={match === "ad"}>직무 상단 광고</MenuItem>
                </a>
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSenBmA6WeeZB76H754ujqT3h51F7PhhKAA3lIHK8QX97B7oPg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MenuItem>네트워크 광고</MenuItem>
              </a>
            </MenuSide>
            <ContextSide>{matchId[match]}</ContextSide>
          </AdContainer>
        </AdWrap>
      </LayoutCompany>
    </>
  );
};

ad.getInitialProps = () => {
  moment.tz.setDefault("Asia/Seoul");
  moment.locale("en", {
    week: {
      dow: 1,
    },
  });
  const week1 = [
    moment().weekday(7).format("YYYY-MM-DD"),
    moment().weekday(13).format("YYYY-MM-DD"),
  ];
  const week2 = [
    moment().weekday(14).format("YYYY-MM-DD"),
    moment().weekday(20).format("YYYY-MM-DD"),
  ];
  const week3 = [
    moment().weekday(21).format("YYYY-MM-DD"),
    moment().weekday(27).format("YYYY-MM-DD"),
  ];
  const week4 = [
    moment().weekday(28).format("YYYY-MM-DD"),
    moment().weekday(34).format("YYYY-MM-DD"),
  ];

  return {
    week1,
    week2,
    week3,
    week4,
  };
};

export default withRouter(ad);

const AdWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(244, 244, 244);
  padding-top: 100px;
`;

const AdContainer = styled.div`
  padding-top: 50px;
  width: 87.73%;
  max-width: 1060px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
`;

const MenuSide = styled.div`
  width: 250px;
  padding: 0 0 30px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: rgb(51, 102, 255);
    margin-bottom: 18px;
  }
`;

const ContextSide = styled.div`
  width: calc(100% - 260px);
  margin-left: 20px;
`;

const MenuItem = styled.div`
  display: block;
  color: ${({ isOn }) => (isOn ? "#36f" : "rgb(17, 17, 17)")};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin: 20px 0;
`;
