import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import SliderBtn from "./SliderBtn";

const MainSliderInfo = ({ item }) => {
  return (
    <MainSliderItemWrap>
      <h2>
        {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
      </h2>
      <h4>
        {item.subTitle.length > 50
          ? item.subTitle.slice(0, 50) + "..."
          : item.subTitle}
      </h4>
      <ItemLine />
      <GoItemBtn>
        바로가기 <i className="xi-angle-right-min" />
      </GoItemBtn>
    </MainSliderItemWrap>
  );
};

const MainSlider = ({ data }) => {
  const [isShow, setIsShow] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SliderBtn position="right" />,
    prevArrow: <SliderBtn position="left" />,
    beforeChange: () => setIsShow(false),
    afterChange: (current) => {
      setIsShow(true);
      setActiveSlide(current);
    },
  };

  return (
    <MainSliderWrap>
      <Slider {...slideSettings}>
        {data.map((item) => (
          <SlideItem key={item.id} url={item.img} />
        ))}
      </Slider>
      {isShow && <MainSliderInfo item={data[activeSlide]} />}
    </MainSliderWrap>
  );
};

export default MainSlider;

const MainSliderWrap = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  background: #f2f2f2;
`;

const SlideItem = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url(${({ url }) => url});
  background-position: 50%;
  background-size: cover;
`;

const ItemShowing = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}
`;

const MainSliderItemWrap = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc((100% - 1060px) / 2);
  width: 340px;
  height: auto;
  border-radius: 3px;
  background: #fff;
  padding: 20px 30px 14px;
  animation: ${ItemShowing} 0.4s linear;
  padding: 20px 30px 14px;

  h2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: normal;
    word-break: keep-all;
    text-align: left;
    color: #333;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    word-break: keep-all;
    text-align: left;
    color: #666;
    margin-bottom: 20px;
    overflow: hidden;
    max-height: 42px;
  }
`;

const ItemLine = styled.div`
  height: 1px;
  margin: 0 -30px 14px;
  background-color: #eee;
`;

const GoItemBtn = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #258bf7;
  width: 100%;
  cursor: pointer;
  padding: 5px 0;
  display: flex;
  align-items: center;

  i {
    font-size: 18px;
    margin-left: 5px;
  }
`;
