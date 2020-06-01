import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <i className="xi-spinner-5 xi-spin" />
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 48px;
  color: #36f;
  padding-top: 100px;
`;
