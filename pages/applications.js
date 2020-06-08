import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import LayoutUser from "../components/LayoutUser";
import ApplicationsNav from "../components/Applications/ApplicationsNav";
import ApplicationsApply from "../components/Applications/ApplicationsApply";
import Bookmarks from "../components/Applications/Bookmarks";

const matchedComponent = {
  apply: <ApplicationsApply />,
  bookmark: <Bookmarks />,
};

const applications = ({ router }) => {
  return (
    <>
      <Head>
        <title>MatchUp, 이제 지원하지 말고 제안 받으세요!</title>
      </Head>
      <LayoutUser footer={false}>
        <ApplicationsWrap>
          <ApplicationsNav />
          <ApplicationsContainer>
            {matchedComponent[router.query.match]}
          </ApplicationsContainer>
        </ApplicationsWrap>
      </LayoutUser>
    </>
  );
};

export default withRouter(applications);

const ApplicationsWrap = styled.div`
  min-height: 100vh;
  background-color: #f8f8fa;
`;

const ApplicationsContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: felx;
`;
