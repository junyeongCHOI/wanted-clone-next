import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";
import { navSmall } from "../../config";
import NavMenu from "./NavMenu";
import UserSide from "./UserSide";

const menuMock = [
  { title: "탐색", link: "/Wdlist" },
  { title: "이력서", link: "/Resume" },
  { title: "매치업", link: "/matchup" },
];

const Nav = ({ router }) => {
  return (
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
          </HomeMenu>
          {menuMock.map((data) => (
            <Link key={data.title} href={data.link}>
              <a>
                <NavMenu
                  title={data.title}
                  isOn={router.asPath === data.link ? true : false}
                />
              </a>
            </Link>
          ))}
        </NavMenuWrap>
        <UserSide />
      </NavContainer>
    </NavWrap>
  );
};

export default withRouter(Nav);

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
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
    display: unset;
    a {
      display: unset;
    }
  }
`;
