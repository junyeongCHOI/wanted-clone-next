import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ProfileResume = () => {
  return (
    <>
      <ProfileResumeWrap>
        <header>기본 이력서</header>
        <PRTitle>기본 이력서 선택</PRTitle>
        <SelectResume>
          <Han>한</Han>
          <span>최준영7</span>
          <i className="xi-caret-down-min" />
        </SelectResume>
        <SubInfoWrap>
          <ResumePen>
            <i className="xi-pen-o" />
          </ResumePen>
          <PRTitle>학교</PRTitle>
          <PRSubtitle>없음</PRSubtitle>
          <PRTitle>직장</PRTitle>
          <PRSubtitle>없음</PRSubtitle>
          <PRAbout>안녕하세요. 신입 프론트엔드 개발자입니다.</PRAbout>
        </SubInfoWrap>
      </ProfileResumeWrap>
      <ProfileResumeWrap style={{ marginTop: 10 }}>
        <header>전문분야 설정</header>
        <SubInfoWrap>
          <Link href="/profile?match=specialty">
            <a>
              <ResumePen>
                <i className="xi-pen-o" />
              </ResumePen>
            </a>
          </Link>
          <SubInfoInnerWrap>
            <PRTitle>직군</PRTitle>
            <PRSubtitle>개발</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>직무</PRTitle>
            <PRSubtitle>프론트엔드 개발자</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>경력</PRTitle>
            <PRSubtitle>신입</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>스킬</PRTitle>
            <PRSubtitle>ReactJS, JavaScript, HTML5, CSS3</PRSubtitle>
          </SubInfoInnerWrap>
        </SubInfoWrap>
      </ProfileResumeWrap>
    </>
  );
};

export default ProfileResume;

const ProfileResumeWrap = styled.div`
  padding: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 3px;
  background-color: #fff;

  header {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

const SubInfoWrap = styled.div`
  position: relative;
`;

const PRTitle = styled.h3`
  font-size: 16px;
  color: #999;
  padding: 10px 0;
`;

const ResumePen = styled.div`
  position: absolute;
  font-size: 24px;
  top: 0;
  right: 0;
  color: #258bf7;
  cursor: pointer;
  display: none;
  ${SubInfoWrap}:hover & {
    display: block;
  }
`;

const SelectResume = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;

  span {
    font-size: 16px;
    margin-top: 3px;
    font-weight: 600;
    color: #333;
  }

  i {
    font-size: 18px;
    color: #999;
    position: absolute;
    top: 50%;
    right: 20px;
    position: absolute;
    transform: translateY(-50%);
  }
`;

const Han = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px #999;
  color: #999;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const SubInfoInnerWrap = styled.div`
  margin-top: 30px;
`;

const PRSubtitle = styled.h4`
  font-size: 16px;
  color: #333;
  padding: 15px 0;
`;

const PRAbout = styled.h3`
  font-size: 14px;
  color: #999;
  padding: 20px 0 0;
`;
