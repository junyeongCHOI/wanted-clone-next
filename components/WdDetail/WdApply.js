import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MYIP } from "../../config";
import Loading from "../../components/Loading";

const ResumeList = ({ item }) => {
  return (
    <ResumeListWrap>
      <ResumeListCheckBox>
        {item.state === "첨부 완료" || item.state === "작성 완료" ? (
          <i className="xi-checkbox-blank" />
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
          {item.date} | {item.state}
        </ResumeSubWrap>
      </ResumeListInfoWrap>
      <GoResumeBtn>
        <i className="xi-angle-right" />
      </GoResumeBtn>
    </ResumeListWrap>
  );
};

const WdApply = ({ applyBtn, hRef }) => {
  const [resumeList, setResumeList] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      applyBtn();
      return;
    }
    try {
      (async () => {
        const res = await axios.get(`${MYIP}/static/data/cvlist.json`);
        setResumeList(res.data.cvlist);
      })();
    } catch (err) {
      console.warn(err);
    }
  }, []);

  if (!resumeList) {
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
              <input type="text" />
            </WDApplyInputWrap>
            <WDApplyInputWrap>
              <h4>이메일</h4>
              <input type="text" />
            </WDApplyInputWrap>
            <WDApplyInputWrap>
              <h4>연락처</h4>
              <input type="text" />
            </WDApplyInputWrap>
          </WDApplyInfo>
          <WDApplyAddResumeTitle>
            첨부파일
            <WDSubBtn style={{ color: "#258bf7" }}>+ 파일 업로드</WDSubBtn>
          </WDApplyAddResumeTitle>
          {resumeList.map((item) => (
            <ResumeList key={item.id} item={item} />
          ))}
          <AddNewResume>새 이력서 작성</AddNewResume>
          <WDApplyText>
            원티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.
          </WDApplyText>
        </WDApplyBodyContainer>
        <WDApplySubmit>제출하기</WDApplySubmit>
      </WDApplyBody>
    </WdApplyWrap>
  );
};

export default WdApply;

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
  background: #258bf7;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
