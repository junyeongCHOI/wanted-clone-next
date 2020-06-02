import React from "react";
import styled from "styled-components";
import CvCard from "./CvCard";

const ResumeCard = ({ item }) => {
  return (
    <CvCard>
      <ResumeCardInfo isActive={item.state !== "작성 중" ? true : false}>
        <h3>
          {item.title.length > 30
            ? item.title.slice(0, 30) + "..."
            : item.title}
        </h3>
        <p>{item.date}</p>
      </ResumeCardInfo>
      <ResumeCardState>
        <StateText isActive={item.state !== "작성 중" ? true : false}>
          <Han>한</Han> <p>{item.state}</p>
        </StateText>
        <i className="xi-ellipsis-v" />
      </ResumeCardState>
    </CvCard>
  );
};

export default ResumeCard;

const ResumeCardInfo = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  border-bottom: 1px solid #e0e0e0;
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ isActive }) => (isActive ? "#333" : "#999")};
  line-height: 1.4;
  word-break: break-all;

  h3 {
    font-weight: 900;
  }

  p {
    color: #999;
    margin-top: 5px;
  }
`;

const ResumeCardState = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    display: block;
    font-size: 21px;
    color: #999;
  }
`;

const StateText = styled.div`
  display: felx;
  align-items: center;
  color: ${({ isActive }) => (isActive ? "#333" : "#999")};

  p {
    font-weight: 600;
    font-size: 16px;
    margin: 3px 0 0 10px;
  }
`;

const Han = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px #999;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
`;
