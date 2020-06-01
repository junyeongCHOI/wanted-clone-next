import React, { useState, useRef } from "react";
import styled from "styled-components";
import WdPremiumCard from "./WdPremiumCard";
import { seekSmall } from "../../config";

const WdPremiumCards = ({ items }) => {
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRight] = useState(true);
  const scroll = useRef(false);
  const itemWidth = useRef(false);

  const checkBtn = () => {
    if (scroll) {
      if (scroll.current.scrollLeft <= 0) {
        setLeftBtn(false);
      } else {
        setLeftBtn(true);
      }
      if (
        scroll.current.scrollLeft >=
        scroll.current.scrollWidth - scroll.current.offsetWidth
      ) {
        setRight(false);
      } else {
        setRight(true);
      }
    } else {
      setLeftBtn(false);
    }
  };

  const scrollLeft = () => {
    if (scroll && itemWidth) {
      scroll.current.scrollLeft -= itemWidth.current.offsetWidth;
      checkBtn();
    }
  };

  const scrollRight = () => {
    if (scroll && itemWidth) {
      scroll.current.scrollLeft += itemWidth.current.offsetWidth;
      checkBtn();
    }
  };

  return (
    <WdPremiumCardsWrap>
      <LeftBtn onClick={scrollLeft} style={{ display: leftBtn ? "" : "none" }}>
        <i className="xi-angle-left-min" />
      </LeftBtn>
      <SlideWrap ref={scroll}>
        {items.map((item) => (
          <WdPremiumCard key={item.item_id} item={item} widthRef={itemWidth} />
        ))}
      </SlideWrap>
      <RightBtn
        onClick={scrollRight}
        style={{ display: rightBtn ? "" : "none" }}
      >
        <i className="xi-angle-right-min" />
      </RightBtn>
    </WdPremiumCardsWrap>
  );
};

export default WdPremiumCards;

const WdPremiumCardsWrap = styled.div`
  margin: -10px;
  padding-top: 20px;
  position: relative;
`;

const SlideWrap = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  display: flex;
`;

const SlideButton = styled.div`
  position: absolute;
  z-index: 100;
  font-size: 22px;
  top: 50%;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 1px 2px -1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #258bf7;
    color: rgb(255, 255, 255);
  }

  @media only screen and (max-width: ${seekSmall}) {
    width: 30px;
    height: 30px;
  }
`;

const LeftBtn = styled(SlideButton)`
  left: -15px;
  @media only screen and (max-width: ${seekSmall}) {
    left: -8px;
  }
`;

const RightBtn = styled(SlideButton)`
  right: -15px;
  @media only screen and (max-width: ${seekSmall}) {
    right: -8px;
  }
`;
