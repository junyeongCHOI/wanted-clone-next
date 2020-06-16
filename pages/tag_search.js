import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { getSearchTags, getTagWdlist } from "../config";
import LayoutUser from "../components/LayoutUser";
import Loading from "../components/Loading";
import SearchTag from "../components/SearchTag";
import WdCards from "../components/WdList/WdCards";

const Tag_search = ({ router }) => {
  const [tagList, setTagList] = useState([]);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(getSearchTags);
      if (
        res.data.tag_list.filter((item) =>
          item.list.includes(router.query.tag)
        ) < 1
      ) {
        Router.push("/tags");
      } else {
        const resWdList = await axios.get(getTagWdlist);
        setCardList(resWdList.data.position);
      }
      setTagList(res.data.tag_list);
    })();
  }, []);

  if (
    tagList.filter((item) => item.list.includes(router.query.tag)).length === 0
  ) {
    return (
      <>
        <Head>
          <title>{router.query.tag} 태그의 포지션이 궁금하다면?</title>
        </Head>
        <LayoutUser>
          <Loading />
        </LayoutUser>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{router.query.tag} 태그의 포지션이 궁금하다면?</title>
      </Head>
      <LayoutUser>
        <Tag_searchWrap>
          <TopSide>
            <TopSideWrap>
              <TopTitle>
                #{router.query.tag}
                <h5 onClick={() => Router.push("/tags")}>전체보기</h5>
              </TopTitle>
              <TagsWrap>
                <h5>추천</h5>
                <TagsItemWrap>
                  {tagList
                    .filter((item) => item.list.includes(router.query.tag))[0]
                    .list.filter((item) => item !== router.query.tag)
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 5)
                    .map((name, idx) => (
                      <SearchTag
                        key={idx}
                        name={name}
                        onClick={() =>
                          Router.push(`/tag_search?tag=${encodeURI(name)}`)
                        }
                      />
                    ))}
                </TagsItemWrap>
              </TagsWrap>
            </TopSideWrap>
          </TopSide>
          <Tag_searchContainer>
            <WdCards data={cardList} />
          </Tag_searchContainer>
        </Tag_searchWrap>
      </LayoutUser>
    </>
  );
};

export default withRouter(Tag_search);

const Tag_searchWrap = styled.div`
  width: 100vw;
  padding: 50px 0;
  background-color: #f8f8fa;
`;

const Tag_searchContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
  padding: 10px 0 50px;
`;

const TopSideWrap = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0px auto;
`;

const TopSide = styled.div`
  padding: 20px 0;
  background-color: #fff;
`;

const TopTitle = styled.div`
  position: relative;
  font-size: 24px;
  color: #333;
  text-align: center;

  h5 {
    position: absolute;
    font-size: 14px;
    color: #36f;
    cursor: pointer;
    top: 5px;
    right: 0;
  }
`;

const TagsWrap = styled.div`
  padding: 30px 0 0;
  display: flex;
  justify-content: center;

  h5 {
    font-size: 14px;
    color: #333;
    line-height: 50px;
    margin-right: 20px;
    min-width: 25px;
  }
`;

const TagsItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WdCardsWrap = styled.div`
  margin: -10px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;
