import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { matchupSmall } from "../../config";

const MatchUpSlide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const scroll = useRef(false);

  useEffect(() => {
    if (scroll) {
      scroll.current.scrollLeft = slideIndex * window.innerWidth;
    }
  }, [slideIndex]);

  return (
    <MatchUpSlideWrap>
      <Content>
        <h2>인사담당자들이 검증한 인재 검색 서비스</h2>
        <h4>지금도 인사담당자들의 적극적인 면접 제안이 이루어지고 있습니다</h4>
      </Content>
      <SlideWrap ref={scroll}>
        <SlideItem>
          <Bubble>
            수동적으로 이력서를 기다리는 것 보다 저희와 fit한 인재를 직접 찾아
            볼 수 있다는 것이 가장 마음에 들었어요.
          </Bubble>
          <BubbleTail />
          <Recruiter>대기업 N사, 채용담당자</Recruiter>
          <Stars url="https://static.wanted.co.kr/images/matchup/intro/review_01.png" />
        </SlideItem>
        <SlideItem mid>
          <Bubble>
            6개월 동안 채용하지 못한 개발자를 1개월 만에 매치업 면접 제안을 통해
            찾을 수 있었어요.
          </Bubble>
          <BubbleTail />
          <Recruiter>외국계기업 A사, 리크루터</Recruiter>
          <Stars url="https://static.wanted.co.kr/images/matchup/intro/review_02.png" />
        </SlideItem>
        <SlideItem>
          <Bubble>
            현재 구직의사가 있는지 먼저 확인한 후에 면접 제안을 보낼 수 있어서
            편리했어요.
          </Bubble>
          <BubbleTail />
          <Recruiter>스타트업 C사, 인사담당자</Recruiter>
          <Stars url="https://static.wanted.co.kr/images/matchup/intro/review_03.png" />
        </SlideItem>
      </SlideWrap>
      <MobileSliceBtns>
        <MobileSliceBtn
          onClick={() => setSlideIndex(0)}
          style={{
            width: slideIndex === 0 && "65px",
            backgroundColor: slideIndex === 0 && "rgb(58,104,249)",
          }}
        />
        <MobileSliceBtn
          onClick={() => setSlideIndex(1)}
          style={{
            width: slideIndex === 1 ? "65px" : "14px",
            backgroundColor: slideIndex === 1 && "rgb(58,104,249)",
          }}
        />
        <MobileSliceBtn
          onClick={() => setSlideIndex(2)}
          style={{
            width: slideIndex === 2 ? "65px" : "14px",
            backgroundColor: slideIndex === 2 && "rgb(58,104,249)",
          }}
        />
      </MobileSliceBtns>
    </MatchUpSlideWrap>
  );
};

export default MatchUpSlide;

const MatchUpSlideWrap = styled.div`
  text-align: center;
  overflow: hidden;
  height: 640px;
  background-image: linear-gradient(0deg, #fff, #f6f6f6);
`;

const Content = styled.div`
  padding-top: 80px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
  }

  h4 {
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.5;
  }
`;

const SlideWrap = styled.div`
  margin-top: 60px;
  padding: 0 2%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${matchupSmall}) {
    all: unset;
    width: 100vw;
    display: flex;
    overflow-x: hidden;
    margin-top: 40px;
    scroll-behavior: smooth;
  }
`;

const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 340px;
  min-width: 244px;
  margin: ${({ mid }) => mid && "0px 20px"};

  @media only screen and (max-width: ${matchupSmall}) {
    width: 100vw;
    flex: 0 0 auto;
    align-items: center;
    margin: 0;
  }
`;

const Bubble = styled.div`
  flex-grow: 1;
  max-height: 250px;
  border-radius: 10px;
  padding: 50px 30px;
  font-size: 16px;
  background-color: #fff;
  line-height: 1.88;
  text-align: left;
  @media only screen and (max-width: ${matchupSmall}) {
    width: 300px;
  }
`;

const BubbleTail = styled.div`
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #fff;
`;

const Recruiter = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
`;

const Stars = styled.div`
  margin-top: 20px;
  height: 15px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
  background-image: url(${({ url }) => url});
  @media only screen and (max-width: ${matchupSmall}) {
    width: 250px;
  }
`;

const MobileSliceBtns = styled.div`
  width: 145px;
  display: flex;
  justify-content: space-around;
  margin: 66px auto 30px;
  cursor: pointer;
`;

const MobileSliceBtn = styled.div`
  display: none;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: rgb(209, 209, 209);
  @media only screen and (max-width: ${matchupSmall}) {
    display: unset;
  }
`;
