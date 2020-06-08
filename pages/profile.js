import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import LayoutUser from "../components/LayoutUser";
import ProfileNavMenu from "../components/Profile/ProfileNavMenu";
import ModifyUserInfo from "../components/Profile/ModifyUserInfo";
import ProfileResume from "../components/Profile/ProfileResume";
import ProfileSpecialty from "../components/Profile/ProfileSpecialty";

const matchedComponent = {
  profile: <ProfileResume />,
  modify: <ModifyUserInfo />,
  specialty: <ProfileSpecialty />,
};

const Profile = ({ router }) => {
  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    setUserImg(
      "https://lh3.googleusercontent.com/a-/AOh14GhSRRCqTFvxUCuImCg26qjZur0TW9YFY83Pi0PwVg=s96-c"
    );
  }, []);

  return (
    <>
      <Head>
        <title>MatchUp, 이제 지원하지 말고 제안 받으세요!</title>
      </Head>
      <LayoutUser footer={false}>
        <ProfileWrap>
          <ProfileNavMenu />
          <ProfileContainer>
            <UserSide>
              <UserImage style={{ backgroundImage: `url(${userImg})` }}>
                <UserImageBtn>
                  <i className="xi-camera" />
                </UserImageBtn>
              </UserImage>
              <AsideMe>
                <h2>최준영</h2>
                <p>asxd153@gmail.com</p>
                <p>010-3434-0875</p>
              </AsideMe>
              <Link href="/profile?match=modify">
                <a>
                  <ModifyBtn>기본정보 수정</ModifyBtn>
                </a>
              </Link>
              <UserSideBottomItem>
                <h3>원해요</h3>
                <p>0</p>
              </UserSideBottomItem>
              <UserSideBottomItem>
                <h3>열람/요청</h3>
                <p>0</p>
              </UserSideBottomItem>
              <UserSideBottomItem>
                <h3>받은 요청</h3>
                <p>0</p>
              </UserSideBottomItem>
            </UserSide>
            <ProfileInfoSide>
              {matchedComponent[router.query.match]}
            </ProfileInfoSide>
          </ProfileContainer>
        </ProfileWrap>
      </LayoutUser>
    </>
  );
};

export default withRouter(Profile);

const ProfileWrap = styled.div`
  min-height: 100vh;
  background-color: #f8f8fa;
`;

const ProfileContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: felx;
`;

const UserSide = styled.aside`
  width: 250px;
  height: 500px;
  padding: 42px 20px 41px;
  border: 1px solid #e1e2e3;
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.div`
  position: relative;
  width: 77px;
  height: 77px;
  border-radius: 50%;
`;

const UserImageBtn = styled.div`
  position: absolute;
  right: -5px;
  bottom: -5px;
  padding: 8px 9px;
  font-size: 16px;
  color: #999;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const AsideMe = styled.div`
  padding: 20px 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.07;
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const ModifyBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #e1e2e3;
  margin: 30px auto 10px;
  font-size: 16px;
  line-height: 0.94;
  color: #333;
  cursor: pointer;
`;

const UserSideBottomItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 23px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.06;
  width: 100%;
  color: #333333;
  h3 {
    word-break: break-word;
    line-height: 22px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const ProfileInfoSide = styled.section`
  width: calc(100% - 250px);
  margin-left: 20px;
`;
