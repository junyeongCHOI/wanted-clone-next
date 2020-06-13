import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";
import Router, { withRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import LayoutCompany from "../../components/LayoutCompany";

const Position = ({ router }) => {
  const [list, setList] = useState([]);

  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany loggedin>
        <PositionWrap>
          <PositionContainer>
            <Top>
              <All>전체</All>
              <Link href="/dashboard/positionCreate">
                <a>
                  <AddPosition>포지션 추가</AddPosition>
                </a>
              </Link>
            </Top>
            {list.length === 0 ? (
              <NoResult>등록된 포지션이 없습니다.</NoResult>
            ) : (
              ""
            )}
          </PositionContainer>
        </PositionWrap>
      </LayoutCompany>
    </>
  );
};

export default withRouter(Position);

const PositionWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
`;

const PositionContainer = styled.div`
  padding-top: 150px;
  width: 87.73%;
  max-width: 1060px;
  margin: 0 auto;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;

const All = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: rgb(51, 51, 51);
  background-color: rgb(225, 226, 227);
  border-radius: 9999px;
  padding: 11px 15px;
`;

const AddPosition = styled.div`
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  padding: 11px 15px;
`;

const NoResult = styled.div`
  background-color: rgb(244, 244, 244);
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 3px;
  line-height: 1.4;
  text-align: center;
  color: rgb(117, 117, 117);
  font-size: 18px;
  font-weight: 600;
`;
