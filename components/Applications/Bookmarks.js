import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Bookmarks = () => {
  const [bookmarkList, setBookmarkList] = useState([]);

  if (bookmarkList.length === 0) {
    return (
      <BookmarksWrap>
        <NoResult>추천 포지션이 없습니다.</NoResult>
      </BookmarksWrap>
    );
  }

  return <BookmarksWrap></BookmarksWrap>;
};

export default Bookmarks;

const BookmarksWrap = styled.div`
  width: 100%;
`;

const NoResult = styled.div`
  padding: 200px 0;
  text-align: center;
  margin: 240px 0;
  color: #d1d1d1;
  font-size: 24px;
`;
