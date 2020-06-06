import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

const ProfileNavMenu = () => {
  return (
    <ProfileNavMenuWrap>
      <NavMenuItem>프로필</NavMenuItem>
      <NavMenuItem>제안받기 현황</NavMenuItem>
    </ProfileNavMenuWrap>
  );
};

export default withRouter(ProfileNavMenu);

const ProfileNavMenuWrap = styled.div`
  padding: 90px 0 40px;
  display: felx;
  justify-content: center;
  background-color: #f8f8fa;
`;

const NavMenuItem = styled.div`
  margin: 0 6px;
  color: #999;
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
