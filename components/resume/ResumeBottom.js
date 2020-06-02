import React from "react";
import styled from "styled-components";
import { resumeSmall } from "../../config";

const ResumeBottom = ({ checkToken }) => {
  return (
    <ResumeBottomWrap>
      <Career>
        <Content>
          <h1>본질에 집중한</h1>
          <h2>
            보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다.
            <br />
            불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI
            요소들을 제거하였습니다.
          </h2>
        </Content>
      </Career>
      <CareerImage />
      <Free>
        <Content>
          <h1>활용이 자유로운</h1>
          <h2>
            PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이
            쉽습니다.
            <br />
            가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는
            결과물을 얻을 수 있습니다.
          </h2>
        </Content>
        <ResumeBtns>
          <ResumeBottomBtn white>
            <a
              href="https://s3.ap-northeast-2.amazonaws.com/wanted-public/sample_resume_ko.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              샘플 다운로드
            </a>
          </ResumeBottomBtn>
          <ResumeBottomBtn onClick={checkToken}>새 이력서 작성</ResumeBottomBtn>
        </ResumeBtns>
      </Free>
    </ResumeBottomWrap>
  );
};

export default ResumeBottom;

const ResumeBottomWrap = styled.div`
  text-align: center;
`;

const Career = styled.div`
  color: rgb(51, 51, 51);
`;

const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 80px 0 55px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
  }
  h2 {
    font-size: 18px;
    line-height: 1.4;
    margin-top: 20px;
  }

  @media only screen and (max-width: ${resumeSmall}) {
    width: 100%;
    padding: 50px 25px 60px;

    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 15px;
    }
  }
`;

const CareerImage = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_03_ko.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20%;
  @media only screen and (max-width: ${resumeSmall}) {
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/m_resume_03_kr.jpg);
    padding-bottom: 50%;
  }
`;

const Free = styled.div`
  color: rgb(255, 255, 255);
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_04.jpg);
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20%;

  @media only screen and (max-width: ${resumeSmall}) {
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/m_resume_04.png);
    padding-bottom: 50%;
  }
`;

const ResumeBtns = styled.div`
  display: felx;
  justify-content: center;

  @media only screen and (max-width: ${resumeSmall}) {
    display: inline-flex;
    flex-direction: column-reverse;
    margin-top: -30px;
  }
`;

const ResumeBottomBtn = styled.div`
  margin: 0 5px;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ white }) => (white ? "rgb(58, 104, 249)" : "rgb(255, 255, 255)")};
  border-radius: 30px;
  background-color: ${({ white }) =>
    white ? "rgb(255, 255, 255)" : "rgb(58, 104, 249)"};
  border: 1px solid
    ${({ white }) => (white ? "rgb(255, 255, 255)" : "rgb(58, 104, 249)")};
  border-width: 1px;
  cursor: pointer;

  @media only screen and (max-width: ${resumeSmall}) {
    margin-bottom: 10px;
  }
`;
