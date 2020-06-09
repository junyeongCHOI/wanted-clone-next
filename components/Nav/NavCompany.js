import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { connect } from "react-redux";
import { companyLoginModalOn, companyRegisterModalOn } from "../../actions";

const NavCompany = ({ companyLoginModalOn, companyRegisterModalOn }) => {
  const [userInfo, setUSerInfo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUSerInfo({
        name: "최준영",
        img:
          "https://lh3.googleusercontent.com/a-/AOh14GhSRRCqTFvxUCuImCg26qjZur0TW9YFY83Pi0PwVg=s96-c",
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    Router.push("/CompanyIntro");
  };

  return (
    <NavCompanyWrap>
      <NavContainer>
        <Logo>Wanted for Employers</Logo>
        <OptionsSide>
          {userInfo ? (
            <>
              <LoginedUser style={{ backgroundImage: `url(${userInfo.img})` }}>
                {showMenu && (
                  <LoginMenuWrap>
                    <Link prefetch href="/profile?match=profile">
                      <a>
                        <LoGinMenuItem>프로필</LoGinMenuItem>
                      </a>
                    </Link>
                    <Logout onClick={logout}>로그아웃</Logout>
                  </LoginMenuWrap>
                )}
              </LoginedUser>
              <UserName onClick={() => setShowMenu(!showMenu)}>
                {userInfo.name}
                <i className="xi-angle-down-min" />
              </UserName>
            </>
          ) : (
            <>
              <h2 onClick={companyLoginModalOn}>채용담당자 로그인</h2>
              <h2 onClick={companyRegisterModalOn}>관리자 가입</h2>
            </>
          )}
          <Link href="/">
            <a>
              <HomeBtn>원티드 홈</HomeBtn>
            </a>
          </Link>
        </OptionsSide>
      </NavContainer>
    </NavCompanyWrap>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    companyLoginModalOn: () => dispatch(companyLoginModalOn()),
    companyRegisterModalOn: () => dispatch(companyRegisterModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(NavCompany);

const NavCompanyWrap = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #1c1c1c;
  z-index: 1000;
`;

const NavContainer = styled.div`
  width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 14px;
  font-weight: 800;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #b2b2b2;
  }
`;

const OptionsSide = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;

  h2 {
    padding: 16px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: #b2b2b2;
    }
  }
`;

const HomeBtn = styled.div`
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 8px 15px;
  &:hover {
    color: #b2b2b2;
  }
`;

const LoginedUser = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const LoginMenuWrap = styled.div`
  position: absolute;
  padding-top: 10px;
  top: 41px;
  min-width: 170px;
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e2e3;
  background-color: #fff;
`;

const LoGinMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  font-weight: 400;
  font-size: 15px;
  color: #333;
  cursor: pointer;
`;

const Logout = styled(LoGinMenuItem)`
  padding: 17px 0;
  background-color: #f2f4f7;
  color: #767676;
  cursor: pointer;
`;

const UserName = styled.div`
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  height: 36px;
  padding: 14px 20px 14px 0;
`;
