import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Router, { withRouter } from "next/router";
import Loading from "../Loading";
import { spectList, getprofileSpec } from "../../config";

const ProfileSpecialty = ({ router }) => {
  const [listData, setListData] = useState(false);
  const [specList, setSpectList] = useState(false);
  const [job, setJob] = useState(0);
  const [selectedOPtion, setSelectedOption] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(1);
  const [money, setMomey] = useState(0);
  const [skill, setSkill] = useState("");

  const submit = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `${getprofileSpec}/${router.query.id}`,
      {
        job_category: job,
        role: selectedOPtion,
        matchup_career: selectedYear,
        income: money,
        skill:
          skill.split(",").map((sk) => sk.trim()).length === 1 &&
          skill.split(",").map((sk) => sk.trim())[0] === ""
            ? []
            : skill.split(",").map((sk) => sk.trim()),
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    Router.push("/profile?match=profile");
  };

  const checkNum = (e) => {
    setMomey(e.target.value.replace(/[^0-9]/g, "").slice(0, 6));
  };

  const clickedOption = (id) => {
    if (selectedOPtion.includes(id)) {
      setSelectedOption(selectedOPtion.filter((cId) => cId !== id));
    } else {
      setSelectedOption([...selectedOPtion, id]);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(spectList, {
        headers: {
          Authorization: token,
        },
      });
      const gres = await axios.get(`${getprofileSpec}/${router.query.id}`, {
        headers: {
          Authorization: token,
        },
      });
      if (gres.data.data) {
        setListData(res.data.speclist);
        setYearList(res.data.year);
        setSpectList(
          res.data.speclist.filter(
            (item, idx) => item.title.id === gres.data.data.job_category
          )[0].lists
        );
        setJob(gres.data.data.job_category);
        setSelectedOption(gres.data.data.role);
        setSelectedYear(gres.data.data.matchup_career);
        setMomey(gres.data.data.income);
        setSkill(gres.data.data.skill.join(","));
      } else {
        setJob(1);
        setYearList(res.data.year);
        setListData(res.data.speclist);
        setSpectList(res.data.speclist[0].lists);
      }
    })();
  }, []);

  if (!listData || !specList) {
    return (
      <ProfileSpecialtyWrap>
        <Loading />
      </ProfileSpecialtyWrap>
    );
  }

  return (
    <ProfileSpecialtyWrap>
      <header>전문분야 설정</header>
      <SpecInputWrap>
        <h2>직군</h2>
        <SelectDownBtn />
        <SpecSelectBox
          value={job}
          onChange={(e) => {
            setSpectList(listData[e.target.options.selectedIndex].lists);
            setJob(e.target.value);
            setSelectedOption([]);
          }}
        >
          {listData.map((item, idx) => (
            <option key={idx} value={item.title.id}>
              {item.title.name}
            </option>
          ))}
        </SpecSelectBox>
      </SpecInputWrap>
      <SpecInputWrap>
        <h2>직무</h2>
        <SelectOptionWrap>
          {specList.map((item) => (
            <OptionItem
              key={item.id}
              onClick={() => clickedOption(item.id)}
              isActive={selectedOPtion.includes(item.id)}
            >
              {item.name}
            </OptionItem>
          ))}
        </SelectOptionWrap>
      </SpecInputWrap>
      <SpecInputWrap>
        <h2>경력</h2>
        <SelectDownBtn />
        <SpecSelectBox
          defaultValue={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
          }}
        >
          {yearList.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.year}
            </option>
          ))}
        </SpecSelectBox>
      </SpecInputWrap>
      <ModifyInputWrap>
        <InputWrap>
          <InputSubTitle>만원</InputSubTitle>
          <InputTitle>현재 연봉</InputTitle>
          <ModifyInput value={money} onChange={checkNum} />
        </InputWrap>
        <InputWrap>
          <InputTitle>스킬</InputTitle>
          <ModifyInput
            placeholder=", 으로 구분"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </InputWrap>
      </ModifyInputWrap>
      <ModifyBtnWrap>
        <ModifyBtn onClick={submit}>확인</ModifyBtn>
      </ModifyBtnWrap>
    </ProfileSpecialtyWrap>
  );
};

export default withRouter(ProfileSpecialty);

const ProfileSpecialtyWrap = styled.div`
  padding: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 3px;
  background-color: #fff;

  header {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 60px;
  }
`;

const SpecInputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h2 {
    width: 150px;
    color: #999;
    font-size: 16px;
  }
`;

const SpecSelectBox = styled.select`
  width: calc(100% - 150px);
  padding: 14px 20px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  border: 0;
  border-radius: 3px;
  background-color: #f8f8fa;
  cursor: pointer;
`;

const SelectDownBtn = styled.div`
  content: "";
  top: 50%;
  right: 20px;
  position: absolute;
  transform: translateY(-50%);
  border-top: 6px solid #999;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
`;

const SelectOptionWrap = styled.div`
  width: calc(100% - 150px);
  display: felx;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const OptionItem = styled.div`
  margin: 5px;
  padding: 8px 15px;
  color: #3b3d40;
  font-weight: 400;
  border: 1px solid #d1d1d1;
  border-radius: 0;
  background-color: #f8f8f8;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.3")};
`;

const ModifyBtnWrap = styled.div`
  display: felx;
  justify-content: end;
  margin-top: 60px;
`;

const ModifyBtn = styled.div`
  width: 190px;
  height: 50px;
  border-radius: 3px;
  background-color: #258bf7;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

const ModifyInputWrap = styled.div`
  padding: 80px 0 0;
`;

const InputWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const InputTitle = styled.div`
  width: 150px;
  color: #999;
  font-size: 16px;
  font-weight: 500;
  padding-right: 40px;
`;

const InputSubTitle = styled.div`
  position: absolute;
  color: #999;
  font-size: 16px;
  font-weight: 500;
  right: 0px;
  top: 40px;
`;

const ModifyInput = styled.input`
  width: calc(100% - 150px);
  padding: 12px 0;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  border-bottom: 1px solid #e1e2e3;
`;
