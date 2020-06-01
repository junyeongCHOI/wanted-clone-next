import React, { useState } from "react";
import styled from "styled-components";
import WdCard from "./WdCard";
import MockCards from "./MockCards";

const WdCards = ({ data }) => {
  const [nowLoading, setLoading] = useState(false);
  return (
    <WdCardsWrap>
      {data.map((item) => (
        <WdCard key={item.item_id} item={item} />
      ))}
      {nowLoading && <MockCards />}
    </WdCardsWrap>
  );
};

export default WdCards;

const WdCardsWrap = styled.div`
  margin: -10px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;
