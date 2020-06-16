import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import ProfileNoResult from "../Profile/ProfileNoResult";
import moment from "moment";
import axios from "axios";
import { applyMonitor } from "../../config";

const ApplicationsApply = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(applyMonitor, {
        headers: {
          Authorization: token,
        },
      });
      setList(res.data.applied_position);
    })();
  }, []);

  return (
    <ApplicationsApplyWrap>
      <ApplyInfo>
        <h2>지원 현황</h2>
        <h3>추천한 후보자</h3>
        <h5>지원</h5>
        <ApplyInfoItemWrap>
          작성<ApplyInfoNumBox>{list.length}</ApplyInfoNumBox>
        </ApplyInfoItemWrap>
        <h4>지원한 포지션</h4>
      </ApplyInfo>
      <ApplyDetailSide>
        <ADNumBoxWrap>
          <ADNumBox>
            <h1>{list.length}</h1>
            <h2>전체</h2>
          </ADNumBox>
          <ADNumBox>
            <h1>0</h1>
            <h2>채용 완료</h2>
          </ADNumBox>
          <ADNumBox>
            <h1>0</h1>
            <h2>서류 통과</h2>
          </ADNumBox>
          <ADNumBox>
            <h1>0</h1>
            <h2>접수</h2>
          </ADNumBox>
          <ADNumBox>
            <h1>0</h1>
            <h2>불합격</h2>
          </ADNumBox>
        </ADNumBoxWrap>
        <ADNav>
          <h4>총 {list.length}건</h4>
          <ADNavItemWrap>
            <i className="xi-search" />
            <ADNavIteminput placeholder="회사 / 지원자명 검색" />
          </ADNavItemWrap>
        </ADNav>
        <ResultHeader>
          <h1>지원 회사</h1>
          <h2>지원 포지션</h2>
          <h3>작성시간</h3>
        </ResultHeader>
        {list.length === 0 ? (
          <ProfileNoResult />
        ) : (
          list.map((item) => (
            <ResultWrap>
              <h1>{item.company}</h1>
              <h2>{item.position}</h2>
              <h3>{moment(item.applied_at).format("YYYY-MM-DD HH:MM")}</h3>
            </ResultWrap>
          ))
        )}
      </ApplyDetailSide>
    </ApplicationsApplyWrap>
  );
};

export default ApplicationsApply;

const ApplicationsApplyWrap = styled.div`
  width: 100%;
  display: felx;
`;

const ApplyInfo = styled.aside`
  width: 250px;
  height: 500px;

  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  h3 {
    padding-bottom: 17px;
    border-bottom: 1px solid #e1e2e3;
    margin-bottom: 30px;
    color: #999;
    font-size: 18px;
    font-weight: 300;
  }

  h4 {
    font-size: 16px;
    color: #176fd8;
    font-weight: 600;
  }

  h5 {
    color: #999;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ApplyInfoItemWrap = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.42857143;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ApplyInfoNumBox = styled.div`
  min-width: 30px;
  height: 30px;
  padding: 4px 10px;
  border-radius: 3px;
  background-color: #e1e2e3;
  color: #333;
  font-size: 16px;
  font-weight: 400;
`;

const ApplyDetailSide = styled.section`
  width: calc(100% - 250px);
  margin-left: 20px;
`;

const ADNumBoxWrap = styled.div`
  width: 100%;
  display: felx;
  justify-content: center;
`;

const ADNumBox = styled.div`
  width: 20%;
  min-width: 120px;
  color: #86939e;
  text-align: center;
  border-right: 1px solid #d1d1d1;

  h1 {
    font-size: 40px;
    font-weight: 400;
    line-height: 1;
  }

  h2 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
  }

  &:last-child {
    border-right: 0;
  }
`;

const ADNav = styled.div`
  width: 100%;
  margin: 50px 0 40px;
  display: flex;
  justify-content: space-between;

  h4 {
    color: #3b3d40;
    font-size: 16px;
    font-weight: 400;
  }
`;

const ADNavItemWrap = styled.div`
  i {
    font-size: 16px;
    color: #505050;
    margin-right: 30px;
  }
`;

const ADNavIteminput = styled.input`
  color: #333333;
  font-size: 16px;
  width: 160px;
  min-height: 30px;

  ::placeholder {
    color: #c0c0c0;
  }
`;

const ResultHeader = styled.div`
  width: 100%;
  display: felx;
  border-bottom: 1px solid #d1d1d1;
  color: #86939e;
  font-size: 12px;

  h1 {
    width: 25%;
    padding: 10px;
  }
  h2 {
    width: 40%;
    padding: 10px;
  }
  h3 {
    width: 35%;
    padding: 10px;
  }
`;

const ResultWrap = styled.div`
  width: 100%;
  display: felx;
  border-bottom: 1px solid #e1e2e3;
  color: #333;
  font-size: 12px;

  h1 {
    width: 25%;
    padding: 20px 10px;
  }
  h2 {
    width: 40%;
    padding: 20px 10px;
  }
  h3 {
    width: 35%;
    padding: 20px 10px;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
