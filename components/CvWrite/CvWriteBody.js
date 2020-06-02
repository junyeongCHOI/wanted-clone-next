import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  typingCvTitle,
  typingCvName,
  typingCvEmail,
  typingCvPhone,
  typingCvAbout,
} from "../../actions";
import CvWriteCareer from "./CvWriteCareer";

const CvWriteBody = ({
  titleVal,
  nameVal,
  emailVal,
  phoneVal,
  aboutVal,
  typingCvTitle,
  typingCvName,
  typingCvEmail,
  typingCvPhone,
  typingCvAbout,
}) => {
  return (
    <CvWriteBodyWrap>
      <TitleInput
        placeholder="이력서 제목(필수)"
        type="text"
        maxLength="100"
        value={titleVal}
        onChange={typingCvTitle}
      />
      <NameInput
        placeholder="이름(필수)"
        type="text"
        maxLength="100"
        value={nameVal}
        onChange={typingCvName}
      />
      <EmailInput
        placeholder="이메일(필수)"
        type="text"
        maxLength="120"
        value={emailVal}
        onChange={typingCvEmail}
      />
      <PhoneInput
        placeholder="연락처(필수) ex) 010-0000-0000"
        type="text"
        maxLength="200"
        value={phoneVal}
        onChange={typingCvPhone}
      />
      <CvWriteSubtitle>간단 소개글</CvWriteSubtitle>
      <CvWriteTextArea
        placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
        maxLength="3000"
        value={aboutVal}
        onChange={typingCvAbout}
      />
      <CvWriteSubtitle>경력</CvWriteSubtitle>
      <CvWriteCareer />
      <CvWriteSubtitle>학력</CvWriteSubtitle>
      <CvWriteSubtitle>수상 및 기타</CvWriteSubtitle>
      <CvWriteSubtitle>외국어</CvWriteSubtitle>
      <CvWriteSubtitle>링크</CvWriteSubtitle>
    </CvWriteBodyWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    titleVal: state.typedCv.title,
    nameVal: state.typedCv.name,
    emailVal: state.typedCv.email,
    phoneVal: state.typedCv.phone,
    aboutVal: state.typedCv.about,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    typingCvTitle: (e) => dispatch(typingCvTitle(e)),
    typingCvName: (e) => dispatch(typingCvName(e)),
    typingCvEmail: (e) => dispatch(typingCvEmail(e)),
    typingCvPhone: (e) => dispatch(typingCvPhone(e)),
    typingCvAbout: (e) => dispatch(typingCvAbout(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvWriteBody);

const CvWriteBodyWrap = styled.div``;

const CvWriteSubtitle = styled.div`
  padding: 60px 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #3b3d40;
  border-radius: 0;
  height: auto;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  &::placeholder {
    color: #f94460;
  }
`;

const TitleInput = styled(Input)`
  font-size: 36px;
  line-height: 36px;
  font-weight: 500;
  margin: 70px 0 50px;
`;

const NameInput = styled(Input)`
  font-size: 16px;
  margin-top: 20px;
`;

const EmailInput = styled(Input)`
  font-size: 16px;
  margin-top: 20px;
`;

const PhoneInput = styled(Input)`
  font-size: 16px;
  margin: 20px 0 30px;
`;

const CvWriteTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding-top: 3px;
  height: 440px;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 16px;
  margin-top: 30px;
  overflow: auto;
`;

export const AddMore = styled.div`
  width: 100%;
  padding: 30px 0;
  font-size: 18px;
  color: #176fd8;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
`;
