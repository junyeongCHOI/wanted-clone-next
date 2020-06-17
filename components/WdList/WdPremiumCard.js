import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { seekSmall } from "../../config";

const WdPremiumCard = ({ item, widthRef }) => {
  return (
    <WdPremiumCardWrap ref={widthRef}>
      <Link as={`/WdDetail/${item.id}`} href={`/WdDetail?id=${item.id}`}>
        <a>
          <WdPremiumCardContainer>
            <ImageWrap>
              <MainImage url={item.image} />
            </ImageWrap>
            <BodyContent>
              <Logo url={item.logo} />
              <BodyTitle>
                {item.name.length > 35
                  ? item.name.slice(0, 35) + "..."
                  : item.name}
              </BodyTitle>
              <BodyInfo>
                {item.company}
                <br />
                {item.location}
                <Dot>.</Dot>
                {item.country}
              </BodyInfo>
              <Reward>채용보상금 {item.total_reward}</Reward>
            </BodyContent>
          </WdPremiumCardContainer>
        </a>
      </Link>
    </WdPremiumCardWrap>
  );
};

export default WdPremiumCard;

const BodyTitle = styled.div`
  position: relative;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  max-height: 2.8em;
  transition: color 0.1s ease-in;
`;

const MainImage = styled.div`
  padding-bottom: 75%;
  background-size: cover;
  background-position: 50%;
  border-radius: 4px 4px 0 0;
  background-image: url(${({ url }) => url});
  transition: transform 0.5s ease-in-out;
`;

const ImageWrap = styled.div`
  overflow: hidden;
`;

const WdPremiumCardWrap = styled.div`
  width: 25%;
  padding: 10px;
  cursor: pointer;
  line-height: 1.42;
  flex: 0 0 auto;

  &:hover ${BodyTitle} {
    color: #258bf7;
  }

  &:hover ${MainImage} {
    transform: scale(1.06);
  }

  @media only screen and (max-width: ${seekSmall}) {
    width: 50%;
  }
`;

const WdPremiumCardContainer = styled.div`
  border-radius: 4px;
  border: 1px solid rgb(225, 226, 227);
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 16px;
  background-image: url(${({ url }) => url});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const BodyContent = styled.div`
  position: relative;
  padding: 40px 10px 14px;
  height: 8.5em;
`;

const BodyInfo = styled.div`
  margin-top: 8px;
  color: rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;

const Dot = styled.span`
  margin: 0 3px;
  top: -4px;
  position: relative;
`;

const Reward = styled.div`
  margin-top: 10px;
  color: rgb(102, 102, 102);
  font-size: 13px;
  font-weight: 400;
`;
