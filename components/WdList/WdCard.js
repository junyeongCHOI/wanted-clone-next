import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { seekSmall } from "../../config";

const WdCard = ({ item }) => {
  return (
    <WdCardWrap>
      <Link as={`/WdDetail/${item.id}`} href={`/WdDetail?id=${item.id}`}>
        <a>
          <HeaderImg url={item.image} />
          <BodyContent>
            <BodyTitle>
              {item.name.length > 35
                ? item.name.slice(0, 35) + "..."
                : item.name}
            </BodyTitle>
            <BodyInfo>
              {item.company}
              <br />
              {item.city}
              <Dot>.</Dot>
              {item.country}
            </BodyInfo>
            <Reward>채용보상금 {item.total_reward}</Reward>
          </BodyContent>
        </a>
      </Link>
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
