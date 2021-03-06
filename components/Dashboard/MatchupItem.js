import React, { useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { dashboardzzim, dashboardrequest } from "../../config";

const MatchupItem = ({ data }) => {
  const [l, setL] = useState(data.liked);
  const [r, setR] = useState(data.requested);

  const req = async () => {
    if (r) {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        dashboardrequest,
        { resume_id: data.id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setR(true);
    } catch (err) {
      alert("요청하기 실패");
    }
  };

  const zzim = async () => {
    if (l) {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          dashboardzzim,
          { resume_id: data.id },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setL(false);
      } catch (err) {
        alert("찜하기 실패");
      }
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        dashboardzzim,
        { resume_id: data.id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setL(true);
    } catch (err) {
      alert("찜하기 실패");
    }
  };

  return (
    <MatchupItemWrap>
      <LeftSideWrap>
        <Logo>{data.name.slice(0, 1)}</Logo>
        <UserId>{data.id}</UserId>
        <UserOff>
          <i className="xi-eye-off-o" />
          숨기기
        </UserOff>
      </LeftSideWrap>
      <BigLine />
      <InfoWrap>
        <RoleWrap style={{ marginBottom: "20px" }}>
          <h2>{data.role[0]}</h2>
          {data.role.length > 1 ? (
            <>
              <Line />
              <h3>{data.role.slice(1).join(" / ")}</h3>
            </>
          ) : (
            ""
          )}
        </RoleWrap>
        <DesWRap>
          <RoleWrap>
            <h2>
              {data.total_career > 0 ? `${data.total_career}년 경력` : "신입"}
            </h2>
          </RoleWrap>
          <DesContainer>
            {data.career.length > 1 ? (
              <DesWRap>
                <Line />
                <h2>
                  {data.career
                    .map((data, idx) => (
                      <Fragment key={idx}>
                        {data.company}
                        <span>({data.duration}개월)</span>
                      </Fragment>
                    ))
                    .reduce((prev, curr) => [prev, " / ", curr])}
                </h2>
              </DesWRap>
            ) : (
              ""
            )}
            <Des>
              {data.description}
              <SkillWrap>
                {data.skill.map((data, idx) => (
                  <Skill key={idx}>{data}</Skill>
                ))}
              </SkillWrap>
            </Des>
          </DesContainer>
        </DesWRap>
        <RoleWrap>
          <h2>{data.school}</h2>
          <Line />
          <h3>{data.specialism}</h3>
        </RoleWrap>
        <BtnWrap>
          <AddBtn onClick={zzim} l={l}>
            <i className="xi-star-o" /> {l ? "찜취소" : "찜하기"}
          </AddBtn>
          <ShowResume r={r} onClick={req}>
            {r ? "요청됨" : "이력서 요청하기"}
          </ShowResume>
        </BtnWrap>
      </InfoWrap>
    </MatchupItemWrap>
  );
};

export default MatchupItem;

const MatchupItemWrap = styled.div`
  background: rgb(255, 255, 255);
  position: relative;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
`;

const LeftSideWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: 56px;
  height: 56px;
  background-color: rgb(217, 228, 241);
  border-radius: 50%;
`;

const UserId = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  text-align: center;
`;

const UserOff = styled.div`
  margin-top: auto;
  color: rgb(153, 153, 153);
  font-size: 12px;
  white-space: nowrap;

  i {
    margin-left: 10px;
  }
`;

const Line = styled.div`
  display: inline-block;
  height: 14px;
  margin: 0 8px;
  border-left: 1px solid rgb(225, 226, 227);
`;

const BigLine = styled.div`
  line-height: 1.4;
  margin: 0px 20px;
  border-left: 1px solid rgb(225, 226, 227);
`;

const InfoWrap = styled.div`
  width: 100%;
`;

const RoleWrap = styled.div`
  display: felx;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;

  h2 {
    color: rgb(28, 28, 28);
    span {
      font-size: 12px;
    }
  }

  h3 {
    width: calc(100% - 100px);
    color: rgb(153, 153, 153);
    word-break: break-all;
  }
`;

const DesWRap = styled.div`
  width: 100%;
  display: felx;
  align-items: stretch;
`;

const DesContainer = styled.div`
  width: calc(100% - 60px);
`;

const Des = styled.div`
  padding: 0 0 50px 17px;
  font-size: 12px;
  line-height: 1.4;
  color: rgb(153, 153, 153);
  overflow: hidden;
  word-break: keep-all;
  word-wrap: break-word;
`;

const SkillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const Skill = styled.div`
  line-height: 1.4;
  color: rgb(28, 28, 28);
  background-color: rgb(217, 228, 241);
  margin: 10px 5px 5px;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 16px;

  &:first-child {
    margin-left: 0;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: rgb(28, 28, 28);
  background-color: ${({ l }) => (l ? "#e1e2e3" : "rgb(244, 244, 244)")};
  border-radius: 3px;
  padding: 14px 20px;
  margin: 0 5px;
`;

const ShowResume = styled.div`
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: ${({ r }) => (r ? "#e1e2e3" : "rgb(51, 51, 51)")};
  font-size: 16px;
  font-weight: 600;
  border-radius: 3px;
  padding: 14px 20px;
  margin: 0 5px;
`;
