import React from "react";
import styled from "styled-components";

const MainThemItem = ({ item }) => {
  return (
    <MainThemItemWrap>
      <MTIImg url={item.image} />
      <h2>{item.title}</h2>
      <h5>{item.desc}</h5>
      <MITBrandLogos>
        {item.logos.map((url, idx) => (
          <MITLogo key={idx} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </MITBrandLogos>
    </MainThemItemWrap>
  );
};

const MainThemeList = ({ theme_list }) => {
  return (
    <MainThemeListWrap>
      <MainThemeListContainer>
        <h2>테마별 채용</h2>
        <MainThemeItems>
          {theme_list.map((item, idx) => (
            <MainThemItem key={idx} item={item} />
          ))}
        </MainThemeItems>
      </MainThemeListContainer>
    </MainThemeListWrap>
  );
};

export default MainThemeList;

const MainThemeListWrap = styled.div`
  margin-bottom: 60px;
  background-color: #fafafc;
`;

const MainThemeListContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
  padding: 80px 0;
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: normal;
    text-align: left;
    color: #333;
    display: felx;
    justify-content: space-between;
    align-items: center;
  }
`;

const MainThemeItems = styled.div`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

const MainThemItemWrap = styled.div`
  width: 50%;
  padding: 10px;
  color: #333333;

  h2 {
    font-size: 23px;
    margin: 20px 0 0;
    padding: 0;
    letter-spacing: -0.46px;
    font-weight: 500;
    line-height: 1.1;
  }

  h5 {
    margin-top: 8px;
    color: #999;
  }
`;

const MTIImg = styled.div`
  background-image: url(${({ url }) => url});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 3px;
  height: 300px;
`;

const MITBrandLogos = styled.div`
  margin-top: 20px;
`;

const MITLogo = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &:last-child {
    margin-right: 0;
  }
`;

const ThemeBtnWrap = styled.div`
  display: felx;
`;

const ThemeBtn = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 0px 10px;
  background-color: #fff;
  z-index: 100;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  color: #d2d2d2;
  i {
    font-size: 20px;
    line-height: 42px;
  }
  &:hover {
    opacity: 1;
    color: #333;
  }
`;
