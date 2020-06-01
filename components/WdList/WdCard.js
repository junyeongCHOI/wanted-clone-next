import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { seekSmall } from "../../config";

const WdCard = ({ item }) => {
  const goDetail = () => {
    Router.push(`/WdDetail?id=${item.item_id}`);
  };

  return (
    <WdCardWrap onClick={goDetail}>
      <HeaderImg url={item.item_image} />
      <BodyContent>
        <BodyTitle>
          {item.item_title.length > 35
            ? item.item_title.slice(0, 35) + "..."
            : item.item_title}
        </BodyTitle>
        <BodyInfo>
          {item.item_company}
          <br />
          {item.item_location}
          <Dot>.</Dot>
          {item.item_country}
        </BodyInfo>
        <Reward>채용보상금 {item.item_reward}</Reward>
      </BodyContent>
    </WdCardWrap>
  );
};

export default WdCard;

const WdCardWrap = styled.div`
  width: 25%;
  padding: 10px;
  cursor: pointer;
  line-height: 1.42;

  @media only screen and (max-width: ${seekSmall}) {
    width: 50%;
  }
`;

const HeaderImg = styled.div`
  padding-bottom: 75%;
  position: relative;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: 50%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const BodyContent = styled.div`
  padding: 14px 10px;
  height: 12.5em;
`;

const BodyTitle = styled.div`
  position: relative;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  max-height: 2.8em;
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
