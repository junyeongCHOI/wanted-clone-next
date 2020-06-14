import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";
import { navSmall } from "../../config";
import NavMenu from "./NavMenu";
import UserSide from "./UserSide";
import Filter from "./Filter";

const menuMock = [
  { title: "탐색", link: "/WdList" },
  { title: "이력서", link: "/Resume" },
  { title: "매치업", link: "/MatchUp" },
];

const Nav = ({ router }) => {
  const [isFilterOn, setFilterOn] = useState(false);

  console.log(router.asPath);

  return (
    <>
      <NavWrap>
        <NavContainer>
          <Link href="/">
            <a>
              <Logo>wanted</Logo>
            </a>
          </Link>
          <NavMenuWrap>
            <HomeMenu>
              <Link href="/">
                <a>
                  <NavMenu title="홈" />
                </a>
              </Link>
              <Link key={menuMock[0].title} href={menuMock[0].link}>
                <a>
                  <NavMenu
                    title={menuMock[0].title}
                    isOn={router.asPath === menuMock[0].link ? true : false}
                  />
                </a>
              </Link>
            </HomeMenu>
            <Link href="/WdList">
              <a onMouseOver={() => setFilterOn(true)}>
                <NavMenu title="탐색" isOn={router.pathname === "/WdList"} />
              </a>
            </Link>
            <Link href="/Resume">
              <a>
                <NavMenu
                  title="이력서"
                  isOn={
                    router.pathname === "/Resume" ||
                    router.pathname === "/CvList" ||
                    router.pathname === "/CvWrite"
                  }
                />
              </a>
            </Link>
            <Link href="/MatchUp">
              <a>
                <NavMenu
                  title="매치업"
                  isOn={router.asPath === "/MatchUp" ? true : false}
                />
              </a>
            </Link>
          </NavMenuWrap>
          <UserSide setFilterOn={setFilterOn} />
        </NavContainer>
      </NavWrap>
      <Filter isFilterOn={isFilterOn} setFilterOn={setFilterOn} />
    </>
  );
};

export default withRouter(Nav);

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  width: 90%;
  max-width: 1060px;
  min-width: 400px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${navSmall}) {
    width: 100vw;
    a {
      display: none;
    }
  }
`;

const Logo = styled.div`
  font-size: 23px;
  color: rgb(0, 0, 0);
  font-weight: 900;
  cursor: pointer;
  @media only screen and (max-width: ${navSmall}) {
    display: none;
  }
`;

const NavMenuWrap = styled.div`
  display: flex;
`;

const HomeMenu = styled.div`
  display: none;
  @media only screen and (max-width: ${navSmall}) {
    display: flex;
    a {
      display: flex;
    }
  }
`;
