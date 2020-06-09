import React from "react";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import LayoutCompany from "../../components/LayoutCompany";

const applications = () => {
  return (
    <LayoutCompany loggedin>
      <ApplicationsWrap>
        <ApplicationsContainer></ApplicationsContainer>
      </ApplicationsWrap>
    </LayoutCompany>
  );
};

export default applications;

const ApplicationsWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(244, 244, 244);
`;

const ApplicationsContainer = styled.div`
  padding-top: 150px;
  width: 87.73%;
  max-width: 1060px;
`;

const LeftSide = styled.div``;
