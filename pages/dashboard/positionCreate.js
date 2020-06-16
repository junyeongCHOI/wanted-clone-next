import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import axios from "axios";
import Loading from "../../components/Loading";
import LayoutCompany from "../../components/LayoutCompany";
import TextareaAutosize from "react-textarea-autosize";
import Calendar from "react-calendar";
import {
  spectList,
  companyregister,
  createPosition,
  createpositionLocation,
} from "../../config";

const ph =
  "예) '에이시지알'은 기업용 채용도구(인/적성검사, 구조화면접, 시뮬레이션면접, 흥미검사, 상황판단검사 등)를 개발하고 공급하는 컨설팅펌입니다. ACG(Assessment Consulting Group)는 기업의 미래를 이끌어 갈 인재를 선발, 평가, 육성하는데 필요한 정보를 제공하며, 고객에게 최상의 서비스를 제공하기 위해 항상 과학적이고 창의적인 솔루션을 연구하는 국내 최고의 컨설팅 전문가 그룹입니다.";

const positionCreate = () => {
  const nowDate = new Date(Date.now());
  nowDate.setDate(nowDate.getDate() + 3);

  const [specList, setSpectList] = useState(false);
  const [optionList, setOptionList] = useState(false);
  const [email, setEmail] = useState("");
  const [isValuable, setValuable] = useState(false);
  const [job, setJob] = useState(0);
  const [selectedOPtion, setSelectedOption] = useState([]);
  const [year, setYear] = useState([0, 1]);
  const [money, setMoney] = useState([0, 0]);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [locationa, setLocationa] = useState("");
  const [positionName, setPositionName] = useState("");
  const [positionDesc, setPositionDesc] = useState("");
  const [doing, setDoing] = useState(`• \n• `);
  const [req, setReq] = useState("• \n• ");
  const [pt, setPt] = useState("• \n• ");
  const [welfare, setWelfare] = useState("• \n• ");
  const [isActive, setActive] = useState(false);
  const [postLocation, setPostLocation] = useState({});

  const checkEmail = (currentVal) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(currentVal);
  };

  const changeEmail = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (checkEmail(val)) {
      setValuable(true);
    } else {
      setValuable(false);
    }
  };

  const postPosition = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      createpositionLocation,
      { city: "", country: "", address: postLocation },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    await axios.post(
      createPosition,
      {
        role: selectedOPtion,
        min_level: year[0],
        max_level: year[1],
        entry: year[0] === "0" && year[1] === "1" ? true : false,
        mim_wage: money[0],
        max_wage: money[1],
        expiry_date: `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`,
        always: false,
        name: positionName,
        description: positionDesc,
        responsibility: doing,
        qualification: req,
        preferred: pt,
        benefit: welfare,
        referrer: 500000,
        volunteer: 500000,
        total: 1000000,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    location.href = "/dashboard/position";
  };

  const inputMoney = (val, i) => {
    if (i === 0) {
      setMoney([val.replace(/[^0-9]/g, "").slice(0, 6), money[1]]);
    } else if (i === 1) {
      setMoney([money[0], val.replace(/[^0-9]/g, "").slice(0, 6)]);
    }
  };

  const inputYear = (val, i) => {
    if (i === 0) {
      setYear([val.replace(/[^0-9]/g, "").slice(0, 2), year[1]]);
    } else if (i === 1) {
      if (val.indexOf("n") !== -1) {
        setYear([year[0], "n"]);
      } else {
        setYear([year[0], val.replace(/[^0-9]/g, "").slice(0, 2)]);
      }
    }
  };

  const clickedOption = (id) => {
    if (selectedOPtion.includes(id)) {
      setSelectedOption(selectedOPtion.filter((cId) => cId !== id));
    } else {
      if (selectedOPtion.length >= 1) {
        return;
      }
      setSelectedOption([...selectedOPtion, id]);
    }
  };

  useEffect(() => {
    (async () => {
      const resSpectList = await axios.get(spectList);
      setSpectList(resSpectList.data.speclist);
      setOptionList(resSpectList.data.speclist[0].lists);
      const token = localStorage.getItem("token");
      const res = await axios.get(companyregister, {
        headers: {
          Authorization: token,
        },
      });
      const reslocation = await axios.get(createpositionLocation, {
        headers: {
          Authorization: token,
        },
      });
      setPostLocation(
        reslocation.data.company.filter((item) => item.represent)
      );
      setLocationa(res.data.company[0].workplace);
    })();
  }, []);

  if (!specList || !optionList) {
    return (
      <>
        <Head>
          <title>Wanted from Employers</title>
        </Head>
        <CreateWrap>
          <Loading />
        </CreateWrap>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany loggedin footer={false}>
        <CreateWrap>
          <h2>포지션 추가</h2>
          <Container>
            <ContextWrap>
              <h3>직군 / 직무</h3>
              <SpecInputWrap>
                <SelectDownBtn />
                <SpectSelectBox
                  onChange={(e) => {
                    setOptionList(
                      specList[e.target.options.selectedIndex].lists
                    );
                    setJob(e.target.value);
                    setSelectedOption([]);
                  }}
                >
                  {specList.map((item, idx) => (
                    <option key={idx} value={item.title.id}>
                      {item.title.name}
                    </option>
                  ))}
                </SpectSelectBox>
              </SpecInputWrap>
              <SpecWrap>
                {optionList.map((item) => (
                  <OptionItem
                    key={item.id}
                    onClick={() => clickedOption(item.id)}
                    isActive={selectedOPtion.includes(item.id)}
                  >
                    {item.name}
                  </OptionItem>
                ))}
              </SpecWrap>
              <h4>
                포지션이 다른 경우 하나씩 추가해야 합니다. (예 - iOS 개발자,
                Andorid 개발자 2개의 포지션을 채용 해야 하는 경우, 2번 따로
                작성)
                <br />
                <br /> 직무를 잘 나타내는 태그를 선택해주세요. (1개)
              </h4>
              <h3 style={{ marginTop: "40px" }}>경력</h3>
              <h4>
                인턴 포지션: 등록 불가 / 계약직 포지션: 계약 기간 1년 이상 등록
                가능 <br />* 동일한 포지션에 대해 신입/경력을 모두 채용하는 경우
                경력을 0~n년으로 입력해주세요.
                <br />
                신입을 채용하는 경우 경력을 0~1년으로 입력해주세요.
              </h4>
              <CarrerWrap>
                <CareerInput
                  value={year[0]}
                  onChange={(e) => inputYear(e.target.value, 0)}
                />
                <h5>~</h5>
                <CareerInput
                  value={year[1]}
                  onChange={(e) => inputYear(e.target.value, 1)}
                />
                <h5>년</h5>
              </CarrerWrap>
              <h3 style={{ marginTop: "40px" }}>
                채용시 예상 연봉 (최소~최대)
              </h3>
              <h4>
                연봉 정보는 통계 자료로만 쓰이며, 개별 연봉 정보는 절대 공개되지
                않습니다.
              </h4>
              <CarrerWrap style={{ justifyContent: "start" }}>
                <CareerInput
                  style={{ width: "150px" }}
                  value={money[0]}
                  onChange={(e) => inputMoney(e.target.value, 0)}
                />
                <h5>~</h5>
                <CareerInput
                  style={{ width: "150px" }}
                  value={money[1]}
                  onChange={(e) => inputMoney(e.target.value, 1)}
                />
                <h5>만원</h5>
              </CarrerWrap>
              <h3>마감일</h3>
              <CalendarCotainer
                onClick={() => setCalendarOpen(!isCalendarOpen)}
                isCalendarOpen={isCalendarOpen}
              >
                <i className="xi-calendar" />
                {`${date.getFullYear()} . ${
                  date.getMonth() + 1
                } . ${date.getDate()}`}
              </CalendarCotainer>
              <CalendarPosition>
                <CalendarWrap>
                  {isCalendarOpen && (
                    <Calendar
                      minDate={nowDate}
                      onChange={(date) => {
                        setDate(date);
                        setCalendarOpen(false);
                      }}
                      value={date}
                      maxLength={100}
                    />
                  )}
                </CalendarWrap>
              </CalendarPosition>
              <h3>근무지</h3>
              <CareerInput
                style={{ width: "100%", backgroundColor: "#e1e2e3" }}
                value={locationa}
              />
              <PositionInfoWrap>
                <h3>포지션명</h3>
                <CareerInput
                  style={{ width: "100%", marginBottom: "20px" }}
                  onChange={(e) => setPositionName(e.target.value)}
                  value={positionName}
                  maxLength={100}
                />
                <h3>포지션 공고∙서론 (텍스트만 입력 가능)</h3>
                <TextArea
                  placeholder={ph}
                  onChange={(e) => setPositionDesc(e.target.value)}
                  value={positionDesc}
                  minRows={4}
                />
                <h3>주요업무</h3>
                <TextArea
                  onChange={(e) => setDoing(e.target.value)}
                  value={doing}
                  minRows={2}
                />
                <h3>자격요건</h3>
                <TextArea
                  onChange={(e) => setReq(e.target.value)}
                  value={req}
                  minRows={2}
                />
                <h3>우대사항</h3>
                <TextArea
                  onChange={(e) => setPt(e.target.value)}
                  value={pt}
                  minRows={2}
                />
                <h3>혜택 및 복지</h3>
                <TextArea
                  onChange={(e) => setWelfare(e.target.value)}
                  value={welfare}
                  minRows={2}
                />
              </PositionInfoWrap>
            </ContextWrap>
            <EmailWrap>
              <h2>지원 알림 이메일(관리자 추가)</h2>
              <CareerInput
                style={{ width: "100%" }}
                placeholder="example@company.com"
                value={email}
                onChange={changeEmail}
              />
              {email !== "" && !isValuable && (
                <h3>올바른 이메일 형식을 입력해주세요.</h3>
              )}
            </EmailWrap>
          </Container>
        </CreateWrap>
        <Footer>
          <FooterContainer>
            <FooterText
              isActive={isActive}
              onClick={() => setActive(!isActive)}
            >
              <i
                className={isActive ? "xi-check-square" : "xi-checkbox-blank"}
              />
              채용 성공 시,
              <span>합격자 연봉의 7% 수수료</span>가 발생함을 인지하고 이에
              동의합니다.
            </FooterText>
            <SubmitBtn isActive={isActive} onClick={postPosition}>
              작성완료
            </SubmitBtn>
          </FooterContainer>
        </Footer>
      </LayoutCompany>
    </>
  );
};

export default positionCreate;

const CreateWrap = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 150px 0 100px;

  h2 {
    line-height: 1.4;
    color: rgb(51, 51, 51);
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 34px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContextWrap = styled.div`
  line-height: 1.4;
  width: 63%;
  h3 {
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h4 {
    color: #b5b5b5;
    font-size: 14px;
    margin: 10px 0;
  }
`;

const EmailWrap = styled.div`
  width: 32%;

  h2 {
    color: #757575;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h3 {
    color: #b5b5b5;
    font-size: 14px;
    margin: 10px 0;
  }
`;

const SpecInputWrap = styled.div`
  width: 100%;
  position: relative;
`;

const SpectSelectBox = styled.select`
  width: 100%;
  padding: 14px 20px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 3px;
  border: 1px solid rgb(219, 219, 219);
  background-color: #ffffff;
  cursor: pointer;
`;

const SpecWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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

const OptionItem = styled.div`
  margin: 5px 10px 5px 0;
  padding: 8px 15px;
  color: #3b3d40;
  font-weight: 400;
  border: 1px solid #d1d1d1;
  border-radius: 0;
  background-color: #f8f8f8;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.3")};
`;

const CarrerWrap = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h5 {
    font-size: 14px;
    color: rgb(51, 51, 51);
    margin: 0 10px;
  }
`;

const CareerInput = styled.input`
  width: 60px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  line-height: 22px;
  border-radius: 3px;
  border: 1px solid rgb(219, 219, 219);
  padding: 14px 15px;
  outline: none !important;
`;

const CalendarCotainer = styled.div`
  width: 300px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  line-height: 22px;
  border-radius: 3px;
  border: 1px solid
    ${({ isCalendarOpen }) => (isCalendarOpen ? "#36f" : "rgb(219, 219, 219)")};
  padding: 14px 15px;
  outline: none !important;
  position: relative;
  cursor: pointer;

  i {
    position: absolute;
    right: 15px;
    font-size: 18px;
  }
`;

const CalendarPosition = styled.div`
  width: 300px;
  position: relative;
  margin-bottom: 20px;
`;

const CalendarWrap = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const PositionInfoWrap = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 20px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  line-height: 22px;
  border-radius: 3px;
  border: 1px solid rgb(219, 219, 219);
  padding: 14px 15px;
  outline: none !important;
`;

const Footer = styled.footer`
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  padding: 10px 5px;
  margin: 0 auto;
`;

const SubmitBtn = styled.div`
  width: 184px;
  height: 50px;
  margin: 0 5px;
  line-height: 50px;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid ${({ isActive }) => (isActive ? "#258bf7" : "#e1e2e3")};
  text-align: center;
  color: ${({ isActive }) => (isActive ? "#fff" : "#757575")};
  background-color: ${({ isActive }) => (isActive ? "#258bf7" : "#e1e2e3")};
  border-radius: 25px;
  cursor: pointer;
`;

const FooterText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  cursor: pointer;

  span {
    color: #ff0000;
  }

  i {
    margin-right: 10px;
    color: ${({ isActive }) => (isActive ? "#258bf7" : "#333")};
  }
`;
