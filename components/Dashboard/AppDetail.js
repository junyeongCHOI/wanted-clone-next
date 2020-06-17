import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import axios from "axios";
import Loading from "../../components/Loading";
import moment from "moment";
import {
  getDashboardVol,
  dashboardproposal,
  dashBoardResumeDetail,
} from "../../config";

const AppDetail = ({ router }) => {
  const [userData, setUserData] = useState(false);
  const [detailData, setDetailData] = useState(false);
  const [p, setP] = useState(false);

  const proprsal = async () => {
    if (p) {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        dashboardproposal,
        { resume_id: router.query.rId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setP(true);
    } catch (err) {
      alert("제안하기 실패");
    }
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${getDashboardVol}/${router.query.id}`, {
        headers: {
          Authorization: token,
        },
      });
      const resDetail = await axios.get(
        `${dashBoardResumeDetail}/${router.query.rId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDetailData(resDetail.data.data);
      setUserData(res.data.data);
    })();
  }, []);

  if (!userData || !detailData) {
    console.log(detailData);
    console.log(userData);
    return <Loading />;
  }
  return (
    <AppDetaillWrap>
      <AppDetailHeader>
        <h2>지원자</h2>
        <HeaderContext>
          <VerLine />
          <HClogo>
            <h2>{userData.name}</h2>
          </HClogo>
          <HCname>{userData.name}OO</HCname>
          {userData.is_matchup && <MatchUp>매치업</MatchUp>}
          <ApplyBtn onClick={proprsal} p={p}>
            {p ? "제안됨" : "제안 보내기"}
          </ApplyBtn>
        </HeaderContext>
        <CreateDate>
          <h5>작성일 : </h5>
          <h6>{moment(userData.created_at).format("YYYY-MM-DD HH:MM")}</h6>
        </CreateDate>
      </AppDetailHeader>
      <ResumeWrap>
        <ResumeContainer>
          <h2>{detailData.name}</h2>
          <h3>이메일:{detailData.email}</h3>
          <h3>연락처:{detailData.contact}</h3>
          <h3 style={{ color: "rgb(117, 117, 117)", margin: "10px 0" }}>
            {detailData.description}
          </h3>
          <InfoWrap>
            <InfoTitle>경력</InfoTitle>
            <InfoDetailSide>
              {detailData.career.map((data) => (
                <Fragment key={data.id}>
                  <h4>{data.company}</h4>
                  <h4 style={{ textAlign: "right" }}>
                    {data.start_year}.{data.start_month}-
                    {data.is_working
                      ? " 현재 재직중"
                      : ` ${data.end_year}.${data.end_month}`}
                  </h4>
                  <h5>{data.position}</h5>
                  {data.result.map((subData) => (
                    <SubDetail key={subData.id}>
                      <h4>• {subData.title}</h4>
                      <h4 style={{ textAlign: "right" }}>
                        {subData.start_year}.{subData.start_month} -{" "}
                        {subData.end_year}.{subData.end_month}
                      </h4>
                      <h5 style={{ paddingLeft: "10px" }}>{subData.content}</h5>
                    </SubDetail>
                  ))}
                </Fragment>
              ))}
            </InfoDetailSide>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>학력</InfoTitle>
            <InfoDetailSide>
              {detailData.education.map((data) => (
                <Fragment key={data.id}>
                  <h4>{data.school}</h4>
                  <h4 style={{ textAlign: "right" }}>
                    {data.start_year}.{data.start_month}-
                    {data.is_working
                      ? " 현재 재학중"
                      : ` ${data.end_year}.${data.end_month}`}
                  </h4>
                  <h5>
                    {data.specialism}
                    {data.subject ? ` / ${data.subject}` : ""}
                  </h5>
                </Fragment>
              ))}
            </InfoDetailSide>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>수상 및 기타</InfoTitle>
            <InfoDetailSide>
              {detailData.award.map((data) => (
                <Fragment key={data.id}>
                  <h4>{data.name}</h4>
                  <h4 style={{ textAlign: "right" }}>
                    {data.date_year}.{data.date_month}
                  </h4>
                  <h5>{data.content}</h5>
                </Fragment>
              ))}
            </InfoDetailSide>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>링크</InfoTitle>
            <InfoDetailSide>
              {detailData.link.map((data, idx) => (
                <h4 key={idx}>{data.url === null ? "" : data.url}</h4>
              ))}
            </InfoDetailSide>
          </InfoWrap>
        </ResumeContainer>
      </ResumeWrap>
    </AppDetaillWrap>
  );
};

export default withRouter(AppDetail);

const AppDetaillWrap = styled.div`
  width: 100%;
`;

const AppDetailHeader = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;
  border: 1px solid rgb(219, 219, 219);

  h2 {
    padding: 15px 20px;
    line-height: 1.4;
    color: rgb(117, 117, 117);
    font-size: 16px;
    font-weight: 600;
  }
`;

const HeaderContext = styled.div`
  position: relative;
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px;
  display: flex;
  align-items: center;
`;

const VerLine = styled.div`
  position: absolute;
  left: 0px;
  transform: translateY(-50%);
  top: 50%;
  height: 3rem;
  border-left: 3px solid rgb(37, 139, 247);
`;

const HClogo = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: rgb(217, 228, 241);
  border-radius: 50%;
  overflow: hidden;
  h2 {
    font-size: 26px;
    position: absolute;
    top: 52%;
    left: 52%;
    color: rgb(51, 51, 51);
    transform: translate(-50%, -50%);
  }
`;

const HCname = styled.div`
  line-height: 1.4;
  color: rgb(51, 51, 51);
  font-size: 26px;
  font-weight: 700;
  margin-left: 20px;
`;

const MatchUp = styled.div`
  color: rgb(153, 153, 153);
  border: 1px solid rgb(153, 153, 153);
  line-height: 1.4;
  font-size: 9px;
  margin: 0 10px 5px;
  vertical-align: middle;
  border-radius: 2px;
  padding: 3px 8px;
  background: rgb(255, 255, 255);
`;

const ApplyBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: ${({ p }) => (p ? "#e1e2e3" : "rgb(37, 139, 247)")};
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  padding: 14px 30px;
`;

const CreateDate = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px;
  line-height: 1.4;
  font-size: 16px;
  display: flex;

  h5 {
    color: #b5b5b5;
  }

  h6 {
    color: #333;
    padding-left: 10px;
  }
`;

const ResumeWrap = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 40px;
  border: 1px solid rgb(219, 219, 219);
`;

const ResumeContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 50px 30px;
  line-height: 1.4;
  overflow-wrap: break-word;
  color: rgb(51, 51, 51);

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin: 30px 0 15px;
  }

  h3 {
    color: rgb(181, 181, 181);
    font-size: 16px;
    margin: 3px 0;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  font-size: 16px;
  color: rgb(51, 51, 51);
  padding: 30px 0;
  margin-top: 30px;
  border-top: 2px solid rgb(28, 28, 28);
`;

const InfoTitle = styled.div`
  width: 120px;
  margin-right: 10px;
`;

const InfoDetailSide = styled.div`
  width: calc(100% - 130px);
  border-bottom: 1px solid rgb(219, 219, 219);

  h4 {
    color: #333;
  }

  h5 {
    color: #757575;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

const SubDetail = styled.div`
  margin: 20px 0 0 20px;
`;
