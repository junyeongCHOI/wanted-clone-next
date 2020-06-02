import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { wdDetailSmall } from "../../config";

const WdDetailSlide = ({ detailImages }) => {
  const scroll = useRef(null);
  const [scrollIndex, setScrollIndexs] = useState(0);

  const leftScroll = () => {
    if (scrollIndex < 0) {
      return;
    }
    setScrollIndexs(scrollIndex - 1);
  };

  const rightScroll = () => {
    if (scrollIndex >= detailImages.length - 1) {
      setScrollIndexs(0);
    } else {
      setScrollIndexs(scrollIndex + 1);
    }
  };

  useEffect(() => {
    if (scroll) {
      scroll.current.scrollLeft = scroll.current.offsetWidth * scrollIndex;
    }
  }, [scrollIndex]);

  return (
    <WdDetailSlideWrap>
      <LeftBtn onClick={leftScroll}>
        <i className="xi-angle-left-min" />
      </LeftBtn>
      <ImageWrap ref={scroll}>
        {detailImages.map((url, idx) => (
          <ImageContainer
            key={idx}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </ImageWrap>
      <RightBtn onClick={rightScroll}>
        <i className="xi-angle-right-min" />
      </RightBtn>
    </WdDetailSlideWrap>
  );
};

export default WdDetailSlide;

const WdDetailSlideWrap = styled.div`
  width: 100%;
  padding-bottom: 70%;
  position: relative;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  scroll-behavior: smooth;
  border-radius: 3px;

  @media only screen and (max-width: ${wdDetailSmall}) {
    border-radius: 0px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 70%;
  flex: 0 0 auto;
  padding-bottom: 70%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #fbfbfb;
  background-size: cover;
`;

const SlideBtn = styled.div`
  width: 9%;
  height: 100%;
  opacity: 0.7;
  z-index: 100;
  position: absolute;
  font-size: 40px;
  color: #b5b5b5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBtn = styled(SlideBtn)`
  left: 0;
`;

const RightBtn = styled(SlideBtn)`
  right: 0;
`;
