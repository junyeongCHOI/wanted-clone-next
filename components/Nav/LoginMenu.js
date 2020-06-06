import React from "react";
import styled from "styled-components";
import Router from "next/router";

const LoginMenu = () => {
  const logout = () => {
    localStorage.removeItem("token");
    Router.push("/");
  };

  return (
    <LoginMenuWrap>
      <LoGinMenuItem>프로필</LoGinMenuItem>
      <LoGinMenuItem>제안받기 현황</LoGinMenuItem>
      <Line />
      <LoGinMenuItem>지원 현황</LoGinMenuItem>
      <LoGinMenuItem>북마크</LoGinMenuItem>
      <Logout onClick={logout}>로그아웃</Logout>
    </LoginMenuWrap>
  );
};

export default LoginMenu;

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

const Line = styled.div`
  width: 100;
  height: 1px;
  background-color: #e1e2e3;
  margin: 10px 0;
`;
