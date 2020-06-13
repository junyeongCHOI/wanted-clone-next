import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { getBList } from "../../config";
import WdCard from "../WdList/WdCard";

const Bookmarks = () => {
  const [bookmarkList, setBookmarkList] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(getBList, {
        headers: {
          Authorization: token,
        },
      });
      setBookmarkList(res.data.bookmark);
    })();
  }, []);

  if (!bookmarkList.length) {
    return (
      <BookmarksWrap>
        <NoResult>추천 포지션이 없습니다.</NoResult>
      </BookmarksWrap>
    );
  }

  return (
    <BookmarksWrap>
      {bookmarkList.map((item) => (
        <WdCard item={item} />
      ))}
    </BookmarksWrap>
  );
};

export default Bookmarks;

const BookmarksWrap = styled.div`
  width: 100%;
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

const NoResult = styled.div`
  padding: 200px 0;
  text-align: center;
  margin: 240px 0;
  color: #d1d1d1;
  font-size: 24px;
`;
