import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { getDashboardVol } from "../../config";
import axios from "axios";

const AppListItem = ({ data, getData }) => {
  const delVol = async (e) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");
    await axios.delete(`${getDashboardVol}/${data.id}`, {
      headers: {
        Authorization: token,
      },
    });
    getData();
  };

  const go = () => {
    Router.push(
      `/dashboard/applications?match=detail&id=${data.id}&rId=${data.resume__id}`
    );
  };

  return (
    <ListItemWrap onClick={go}>
      <ListItem>
        <ItemUser>{data.user__name}</ItemUser>
        <InfoWrap>
          <h3>{data.resume__id}</h3>
          <h2>{data.user__name}OO</h2>
        </InfoWrap>
        {data.resume__is_matchup && <MatchUp>매치업</MatchUp>}
        <DelBtn onClick={delVol}>삭제</DelBtn>
      </ListItem>
    </ListItemWrap>
  );
};

export default AppListItem;

const ListItemWrap = styled.div`
  background: rgb(255, 255, 255);
  border-width: 0px 1px 1px;
  border-style: solid solid solid;
  border-color: rgb(225, 226, 227) rgb(225, 226, 227) rgb(225, 226, 227);
  cursor: pointer;
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 0px 18px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const ItemUser = styled.div`
  width: 34px;
  height: 34px;
  background-color: rgb(217, 228, 241);
  border-radius: 50%;
  overflow: hidden;
  line-height: 38px;
  text-align: center;
`;

const InfoWrap = styled.div`
  margin-left: 10px;
  font-weight: 400;
  line-height: 1.4;
  h2 {
    color: rgb(51, 51, 51);
    font-size: 18px;
  }

  h3 {
    color: rgb(181, 181, 181);
    font-size: 14px;
  }
`;

const MatchUp = styled.div`
  color: rgb(153, 153, 153);
  border: 1px solid rgb(153, 153, 153);
  line-height: 1.4;
  font-size: 9px;
  margin: 16px 5px 0 10px;
  vertical-align: middle;
  border-radius: 2px;
  padding: 3px 8px;
  background: rgb(255, 255, 255);
`;

const DelBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  color: rgb(254, 65, 92);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 12px;
  border: 1px solid rgb(254, 65, 92);
  border-radius: 3px;
  padding: 8px 15px 4px;
  transform: translate(-50%, -50%);
  z-index: 30;
`;
