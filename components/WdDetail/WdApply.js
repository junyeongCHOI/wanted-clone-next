import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Router from "next/router";
import { withRouter } from "next/router";
import {
  MYIP,
  userinfo,
  CvMain,
  CvWriteBodyAPI,
  WdDetailAPI,
} from "../../config";
import Loading from "../../components/Loading";

const ResumeList = ({ item, setPickedResume, pickedResume }) => {
  return (
    <ResumeListWrap>
      <ResumeListCheckBox>
        {item.status === "첨부 완료" || item.status === "작성 완료" ? (
          pickedResume === item.id ? (
            <i
              style={{ color: "#36f" }}
              className="xi-check-square"
              onClick={() => setPickedResume(false)}
            />
          ) : (
            <i
              className="xi-checkbox-blank"
              onClick={() => setPickedResume(item.id)}
            />
          )
        ) : (
          <i className="xi-layout-full" />
        )}
      </ResumeListCheckBox>
      <ResumeListInfoWrap>
        <ResumeTitle>
          {item.title.length > 25
            ? item.title.slice(0, 25) + "..."
            : item.title}
        </ResumeTitle>
        <ResumeSubWrap>
          {item.date} | {item.status}
        </ResumeSubWrap>
      </ResumeListInfoWrap>
      <GoResumeBtn>
        <i className="xi-angle-right" />
      </GoResumeBtn>
    </ResumeListWrap>
  );
};

const WdApply = ({ applyBtn, hRef, router }) => {
  const [resumeList, setResumeList] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [pickedResume, setPickedResume] = useState(false);

  const submit = async () => {
    if (pickedResume) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `${WdDetailAPI}/${router.query.id}/apply`,
          {
            resume: pickedResume,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        applyBtn();
        alert("제출 완료!");
      } catch (err) {
        console.error(err);
        alert("실패!");
      }
    }
  };

  const makeNewResume = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(CvWriteBodyAPI, {
        headers: {
          Authorization: token,
        },
      });
      Router.push(`/CvWrite?id=${res.data.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      applyBtn();
      return;
    }
    try {
      (async () => {
        const ires = await axios.get(userinfo, {
          headers: { Authorization: token },
        });
        const res = await axios.get(CvMain, {
          headers: { Authorization: token },
        });
        setUserInfo(ires.data.data);
        setResumeList(res.data.data);
      })();
    } catch (err) {
      console.warn(err);
    }
  }, []);

  if (!resumeList || !userInfo) {
    return (
      <WdApplyWrap ref={hRef}>
        <Loading />
      </WdApplyWrap>
    );
  }

  return (
    <WdApplyWrap ref={hRef}>
      <WDApplyTitle>
        <h2>지원하기</h2>
        <WDSubBtn onClick={applyBtn}>뒤로</WDSubBtn>
      </WDApplyTitle>
      <WDApplyBody>
        <WDApplyBodyContainer>
          <h2>지원정보</h2>
          <WDApplyInfo>
            <WDApplyInputWrap>
              <h4>이름</h4>
              <input type="text" value={userInfo.name} />
            </WDApplyInputWrap>
            <WDApplyInputWrap>
              <h4>이메일</h4>
              <input type="text" value={userInfo.email} />
            </WDApplyInputWrap>
            <WDApplyInputWrap>
              <h4>연락처</h4>
              <input type="text" value={userInfo.contact} />
            </WDApplyInputWrap>
          </WDApplyInfo>
          <WDApplyAddResumeTitle>
            첨부파일
            <WDSubBtn style={{ color: "#258bf7" }}>+ 파일 업로드</WDSubBtn>
          </WDApplyAddResumeTitle>
          {resumeList.map((item) => (
            <ResumeList
              key={item.id}
              item={item}
              setPickedResume={setPickedResume}
              pickedResume={pickedResume}
            />
          ))}
          <AddNewResume onClick={makeNewResume}>새 이력서 작성</AddNewResume>
          <WDApplyText>
            원티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.
          </WDApplyText>
        </WDApplyBodyContainer>
        <WDApplySubmit isOn={pickedResume} onClick={submit}>
          제출하기
        </WDApplySubmit>
      </WDApplyBody>
    </WdApplyWrap>
  );
};

export default withRouter(WdApply);

const WdApplyWrap = styled.div`
  border-radius: 3px 3px 0 0;
  border: 1px solid #e1e2e3;
`;

const WDApplyTitle = styled.div`
  position: relative;
  background: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e2e3;
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    line-height: 22px;
  }
`;

const WDSubBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
`;

const WDApplyBody = styled.div`
  min-height: 390px;
  max-height: 620px;
  padding: 20px 0 0;
  overflow-y: scroll;
`;

const WDApplyBodyContainer = styled.div`
  padding: 0 20px;
  h2 {
    border-left: 2px solid #258bf7;
    padding-left: 20px;
    margin: 0 -20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
`;

const WDApplyInfo = styled.div`
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
`;

const WDApplyInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e1e2e3;
  margin-bottom: 5px;
  h4 {
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    width: 80px;
    color: #333;
  }

  input {
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    width: calc(100% - 80px);
    height: 50px;
    padding: 0;
    border: none;
    border-bottom: 1px solid #e1e2e3;
  }
`;

const WDApplyAddResumeTitle = styled.h3`
  position: relative;
  border-left: 2px solid #258bf7;
  padding-left: 20px;
  margin: 35px -20px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

const ResumeListWrap = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #f4f5f7;
  background: #f4f5f7;
  border-radius: 2px;
  margin-bottom: 10px;
  display: felx;
  align-items: center;
`;

const ResumeListCheckBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  i {
    font-size: 30px;
    color: #e1e2e3;
    cursor: pointer;
  }
`;

const ResumeListInfoWrap = styled.div`
  width: calc(100% - 88px);
  color: #999;
`;

const ResumeTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  margin: 0 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const ResumeSubWrap = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: normal;
  text-align: left;
  color: #999;
`;

const GoResumeBtn = styled.div`
  width: 38px;
  margin: 0;
  text-align: center;
  i {
    font-size: 8px;
    color: #333;
    cursor: pointer;
  }
`;

const AddNewResume = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #999;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: normal;
  color: #333;
  cursor: pointer;
`;

const WDApplyText = styled.div`
  padding: 30px 0;
  text-align: left;
  color: #666;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.62;
  letter-spacing: normal;
`;

const WDApplySubmit = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ isOn }) => (isOn ? "#258bf7" : "#d2d2d2")};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
