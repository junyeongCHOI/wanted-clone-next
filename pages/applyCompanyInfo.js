import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import LayoutCompany from "../components/LayoutCompany";
import axios from "axios";
import {
  companyregister,
  createcompanyyear,
  createcompanyindustry,
  createcompanyemployee,
  filterData,
} from "../config";

const applyCompanyInfo = () => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("한국");
  const [city, setCity] = useState("서울");
  const [locationa, setLocation] = useState("");
  const [regNum, setRegNum] = useState("");
  const [income, setIncome] = useState("");
  const [business, setBusiness] = useState("가사, 가정");
  const [eeNum, setEeNum] = useState("1~4명");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState("");
  const [keyword, setkeyword] = useState("");
  const [rec, setRec] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [yearlist, setYearList] = useState([]);
  const [indList, setIndList] = useState([]);
  const [eeList, setEeList] = useState([]);
  const [CCList, setCCList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const goMap = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        setLocation(data.address);
      },
      theme: {
        searchBgColor: "#36f",
        queryTextColor: "#FFFFFF",
      },
    }).open();
  };

  const submit = () => {
    try {
      (async () => {
        const token = localStorage.getItem("token");
        await axios.post(
          companyregister,
          {
            name: companyName,
            registration_number: regNum,
            revenue: income,
            country: country,
            industry: business,
            employee: eeNum,
            description: desc,
            foundation_year: year,
            email: email,
            contact_number: phone,
            website: url,
            keyword: keyword,
            recommender: rec,
            city: city,
            address: locationa,
            represent: 1,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        location.href = "/dashboard";
      })();
    } catch (err) {
      if (!alert("회사가 이미 등록 됐습니다.")) {
        location.href = "/dashboard";
      }
    }
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(filterData);
      setCCList(res.data.country_city);
      setCityList(res.data.country_city[3].city);
      const YRes = await axios(createcompanyyear);
      const IRes = await axios(createcompanyindustry);
      const ERes = await axios(createcompanyemployee);
      setYearList(YRes.data.years);
      setIndList(IRes.data.industries);
      setEeList(ERes.data.employees);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany footer={false}>
        <ApplyCompanyInfoWrap>
          <h2>회사 정보를 등록해주세요.</h2>
          <h3>
            원티드는 추천인/후보자들에게 좋은 일자리를 제공하기 위해, 다음
            정보를 리뷰하여 회사등록을 승인하고 있습니다.
          </h3>
          <InputWrap>
            <h3>회사이름</h3>
            <input
              placeholder="회사이름"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </InputWrap>
          <InputHarfWrap>
            <InputWrap isHarf>
              <h3>국가</h3>
              <SelectInputWrap>
                <DownBtn />
                <SelectBox
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setCityList(CCList[e.target.selectedIndex].city);
                  }}
                >
                  {CCList.map((item, idx) => (
                    <option key={idx} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </SelectBox>
              </SelectInputWrap>
            </InputWrap>
            <InputWrap isHarf>
              <h3>지역</h3>
              <SelectInputWrap>
                <DownBtn />
                <SelectBox
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  {cityList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </SelectBox>
              </SelectInputWrap>
            </InputWrap>
          </InputHarfWrap>
          <InputWrap>
            <h3>대표 주소</h3>
            <input
              sytle={{ cursor: "pointer" }}
              placeholder="대표주소 입력"
              value={locationa}
              onClick={goMap}
            />
          </InputWrap>
          <InputHarfWrap>
            <InputWrap isHarf>
              <h3>사업자 등록 번호</h3>
              <input
                placeholder="-제외 10자리"
                value={regNum}
                onChange={(e) =>
                  setRegNum(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </InputWrap>
            <InputWrap isHarf>
              <h3>
                매출액/투자금액
                <span>(승인기준: 매출액/투자 유치 5억원 이상)</span>
              </h3>
              <input
                placeholder="매출액/투자금액 (단위: 억원)"
                value={income}
                onChange={(e) =>
                  setIncome(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </InputWrap>
          </InputHarfWrap>
          <InputHarfWrap>
            <InputWrap isHarf>
              <h3>산업군</h3>
              <SelectInputWrap>
                <DownBtn />
                <SelectBox
                  value={business}
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                >
                  {indList.map((item, idx) => (
                    <option key={idx} value={item.industry}>
                      {item.industry}
                    </option>
                  ))}
                </SelectBox>
              </SelectInputWrap>
            </InputWrap>
            <InputWrap isHarf>
              <h3>
                직원수<span>(승인기준: 팀원 10명 이상)</span>
              </h3>
              <SelectInputWrap>
                <DownBtn />
                <SelectBox
                  value={eeNum}
                  onChange={(e) => {
                    setEeNum(e.target.value);
                  }}
                >
                  {eeList.map((item, idx) => (
                    <option key={idx} value={item.employee}>
                      {item.employee}
                    </option>
                  ))}
                </SelectBox>
              </SelectInputWrap>
            </InputWrap>
          </InputHarfWrap>
          <InputWrap>
            <h3>회사/ 서비스 소개</h3>
            <textarea
              placeholder="ex) 기업용 채용도구(인/적성검사, 구조화면접, 시뮬레이션면접, 흥미검사, 상황판단검사 등)를 개발하고 공급하는 컨설팅펌입니다. ACG(Assessment Consulting Group)는 기업의 미래를 이끌어 갈 인재를 선발, 평가, 육성하는데 필요한 정보를 제공하며, 고객에게 최상의 서비스를 제공하기 위해 항상 과학적이고 창의적인 솔루션을 연구하는 국내 최고의 컨설팅 전문가 그룹입니다."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </InputWrap>
          <InputHarfWrap>
            <InputWrap isHarf>
              <h3>설립연도</h3>
              <SelectInputWrap>
                <DownBtn />
                <SelectBox
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  {yearlist.map((item, idx) => (
                    <option key={idx} value={item.year}>
                      {item.year}
                    </option>
                  ))}
                </SelectBox>
              </SelectInputWrap>
            </InputWrap>
            <InputWrap isHarf>
              <h3>웹사이트 주소</h3>
              <input
                placeholder="URL 입력 (여러개 등록시 , 로 구분)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </InputWrap>
          </InputHarfWrap>
          <InputHarfWrap>
            <InputWrap isHarf>
              <h3>담당자 연락처</h3>
              <input
                placeholder="-제외"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputWrap>
            <InputWrap isHarf>
              <h3>정보수신 이메일</h3>
              <input
                placeholder="정보수신 이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrap>
          </InputHarfWrap>
          <InputWrap>
            <h3>
              뉴스 검색 키워드
              <span>(키워드는 최대 3개까지 입력 가능합니다.)</span>
            </h3>
            <input
              placeholder="서비스명 혹은 브랜드명 입력"
              value={keyword}
              onChange={(e) => setkeyword(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <h3>
              가입 경로
              <span>(원티드를 추천한 기업과 추천인을 입력 해 주세요.)</span>
            </h3>
            <input
              placeholder="ex) 원디드랩/김OO담당자"
              value={rec}
              onChange={(e) => setRec(e.target.value)}
            />
          </InputWrap>
        </ApplyCompanyInfoWrap>
        <SubmitWrap>
          <SubmitContainer>
            <SubmitBtn onClick={submit}>제출하기</SubmitBtn>
          </SubmitContainer>
        </SubmitWrap>
      </LayoutCompany>
    </>
  );
};

export default applyCompanyInfo;

const ApplyCompanyInfoWrap = styled.div`
  width: 87.73%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 90px 0;

  h2 {
    font-size: 26px;
    color: #333;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
  }
`;

const InputHarfWrap = styled.div`
  width: 100%;
  display: felx;
  justify-content: space-between;
`;
const InputWrap = styled.div`
  width: ${({ isHarf }) => (isHarf ? "45%" : "100%")};
  margin-bottom: 30px;
  h3 {
    margin: 10px 0;
    font-size: 16px;
    color: #000;

    span {
      font-size: 12px;
    }
  }

  input {
    color: rgb(51, 51, 51);
    font-size: 16px;
    width: 100%;
    padding: 14px 15px;
    border-radius: 3px;
    color: #000;
    border: 1px solid rgb(219, 219, 219);
    &:focus {
      border: 1px solid rgb(37, 139, 247);
    }
  }

  textarea {
    font-size: 16px;
    width: 100%;
    height: 240px;
    line-height: 22px;
    padding: 14px 15px;
    border-radius: 3px;
    color: #000;
    border: 1px solid rgb(219, 219, 219);
  }
`;

const SubmitWrap = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 500;
  padding: 10px 0;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(221, 221, 221);
`;

const SubmitContainer = styled.div`
  position: relative;
  width: 87.73%;
  height: 50px;
  max-width: 1060px;
  margin: 0 auto;
`;

const SubmitBtn = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  padding: 14px 20px;
`;

const SelectInputWrap = styled.div`
  width: 100%;
  position: relative;
`;

const SelectBox = styled.select`
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

const DownBtn = styled.div`
  content: "";
  top: 50%;
  right: 20px;
  position: absolute;
  transform: translateY(-50%);
  border-top: 6px solid #999;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
`;
