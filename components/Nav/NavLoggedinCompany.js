import React from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import Link from "next/link";

const NavLoggedinCompany = ({ router }) => {
  return (
    <NavLoggedinCompanyWrap>
      <NavContainer>
        <Link href="/dashboard/applications">
          <a>
            <MenuItem isOn={router.pathname === "/dashboard/applications"}>
              지원자
            </MenuItem>
          </a>
        </Link>
        <Link href="/dashboard/matchup">
          <a>
            <MenuItem isOn={router.pathname === "/dashboard/matchup"}>
              매치업
              <Tag>N</Tag>
            </MenuItem>
          </a>
        </Link>
        <Link href="/dashboard/position">
          <a>
            <MenuItem
              isOn={
                router.pathname === "/dashboard/position" ||
                router.pathname === "/dashboard/positionCreate"
              }
            >
              포지션
            </MenuItem>
          </a>
        </Link>
        <MenuItem isOn={router.pathname === "/dashboard/ad"}>
          채용 광고
          <Tag sale>SALE</Tag>
        </MenuItem>
        <Link href="/dashboard/modifycompany">
          <a>
            <MenuItem isOn={router.pathname === "/dashboard/modifycompany"}>
              회사정보
            </MenuItem>
          </a>
        </Link>
      </NavContainer>
    </NavLoggedinCompanyWrap>
  );
};

export default withRouter(NavLoggedinCompany);

const NavLoggedinCompanyWrap = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 50px;
  background-color: #1c1c1c;
  z-index: 600;
`;

const NavContainer = styled.div`
  width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 17px 20px;
  font-size: 16px;
  color: ${({ isOn }) => (isOn ? "rgb(255, 255, 255)" : "rgb(181,181,181)")};
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ isOn }) => isOn && "inset 0 -2px rgb(255, 255, 255)"};
  &:hover {
    box-shadow: inset 0 -2px rgb(255, 255, 255);
  }
`;

const Tag = styled.div`
  display: inline-block;
  font-size: 10px;
  line-height: 1;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 2px;
  padding: 1px 3px 2px;
  color: rgb(255, 255, 255);
  background: ${({ sale }) =>
    sale ? "rgb(255, 52, 112)" : "rgb(253, 181, 43)"};
`;
