import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Router, { withRouter } from "next/router";
import LayoutCompany from "../../components/LayoutCompany";
import axios from "axios";
import {
  companyregister,
  companyinfomodify,
  getCompanyImg,
  companyImgDel,
} from "../../config";
import InputFiles from "react-input-files";

const applyCompanyInfo = ({ router }) => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [regNum, setRegNum] = useState("");
  const [income, setIncome] = useState("");
  const [business, setBusiness] = useState("");
  const [eeNum, setEeNum] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState("");
  const [keyword, setkeyword] = useState("");
  const [rec, setRec] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [imageList, setImageList] = useState([]);

  const delImg = async (id) => {
    if (imageList.length <= 2) {
      alert("이미지는 최소 2개 이상입니다.");
      return;
    }
    const token = localStorage.getItem("token");
    const res = await axios.post(
      companyImgDel,
      {
        image_id: id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    getImage();
  };

  const submitUserImage = async (e) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("img", e[0]);

    try {
      const res = await axios.post("/upload", formData);
      const imgdata = await axios.post(
        getCompanyImg,
        {
          image_url: res.data.img_name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      getImage();
    } catch (err) {
      console.error(err);
      alert("업로드에 실패했습니다.");
    }
  };

  const submit = () => {
    try {
      (async () => {
        const token = localStorage.getItem("token");
        await axios.post(
          companyinfomodify,
          {
            registration_number: regNum,
            revenue: income,
            industry: business,
            employee: eeNum,
            description: desc,
            foundation_year: year,
            email: email,
            contact_number: phone,
            website: url,
            keyword: keyword,
            address: location,
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
      console.error(err);
      location.href = "/dashboard";
    }
  };

  const getImage = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(getCompanyImg, {
      headers: {
        Authorization: token,
      },
    });
    setImageList(res.data.images);
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(companyregister, {
        headers: {
          Authorization: token,
        },
      });
      setCompanyName(res.data.company[0].name);
      setCountry(res.data.company[0].country);
      setRegNum(res.data.company[0].registration_number);
      setIncome(res.data.company[0].revenue);
      setBusiness(res.data.company[0].industry);
      setEeNum(res.data.company[0].employee);
      setDesc(res.data.company[0].description);
      setYear(res.data.company[0].foundation_year);
      setEmail(res.data.company[0].email);
      setPhone(res.data.company[0].contact_number);
      setUrl(res.data.company[0].website);
      setRec(res.data.company[0].recommender);
      setkeyword(res.data.company[0].keyword);
      setCity(res.data.company[0].city);
      setLocation(res.data.company[0].workplace);
      getImage();
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany footer={false} loggedin>
        {router.query.match === "image" ? (
          <>
            <ApplyCompanyInfoWrap>
              <NavWrap>
                <Navbtn
                  onClick={() =>
                    Router.push("/dashboard/modifycompany?match=image")
                  }
                  isOn={router.query.match === "image"}
                >
                  이미지
                </Navbtn>
                <Navbtn
                  onClick={() =>
                    Router.push("/dashboard/modifycompany?match=info")
                  }
                  isOn={router.query.match !== "image"}
                >
                  정보
                </Navbtn>
              </NavWrap>
              <ImgBoxWrap>
                {imageList.map((url) => (
                  <ImgBox
                    key={url.image}
                    style={{ backgroundImage: `url(${url.image})` }}
                  >
                    <i
                      className="xi-close-min"
                      onClick={() => delImg(url.id)}
                    />
                  </ImgBox>
                ))}
                <ImgBox>
                  <InputFiles onChange={(e) => submitUserImage(e)}>
                    <span>+</span>
                  </InputFiles>
                </ImgBox>
              </ImgBoxWrap>
            </ApplyCompanyInfoWrap>
          </>
        ) : (
          <>
            <ApplyCompanyInfoWrap>
              <NavWrap>
                <Navbtn
                  onClick={() =>
                    Router.push("/dashboard/modifycompany?match=image")
                  }
                  isOn={router.query.match === "image"}
                >
                  이미지
                </Navbtn>
                <Navbtn
                  onClick={() =>
                    Router.push("/dashboard/modifycompany?match=info")
                  }
                  isOn={router.query.match !== "image"}
                >
                  정보
                </Navbtn>
              </NavWrap>
              <h2>회사 정보</h2>
              <h3 />
              <InputWrap df>
                <h3>회사이름</h3>
                <input placeholder="회사이름" value={companyName} />
              </InputWrap>
              <InputHarfWrap>
                <InputWrap isHarf df>
                  <h3>국가</h3>
                  <input
                    placeholder="한국"
                    value={location && location[0][0]}
                  />
                </InputWrap>
                <InputWrap isHarf df>
                  <h3>지역</h3>
                  <input
                    placeholder="서울"
                    value={location && location[0][1]}
                  />
                </InputWrap>
              </InputHarfWrap>
              <InputWrap df>
                <h3>대표 주소</h3>
                <input
                  placeholder="대표주소 입력"
                  value={location && location[0][2]}
                />
              </InputWrap>
              <InputHarfWrap>
                <InputWrap isHarf>
                  <h3>사업자 등록 번호</h3>
                  <input
                    placeholder="-제외 10자리"
                    value={regNum}
                    onChange={(e) => setRegNum(e.target.value)}
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
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </InputWrap>
              </InputHarfWrap>
              <InputHarfWrap>
                <InputWrap isHarf df>
                  <h3>산업군</h3>
                  <input placeholder="산업군" value={business} />
                </InputWrap>
                <InputWrap isHarf df>
                  <h3>
                    직원수<span>(승인기준: 팀원 10명 이상)</span>
                  </h3>
                  <input placeholder="회사규모" value={eeNum} />
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
                <InputWrap isHarf df>
                  <h3>설립연도</h3>
                  <input placeholder="ex) 2012년" value={year} />
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
              <InputWrap df>
                <h3>
                  가입 경로
                  <span>(원티드를 추천한 기업과 추천인을 입력 해 주세요.)</span>
                </h3>
                <input placeholder="ex) 원디드랩/김OO담당자" value={rec} />
              </InputWrap>
            </ApplyCompanyInfoWrap>
            <SubmitWrap>
              <SubmitContainer>
                <SubmitBtn onClick={submit}>수정 완료</SubmitBtn>
              </SubmitContainer>
            </SubmitWrap>
          </>
        )}
      </LayoutCompany>
    </>
  );
};

export default withRouter(applyCompanyInfo);

const ApplyCompanyInfoWrap = styled.div`
  width: 87.73%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 150px 0 90px;

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
    background-color: ${({ df }) => (df ? "rgb(219,219,219);" : "")};

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

const Navbtn = styled.div`
  cursor: pointer;
  color: ${({ isOn }) => (isOn ? "rgb(117, 117, 117)" : "rgb(181, 181, 181)")};
  background-color: ${({ isOn }) => (isOn ? "#e1e2e3" : "rgb(255, 255, 255)")};
  font-weight: 600;
  font-size: 14px;
  margin: 0 20px 20px 0;
  border-radius: 20px;
  padding: 11px 15px;

  &:hover {
    color: rgb(117, 117, 117);
  }
`;

const NavWrap = styled.div`
  display: flex;
`;

const ImgBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgBox = styled.div`
  position: relative;
  width: 250px;
  height: 220px;
  border: 1px solid rgb(181, 181, 181);
  border-radius: 3px;
  line-height: 250px;
  font-size: 24px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 15px 15px 0;

  span {
    cursor: pointer;
  }

  i {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    cursor: pointer;
  }
`;
