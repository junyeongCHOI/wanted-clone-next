import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
import LayoutUser from "../components/LayoutUser";
import Loading from "../components/Loading";
import NewCard from "../components/CvList/NewCard";
import UploadCard from "../components/CvList/UploadCard";
import ResumeCard from "../components/CvList/ResumeCard";
import { MYIP } from "../config";

const CvList = () => {
  const [CvCardList, setCvCardList] = useState(false);

  const getData = async () => {
    const res = await axios(`${MYIP}/static/data/cvlist.json`);
    setCvCardList(res.data.cvlist);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/");
    } else {
      getData();
    }
  }, []);

  if (!CvCardList) {
    return (
      <>
        <Head>
          <title>원티드 - 지인 추천하고 보상금 받기</title>
        </Head>
        <LayoutUser footer={false}>
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
      <LayoutUser footer={false}>
        <CvListBg>
          <CvListWrap>
            <CvHeader>
              <h4>최근 문서</h4>
              <CvHeaderLeft>
                <h5>인사 이력서 소개</h5>
                <i className="xi-info-o" />
              </CvHeaderLeft>
            </CvHeader>
            <CardListsWrap>
              <NewCard />
              <UploadCard />
              {CvCardList.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </CardListsWrap>
          </CvListWrap>
        </CvListBg>
      </LayoutUser>
    </>
  );
};

export default CvList;

const CvListBg = styled.div`
  height: 100vh;
  background-color: #f8f8fa;
  overflow: auto;
`;

const CvListWrap = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  width: 87.72%;
  max-width: 1060px;
`;

const CvHeader = styled.header`
  display: felx;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    padding: 15px 0;
    color: #333;
  }
`;

const CvHeaderLeft = styled.div`
  display: felx;
  align-items: center;
  color: #258bf7;
  cursor: pointer;

  h5 {
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-top: 3px;
  }

  i {
    display: block;
    font-size: 21px;
  }
`;

const CardListsWrap = styled.div`
  margin: 0 -20px;
  width: calc(100% + 40px);
  display: flex;
  flex-wrap: wrap;
`;
