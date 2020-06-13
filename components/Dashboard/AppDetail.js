import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

const AppDetail = () => {
  return (
    <AppDetaillWrap>
      <AppDetailHeader>
        <h2>지원자</h2>
        <HeaderContext>
          <VerLine />
          <HClogo>
            <h2>김</h2>
          </HClogo>
          <HCname>김OO</HCname>
          <MatchUp>매치업</MatchUp>
          <ApplyBtn>제안 보내기</ApplyBtn>
        </HeaderContext>
        <CreateDate>
          <h5>작성일 : </h5>
          <h6> 2020.06.01, 34:34</h6>
        </CreateDate>
      </AppDetailHeader>
      <ResumeWrap>
        <ResumeContainer></ResumeContainer>
      </ResumeWrap>
    </AppDetaillWrap>
  );
};

export default AppDetail;

const AppDetaillWrap = styled.div`
  width: 100%;
`;

const AppDetailHeader = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;
  border: 1px solid rgb(219, 219, 219);

  h2 {
    padding: 15px 20px;
    line-height: 1.4;
    color: rgb(117, 117, 117);
    font-size: 16px;
    font-weight: 600;
  }
`;

const HeaderContext = styled.div`
  position: relative;
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px;
  display: flex;
  align-items: center;
`;

const VerLine = styled.div`
  position: absolute;
  left: 0px;
  transform: translateY(-50%);
  top: 50%;
  height: 3rem;
  border-left: 3px solid rgb(37, 139, 247);
`;

const HClogo = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: rgb(217, 228, 241);
  border-radius: 50%;
  overflow: hidden;
  h2 {
    font-size: 26px;
    position: absolute;
    top: 52%;
    left: 52%;
    color: rgb(51, 51, 51);
    transform: translate(-50%, -50%);
  }
`;

const HCname = styled.div`
  line-height: 1.4;
  color: rgb(51, 51, 51);
  font-size: 26px;
  font-weight: 700;
  margin-left: 20px;
`;

const MatchUp = styled.div`
  color: rgb(153, 153, 153);
  border: 1px solid rgb(153, 153, 153);
  line-height: 1.4;
  font-size: 9px;
  margin: 0 10px 5px;
  vertical-align: middle;
  border-radius: 2px;
  padding: 3px 8px;
  background: rgb(255, 255, 255);
`;

const ApplyBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  padding: 14px 30px;
`;

const CreateDate = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px;
  line-height: 1.4;
  font-size: 16px;
  display: flex;

  h5 {
    color: #b5b5b5;
  }

  h6 {
    color: #333;
    padding-left: 10px;
  }
`;

const ResumeWrap = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 40px;
  border: 1px solid rgb(219, 219, 219);
`;

const ResumeContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 50px 30px;
`;
