import React from "react";
import styled from "styled-components";
import { resumeSmall } from "../../config";

const ResumeTop = ({ checkToken }) => {
  return (
    <ResumeTopWrap>
      <Container>
        <h1>이력서 양식, 그 이상</h1>
        <h2>
          채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를
          만들었습니다.
          <br />
          서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
        </h2>
      </Container>
      <ResumeBtns>
        <ResumeBtn white onClick={checkToken}>
          이력서 관리
        </ResumeBtn>
        <ResumeBtn onClick={checkToken}>새 이력서 작성</ResumeBtn>
      </ResumeBtns>
      <BackImgae />
      <Advantage>
        <AdvantageTitle>
          <h1>지원에 유리한</h1>
          <h2>
            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에
            맞춰서 제작하였습니다.
            <br />
            군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.
          </h2>
        </AdvantageTitle>
      </Advantage>
    </ResumeTopWrap>
  );
};

export default ResumeTop;

const ResumeTopWrap = styled.div`
  text-align: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 100px 0 20px;
  color: rgb(51, 51, 51);

  h1 {
    font-size: 56px;
    font-weight: 600;
    line-height: 1.1;
  }
  h2 {
    font-size: 18px;
    margin: 20px 0px 30px;
    line-height: 1.4;
  }

  @media only screen and (max-width: ${resumeSmall}) {
    width: 100%;
    padding: 70px 25px 0;

    h1 {
      font-size: 34px;
    }
    h2 {
      font-size: 15px;
    }
  }
`;

const BackImgae = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_01_en.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20%;
  @media only screen and (max-width: ${resumeSmall}) {
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/m_resume_01_en.png);
    margin-top: 24px;
    padding-bottom: 50%;
  }
`;

const ResumeBtns = styled.div`
  display: felx;
  justify-content: center;
  @media only screen and (max-width: ${resumeSmall}) {
    display: inline-flex;
    flex-direction: column-reverse;
  }
`;

const ResumeBtn = styled.div`
  margin: 0 5px;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ white }) => (white ? "rgb(58, 104, 249)" : "rgb(255, 255, 255)")};
  border-radius: 30px;
  background-color: ${({ white }) =>
    white ? "rgb(255, 255, 255)" : "rgb(58, 104, 249)"};
  border: 1px solid rgb(58, 104, 249);
  border-width: 1px;
  cursor: pointer;
  @media only screen and (max-width: ${resumeSmall}) {
    margin-bottom: 10px;
  }
`;

const Advantage = styled.div`
  text-align: center;
  color: rgb(255, 255, 255);
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_02.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20%;
  @media only screen and (max-width: ${resumeSmall}) {
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/m_resume_02.jpg);
    padding-bottom: 50%;
  }
`;

const AdvantageTitle = styled.div`
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
    margin-top: 20px;
    line-height: 1.4;
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
