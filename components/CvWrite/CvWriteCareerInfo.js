import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import {
  pushIsWorkingBtn,
  typingCStartYdate,
  typingCStartMdate,
  typingCEndYdate,
  typingCEndMdate,
  typingCWCompnay,
  typingCWPosition,
  addNewProject,
} from "../../actions";
import CvWriteCareerResult from "./CvWriteCareerResult";
import { creatCvResult } from "../../config";

const CvWriteCareerInfo = ({
  UIdx,
  data,
  pushIsWorkingBtn,
  typingCStartYdate,
  typingCStartMdate,
  typingCEndYdate,
  typingCEndMdate,
  typingCWCompnay,
  typingCWPosition,
  addNewProject,
  deleteCareer,
  getData,
}) => {
  const delAddNewProjectBtn = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`${creatCvResult}/${data[UIdx].id}`, {
        headers: {
          Authorization: token,
        },
        data: {
          id,
        },
      });
      getData();
    } catch (err) {
      console.warn(err);
    }
  };

  const pushAddNewProjectBtn = async (e) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${creatCvResult}/${data[UIdx].id}`, {
        headers: {
          Authorization: token,
        },
      });
      addNewProject(res.data.data.id, UIdx, res.data.data.career_id);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <CvWriteCareerInfoWrap>
      <CWCDateSide>
        <DateTime>
          <DateTimeInput
            placeholder="YYYY"
            value={data[UIdx].start[0]}
            type="text"
            maxLength="4"
            onChange={(e) => typingCStartYdate(e.target.value, UIdx)}
          />
          .
          <DateTimeInput
            placeholder="MM"
            value={data[UIdx].start[1]}
            type="text"
            maxLength="2"
            onChange={(e) => typingCStartMdate(e.target.value, UIdx)}
          />
          <DateDisplayWrap style={{ display: data[UIdx].is_working && "none" }}>
            -
            <DateTimeInput
              placeholder="YYYY"
              value={data[UIdx].end[0]}
              type="text"
              maxLength="4"
              onChange={(e) => typingCEndYdate(e.target.value, UIdx)}
            />
            .
            <DateTimeInput
              placeholder="MM"
              value={data[UIdx].end[1]}
              type="text"
              maxLength="2"
              onChange={(e) => typingCEndMdate(e.target.value, UIdx)}
            />
          </DateDisplayWrap>
        </DateTime>
        <CheckBoxWrap onClick={() => pushIsWorkingBtn(UIdx)}>
          <DateCheckBox>
            <i
              className={
                data[UIdx].is_working ? "xi-check-square" : "xi-checkbox-blank"
              }
              style={{
                color: data[UIdx].is_working ? "#176fd8" : "rgba(0, 0, 0, 0.4)",
              }}
            />
          </DateCheckBox>
          현재 재직중
        </CheckBoxWrap>
      </CWCDateSide>
      <CWCInfoSide>
        <DeleteCBtn>
          <i
            className="xi-close-min"
            onClick={() => deleteCareer(data[UIdx].id)}
          />
        </DeleteCBtn>
        <CWCTitle
          placeholder="회사명"
          value={data[UIdx].company}
          type="text"
          maxLength="100"
          onChange={(e) => typingCWCompnay(e.target.value, UIdx)}
        />
        <CWCSubTitle
          placeholder="부서명/직책"
          value={data[UIdx].position}
          type="text"
          maxLength="80"
          onChange={(e) => typingCWPosition(e.target.value, UIdx)}
        />
        <AddMoreInfo onClick={pushAddNewProjectBtn}>
          + 주요 성과 추가
        </AddMoreInfo>
        {data[UIdx].result.map((data, idx) => (
          <CvWriteCareerResult
            key={idx}
            UIdx={UIdx}
            idx={idx}
            delAddNewProjectBtn={delAddNewProjectBtn}
          />
        ))}
      </CWCInfoSide>
    </CvWriteCareerInfoWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.typedCvCareer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushIsWorkingBtn: (idx) => dispatch(pushIsWorkingBtn(idx)),
    typingCStartYdate: (e, idx) => dispatch(typingCStartYdate(e, idx)),
    typingCStartMdate: (e, idx) => dispatch(typingCStartMdate(e, idx)),
    typingCEndYdate: (e, idx) => dispatch(typingCEndYdate(e, idx)),
    typingCEndMdate: (e, idx) => dispatch(typingCEndMdate(e, idx)),
    typingCWCompnay: (e, idx) => dispatch(typingCWCompnay(e, idx)),
    typingCWPosition: (e, idx) => dispatch(typingCWPosition(e, idx)),
    addNewProject: (id, idx, career_id) =>
      dispatch(addNewProject(id, idx, career_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvWriteCareerInfo);

const CvWriteCareerInfoWrap = styled.div`
  display: flex;
  padding: 30px;
`;

const CWCDateSide = styled.div`
  width: 25%;
`;

const DateTime = styled.div`
  display: felx;
  color: #555;
`;

const DateTimeInput = styled.input`
  text-align: center;
  width: 36px;
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857143;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CheckBoxWrap = styled.div`
  display: felx;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const DateCheckBox = styled.div`
  margin-right: 5px;
  font-size: 12px;
`;

const CWCInfoSide = styled.div`
  position: relative;
  width: 75%;
`;

const CWCInput = styled.input`
  margin-bottom: 3px;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto;
  color: #3b3d40;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CWCTitle = styled(CWCInput)`
  font-size: 20px;
  font-weight: 600;
`;

const CWCSubTitle = styled(CWCInput)`
  font-size: 16px;
  font-weight: 600;
`;

const AddMoreInfo = styled.div`
  width: 100%;
  padding: 30px 0;
  font-size: 18px;
  color: #176fd8;
  cursor: pointer;
`;

const DateDisplayWrap = styled.div`
  display: flex;
`;

const DeleteCBtn = styled.div`
  position: absolute;
  font-size: 24px;
  color: #d1d1d1;
  top: 10px;
  right: 10px;
  padding: 7px;
  cursor: pointer;
  &:hover {
    color: #176fd8;
  }
`;
