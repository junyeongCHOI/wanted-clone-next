import React from "react";
import styled from "styled-components";

const SliderBtn = ({ onClick, position }) => {
  return (
    <SliderBtnWrap position={position} onClick={onClick}>
      <i className={`xi-angle-${position === "left" ? "left" : "right"}-min`} />
    </SliderBtnWrap>
  );
};

export default SliderBtn;

const SliderBtnWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
  position: absolute;
  bottom: 25px;
  right: ${({ position }) =>
    position === "left"
      ? "calc((100% - 1060px) / 2 + 52px)"
      : "calc((100% - 1060px) / 2)"};
  z-index: 100;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  i {
    font-size: 20px;
    color: #333;
    line-height: 42px;
  }
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
`;
