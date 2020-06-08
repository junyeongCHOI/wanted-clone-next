import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

const ApplicationsNav = ({ router }) => {
  return (
    <ApplicationsNavWrap>
      <Link href="/applications?match=apply">
        <a style={{ display: "block" }}>
          <NavMenuItem isActive={router.query.match === "apply"}>
            지원 현황
          </NavMenuItem>
        </a>
      </Link>
      <Link href="/applications?match=bookmark">
        <a style={{ display: "block" }}>
          <NavMenuItem isActive={router.query.match === "bookmark"}>
            북마크
          </NavMenuItem>
        </a>
      </Link>
    </ApplicationsNavWrap>
  );
};

export default withRouter(ApplicationsNav);

const ApplicationsNavWrap = styled.div`
  padding: 90px 0 40px;
  display: felx;
  justify-content: center;
  background-color: #f8f8fa;
`;

const NavMenuItem = styled.div`
  margin: 0 6px;
  color: ${({ isActive }) => (isActive ? "#333;" : "#999")};
  background-color: ${({ isActive }) => (isActive ? "#fff" : "")};
  border-radius: ${({ isActive }) => (isActive ? "1000px" : "")};
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  height: 40px;
  padding: 0 30px;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #fff;
    border-radius: 1000px;
  }
`;
