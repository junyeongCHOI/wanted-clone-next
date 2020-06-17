import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { seekSmall } from "../../config";

const WdCard = ({ item, setItemId, itemId }) => {
  return (
    <WdCardWrap onClick={() => setItemId(item.id)} isOn={itemId === item.id}>
      <HeaderImg url={item.image} />
      <BodyContent>
        <BodyTitle>
          {item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}
        </BodyTitle>
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
  opacity: ${({ isOn }) => (isOn ? "1" : "0.6")};

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
  height: 125px;
`;

const BodyTitle = styled.div`
  position: relative;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  max-height: 28px;
`;
