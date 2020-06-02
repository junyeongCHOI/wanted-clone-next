import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginModalOn } from "../../actions";
import { navSmall } from "../../config";

const UserSide = ({ loginModalOn }) => {
  const [userImg, setuserImg] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setuserImg(
        "https://lh3.googleusercontent.com/a-/AOh14GhSRRCqTFvxUCuImCg26qjZur0TW9YFY83Pi0PwVg=s96-c"
      );
    }
  }, []);

  return (
    <>
      <UserSideWrap>
        <Search>
          <i className="xi-search" />
        </Search>
        <Line />
        {userImg ? (
          <UserImg style={{ backgroundImage: `url(${userImg})` }} />
        ) : (
          <RegNLogin onClick={loginModalOn}>회원가입/로그인</RegNLogin>
        )}
        <Service>기업 서비스</Service>
      </UserSideWrap>
      <SmallUserSideWrap>
        <Register>회원가입</Register>
        <i className="xi-bars" />
      </SmallUserSideWrap>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(UserSide);

const UserSideWrap = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${navSmall}) {
    display: none;
  }
`;

const Search = styled.div`
  padding: 0 10px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 1px;
  height: 14px;
  background-color: rgb(209, 209, 209);
  margin-right: 15px;
`;

const RegNLogin = styled.div`
  padding-right: 20px;
  cursor: pointer;
`;

const Service = styled.div`
  cursor: pointer;
`;

const SmallUserSideWrap = styled.div`
  display: none;
  @media only screen and (max-width: ${navSmall}) {
    display: felx;
    align-items: center;
    i {
      font-size: 18px;
      padding: 0px 10px;
      margin-right: 10px;
    }
  }
`;

const Register = styled.div`
  height: 34px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  border-radius: 3px;
  margin-right: 10px;
  line-height: 34px;
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;
