import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { userinfo } from "../../config";

const ModifyUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    country_id: null,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(`${userinfo}`, {
        headers: {
          Authorization: token,
        },
      });
      setUserInfo(res.data.data);
    })();
  }, []);

  return (
    <ModifyUserInfoWrap>
      <header>기본정보 수정</header>
      <PMTitle>
        지원 결과 또는 추천 포지션 정보를 받아볼 이메일/연락처 정보
        입력해주세요.
      </PMTitle>
      <ModifyInputWrap>
        <InputWrap>
          <InputTitle>이름</InputTitle>
          <ModifyInput />
        </InputWrap>
        <InputWrap>
          <InputTitle>이메일</InputTitle>
          <ModifyInput />
        </InputWrap>
        <InputWrap>
          <InputTitle>연락처</InputTitle>
          <PhoneNumBox>+82 South Korea</PhoneNumBox>
          <ModifyInput style={{ width: "calc(100% - 370px)" }} />
        </InputWrap>
      </ModifyInputWrap>
      <ModifyBtnWrap>
        <ModifyBtn>확인</ModifyBtn>
      </ModifyBtnWrap>
    </ModifyUserInfoWrap>
  );
};

export default ModifyUserInfo;

const ModifyUserInfoWrap = styled.div`
  padding: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 3px;
  background-color: #fff;

  header {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 20px;
  }
`;

const PMTitle = styled.h3`
  font-size: 16px;
  color: #999;
  padding: 10px 0;
`;

const ModifyInputWrap = styled.div`
  padding: 40px 0;
`;

const InputWrap = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const InputTitle = styled.div`
  width: 150px;
  color: #999;
  font-size: 16px;
  font-weight: 500;
`;

const ModifyInput = styled.input`
  width: calc(100% - 150px);
  padding: 12px 0;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  border-bottom: 1px solid #e1e2e3;
`;

const PhoneNumBox = styled.div`
  width: 200px;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
  border: 0;
  border-radius: 3px;
  background-color: #f8f8fa;
  margin-right: 20px;
`;

const ModifyBtnWrap = styled.div`
  display: felx;
  justify-content: end;
`;

const ModifyBtn = styled.div`
  width: 190px;
  height: 50px;
  border-radius: 3px;
  background-color: #258bf7;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
