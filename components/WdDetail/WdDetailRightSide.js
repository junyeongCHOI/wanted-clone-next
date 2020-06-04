import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { wdDetailSmall } from "../../config";
import WdApply from "./WdApply";

const WdDetailRightSide = ({ reward, applyBtn, showApply }) => {
  const [isStop, setStop] = useState(false);
  const height = useRef(null);

  const scrollCheck = (e) => {
    if (!height) {
      return;
    }
    if (
      e.target.scrollingElement.scrollTop >=
      document.scrollingElement.offsetHeight -
        (height.current.offsetHeight + 1065)
    ) {
      setStop(true);
    } else {
      setStop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollCheck);
    return () => document.removeEventListener("scroll", scrollCheck);
  }, []);

  return (
    <WdDetailRightSideWrap isStop={isStop}>
      {!showApply && (
        <FrontWrap ref={height}>
          <RewardWrap>
            <h3>채용보상금</h3>
            <RewardContainer>
              <InnerBox>
                <h4>추천인</h4>
                <p>{reward.referrer}</p>
              </InnerBox>
              <InnerBox>
                <h4>지원자</h4>
                <p>{reward.volunteer}</p>
              </InnerBox>
            </RewardContainer>
          </RewardWrap>
          <ButtonWrap>
            <SubmitBtn onClick={applyBtn}>지원하기</SubmitBtn>
            <BookmarkBtn>
              <i className="xi-bookmark" />
            </BookmarkBtn>
          </ButtonWrap>
        </FrontWrap>
      )}
      {showApply && <WdApply applyBtn={applyBtn} hRef={height} />}
    </WdDetailRightSideWrap>
  );
};

export default WdDetailRightSide;

const WdDetailRightSideWrap = styled.div`
  width: 340px;
  position: ${({ isStop }) => (isStop ? "absolute" : "fixed")};
  top: ${({ isStop }) => (isStop ? "" : "70px")};
  right: ${({ isStop }) => (isStop ? "0px" : "calc((100% - 1060px)/2)")};
  bottom: ${({ isStop }) => (isStop ? "3px" : "")};
  background-color: #ffffff;

  @media (max-width: 1199px) and (min-width: 992px) {
    right: ${({ isStop }) => (isStop ? "0px" : "6.19%")};
  }

  @media only screen and (max-width: ${wdDetailSmall}) {
    display: none;
  }
`;

const FrontWrap = styled.div``;

const RewardWrap = styled.div`
  border-radius: 3px 3px 0 0;
  border: 1px solid #e1e2e3;
  padding: 20px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
  }
`;

const RewardContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InnerBox = styled.div`
  width: 50%;
  font-weight: 600;

  h4 {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
    color: #333;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const SubmitBtn = styled.div`
  width: calc(100% - 50px);
  padding: 18px 0px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 0 0 0 3px;
  border: 1px solid #e1e2e3;
  margin-top: -1px;
  color: #ffffff;
  background-color: rgba(37, 139, 247, 0.7);
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgb(37, 139, 247);
  }
`;

const BookmarkBtn = styled.div`
  width: 51px;
  padding: 12px 0px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  border-radius: 0 0 3px 0;
  border: 1px solid #e1e2e3;
  margin-left: -1px;
  margin-top: -1px;
  color: #ffffff;
  background-color: rgba(37, 139, 247, 0.7);
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgb(37, 139, 247);
  }
`;
