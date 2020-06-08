import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import LayoutUser from "../components/LayoutUser";
import ProfileNavMenu from "../components/Profile/ProfileNavMenu";
import ProfileNoResult from "../components/Profile/ProfileNoResult";

const offer = () => {
  return (
    <>
      <Head>
        <title>MatchUp, 이제 지원하지 말고 제안 받으세요!</title>
      </Head>
      <LayoutUser footer={false}>
        <OfferWrap>
          <ProfileNavMenu />
          <OfferContainer>
            <OfferInfo>
              <h2>제안받기 현황</h2>
              <h3>나를 원하는 회사</h3>
              <OfferInfoItemWrap>
                전체<OfferInfoNumBox>0</OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap>
                원해요<OfferInfoNumBox>0</OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap>
                프로필 열람 요청<OfferInfoNumBox>0</OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap>
                받은 제안<OfferInfoNumBox>0</OfferInfoNumBox>
              </OfferInfoItemWrap>
            </OfferInfo>
            <OfferDetailSide>
              <OfferHeader>
                <h2>회사명</h2>
                <h3>일자</h3>
                <h4>상태</h4>
              </OfferHeader>
              <ProfileNoResult />
            </OfferDetailSide>
          </OfferContainer>
        </OfferWrap>
      </LayoutUser>
    </>
  );
};

export default offer;

const OfferWrap = styled.div`
  min-height: 100vh;
  background-color: #f8f8fa;
`;

const OfferContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: felx;
`;

const OfferInfo = styled.aside`
  width: 250px;
  height: 500px;

  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  h3 {
    padding-bottom: 17px;
    border-bottom: 1px solid #e1e2e3;
    margin-bottom: 30px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
`;

const OfferInfoItemWrap = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.42857143;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const OfferInfoNumBox = styled.div`
  min-width: 30px;
  height: 30px;
  padding: 4px 10px;
  border-radius: 3px;
  background-color: #e1e2e3;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;

const OfferDetailSide = styled.section`
  width: calc(100% - 250px);
  margin-left: 20px;
`;

const OfferHeader = styled.header`
  color: #999;
  font-size: 14px;
  display: felx;
  h2 {
    width: 57%;
    padding-left: 20px;
  }
  h3 {
    width: 22%;
  }
  h4 {
    padding-right: 20px;
  }
`;
