import React from "react";
import styled from "styled-components";

const ProfileNoResult = () => {
  return (
    <NoResultWrap>
      <i className="xi-search" />
      <p>요청하신 결과가 없습니다.</p>
    </NoResultWrap>
  );
};

export default ProfileNoResult;

const NoResultWrap = styled.div`
  margin: 100px 0;
  color: #ccc;
  font-size: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    display: inline-block;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    background-color: #eee;
    border-radius: 100%;
  }
`;
