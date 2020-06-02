import React from "react";
import styled from "styled-components";

const CvWriteTop = () => {
  return (
    <CvWriteTopWrap>
      <LangFilter>
        <i className="xi-globus" />
        <span>한국어</span>
      </LangFilter>
      <DownloadBtn>
        <i className="xi-arrow-bottom" />
      </DownloadBtn>
    </CvWriteTopWrap>
  );
};

export default CvWriteTop;

const CvWriteTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LangFilter = styled.div`
  width: 102px;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #999;
  background-color: #fff;
  padding: 10px;
  display: felx;
  color: #444;
  i {
    font-size: 21px;
    display: block;
    margin-right: 10px;
    font-weight: 100;
  }

  span {
    font-weight: 400;
    display: block;
    font-size: 14px;
    margin-top: 3px;
  }
`;

const DownloadBtn = styled.div`
  border: 1px solid #999;
  color: #76797e;
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 24px;
    display: block;
  }
`;
