import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import { getSearchTags } from "../config";
import LayoutUser from "../components/LayoutUser";
import Loading from "../components/Loading";
import SearchTag from "../components/SearchTag";

const Tags = () => {
  const [tagList, setTagList] = useState(false);
  //쿼리스트링은 tag로

  useEffect(() => {
    (async () => {
      const res = await axios.get(getSearchTags);
      setTagList(res.data.tag_list);
    })();
  }, []);

  if (!tagList) {
    return (
      <>
        <Head>
          <title>태그별로 포지션을 찾아보세요!</title>
        </Head>
        <LayoutUser>
          <Loading />
        </LayoutUser>
      </>
    );
  }

  console.log(tagList);

  return (
    <>
      <Head>
        <title>태그별로 포지션을 찾아보세요!</title>
      </Head>
      <LayoutUser>
        <TagsWrap>
          <TagsContainer>
            {tagList.map((item) => (
              <TagItemsWrap>
                <TitleSide># {item.category}</TitleSide>
                <TagsSide>
                  {item.tags.map((tag) => (
                    <SearchTag
                      name={tag}
                      onClick={() =>
                        Router.push(`/tag_search?tag=${encodeURI(tag)}`)
                      }
                    />
                  ))}
                </TagsSide>
              </TagItemsWrap>
            ))}
          </TagsContainer>
        </TagsWrap>
      </LayoutUser>
    </>
  );
};

export default Tags;

const TagsWrap = styled.div`
  padding: 50px 0;
`;

const TagsContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
  padding-top: 50px;
`;

const TagItemsWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
`;

const TitleSide = styled.div`
  width: 200px;
  padding: 15px 10px 0;
  font-size: 24px;
  color: #333;
`;

const TagsSide = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-wrap: wrap;
`;
