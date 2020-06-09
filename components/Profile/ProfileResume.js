import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import Loading from "../Loading";
import { CvMain, userUserResume, profileSpec } from "../../config";

const ResumeItem = ({ item, setOn, setPickedResume, setInfoData }) => {
  const pickedResume = async (e) => {
    const token = localStorage.getItem("token");
    e.stopPropagation();
    const res = await axios.get(`${userUserResume}/${item.id}`, {
      headers: {
        Authorization: token,
      },
    });
    setPickedResume(item);
    setInfoData({
      resume_id: res.data.data[0].resume_id,
      user_school: res.data.data[1].user_school,
      user_career: res.data.data[2].user_career,
      description: res.data.data[3].description,
    });
    setOn(false);
  };

  return (
    <ResumeItemWrap onClick={pickedResume}>
      {item.title} <span>|</span> <h3>{item.status}</h3>
      <h2>{item.created_at}</h2>
    </ResumeItemWrap>
  );
};

const ProfileResume = () => {
  const [resumeList, setResumeList] = useState([]);
  const [pickedResume, setPickedResume] = useState();
  const [infoData, setInfoData] = useState();
  const [specInfo, setSpecInfo] = useState();
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (pickedResume) {
      (async () => {
        const sres = await axios.get(profileSpec, {
          headers: {
            Authorization: token,
          },
          data: {
            resume_id: pickedResume.id,
          },
        });
        setSpecInfo(sres.data.data);
      })();
    }
  }, [pickedResume]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const rlist = await axios(CvMain, {
        headers: {
          Authorization: token,
        },
      });

      setResumeList(rlist.data.data);
      if (
        rlist.data.data.map((resume) => resume.is_matchup && resume)[0] ===
        false
      ) {
        const ires = await axios.get(
          `${userUserResume}/${rlist.data.data[0].id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPickedResume(rlist.data.data[0]);
        setInfoData({
          resume_id: ires.data.data[0].resume_id,
          user_school: ires.data.data[1].user_school,
          user_career: ires.data.data[2].user_career,
          description: ires.data.data[3].description,
        });
      } else {
        const ires = await axios.get(
          `${userUserResume}/${
            rlist.data.data.map((resume) => resume.is_matchup && resume).id
          }`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPickedResume(
          rlist.data.data.map((resume) => resume.is_matchup && resume)
        );
        setInfoData({
          resume_id: ires.data.data[0].resume_id,
          user_school: ires.data.data[1].user_school,
          user_career: ires.data.data[2].user_career,
          description: ires.data.data[3].description,
        });
      }
    })();
  }, []);

  if (!resumeList || !pickedResume) {
    return <Loading />;
  }
  console.log(specInfo);
  return (
    <>
      <ProfileResumeWrap>
        <header>기본 이력서</header>
        <PRTitle>기본 이력서 선택</PRTitle>
        <SelectResume onClick={() => setOn(!isOn)}>
          {isOn && (
            <ListBoxWrap>
              {resumeList.map((item, idx) => (
                <ResumeItem
                  key={idx}
                  item={item}
                  setOn={setOn}
                  setPickedResume={setPickedResume}
                  setInfoData={setInfoData}
                />
              ))}
            </ListBoxWrap>
          )}
          <Han>한</Han>
          <span>{pickedResume.title}</span>
          <i className="xi-caret-down-min" />
        </SelectResume>
        <SubInfoWrap>
          <ResumePen>
            <i
              className="xi-pen-o"
              onClick={() => Router.push(`/CvWrite?id=${pickedResume.id}`)}
            />
          </ResumePen>
          <PRTitle>학교</PRTitle>
          <PRSubtitle>
            {infoData && infoData.user_school.school} |
            {infoData && infoData.user_school.specialism}
          </PRSubtitle>
          <PRTitle>직장</PRTitle>
          <PRSubtitle>
            {infoData && infoData.user_career.company} |
            {infoData && infoData.user_career.position}
          </PRSubtitle>
          <PRAbout>{infoData && infoData.description}</PRAbout>
        </SubInfoWrap>
      </ProfileResumeWrap>
      <ProfileResumeWrap style={{ marginTop: 10 }}>
        <header>전문분야 설정</header>
        <SubInfoWrap>
          <Link href={`/profile?match=specialty&id=${pickedResume.id}`}>
            <a>
              <ResumePen>
                <i className="xi-pen-o" />
              </ResumePen>
            </a>
          </Link>
          <SubInfoInnerWrap>
            <PRTitle>직군</PRTitle>
            <PRSubtitle>개발</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>직무</PRTitle>
            <PRSubtitle>프론트엔드 개발자</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>경력</PRTitle>
            <PRSubtitle>신입</PRSubtitle>
          </SubInfoInnerWrap>
          <SubInfoInnerWrap>
            <PRTitle>스킬</PRTitle>
            <PRSubtitle>ReactJS, JavaScript, HTML5, CSS3</PRSubtitle>
          </SubInfoInnerWrap>
        </SubInfoWrap>
      </ProfileResumeWrap>
    </>
  );
};

export default ProfileResume;

const ProfileResumeWrap = styled.div`
  padding: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 3px;
  background-color: #fff;

  header {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

const SubInfoWrap = styled.div`
  position: relative;
`;

const PRTitle = styled.h3`
  font-size: 16px;
  color: #999;
  padding: 10px 0;
`;

const ResumePen = styled.div`
  position: absolute;
  font-size: 24px;
  top: 0;
  right: 0;
  color: #258bf7;
  cursor: pointer;
  display: none;
  ${SubInfoWrap}:hover & {
    display: block;
  }
`;

const SelectResume = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;

  span {
    font-size: 16px;
    margin-top: 3px;
    font-weight: 600;
    color: #333;
  }

  i {
    font-size: 18px;
    color: #999;
    position: absolute;
    top: 50%;
    right: 20px;
    position: absolute;
    transform: translateY(-50%);
  }
`;

const Han = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px #999;
  color: #999;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const SubInfoInnerWrap = styled.div`
  margin-top: 30px;
`;

const PRSubtitle = styled.h4`
  font-size: 16px;
  color: #333;
  padding: 15px 0;
`;

const PRAbout = styled.h3`
  font-size: 14px;
  color: #999;
  padding: 20px 0 0;
`;

const ListBoxWrap = styled.div`
  position: absolute;
  bottom: -299px;
  left: 0px;
  width: calc(100% + 2px);
  height: 300px;
  padding: 20px;
  margin-left: -1px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  z-index: 500;
  overflow: auto;
`;

const ResumeItemWrap = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #f4f5f7;
  background: #f4f5f7;
  border-radius: 2px;
  margin-bottom: 10px;
  display: felx;
  padding: 0 20px;
  align-items: center;

  span {
    display: inline-block;
    margin: 0 3px 0 8px;
    color: #7d7d7d;
  }

  h3 {
    font-size: 12px;
    color: #7d7d7d;
  }

  h2 {
    position: absolute;
    right: 20px;
    font-size: 12px;
    color: #7d7d7d;
    font-weight: 300;
  }
`;
