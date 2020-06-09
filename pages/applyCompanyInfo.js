import React from "react";
import styled from "styled-components";
import LayoutCompany from "../components/LayoutCompany";

const applyCompanyInfo = () => {
  return (
    <LayoutCompany footer={false}>
      <ApplyCompanyInfoWrap>
        <h2>회사 정보를 등록해주세요.</h2>
        <h3>
          원티드는 추천인/후보자들에게 좋은 일자리를 제공하기 위해, 다음 정보를
          리뷰하여 회사등록을 승인하고 있습니다.
        </h3>
        <InputWrap>
          <h3>회사이름</h3>
          <input placeholder="회사이름" />
        </InputWrap>
        <InputHarfWrap>
          <InputWrap isHarf>
            <h3>국가</h3>
            <input placeholder="한국" />
          </InputWrap>
          <InputWrap isHarf>
            <h3>지역</h3>
            <input placeholder="서울" />
          </InputWrap>
        </InputHarfWrap>
        <InputWrap>
          <h3>대표 주소</h3>
          <input placeholder="대표주소 입력" />
        </InputWrap>
        <InputHarfWrap>
          <InputWrap isHarf>
            <h3>사업자 등록 번호</h3>
            <input placeholder="-제외 10자리" />
          </InputWrap>
          <InputWrap isHarf>
            <h3>
              매출액/투자금액
              <span>(승인기준: 매출액/투자 유치 5억원 이상)</span>
            </h3>
            <input placeholder="매출액/투자금액 (단위: 억원)" />
          </InputWrap>
        </InputHarfWrap>
        <InputHarfWrap>
          <InputWrap isHarf>
            <h3>산업군</h3>
            <input placeholder="산업군" />
          </InputWrap>
          <InputWrap isHarf>
            <h3>
              직원수<span>(승인기준: 팀원 10명 이상)</span>
            </h3>
            <input placeholder="회사규모" />
          </InputWrap>
        </InputHarfWrap>
        <InputWrap>
          <h3>회사/ 서비스 소개</h3>
          <textarea placeholder="대표주소 입력" />
        </InputWrap>
        <InputHarfWrap>
          <InputWrap isHarf>
            <h3>설립연도</h3>
            <input placeholder="ex) 2012년" />
          </InputWrap>
          <InputWrap isHarf>
            <h3>웹사이트 주소</h3>
            <input placeholder="URL 입력 (여러개 등록시 , 로 구분)" />
          </InputWrap>
        </InputHarfWrap>
        <InputWrap>
          <h3>
            뉴스 검색 키워드
            <span>(키워드는 최대 3개까지 입력 가능합니다.)</span>
          </h3>
          <input placeholder="서비스명 혹은 브랜드명 입력" />
        </InputWrap>
        <InputWrap>
          <h3>
            가입 경로
            <span>(원티드를 추천한 기업과 추천인을 입력 해 주세요.)</span>
          </h3>
          <input placeholder="ex) 원디드랩/김OO담당자" />
        </InputWrap>
      </ApplyCompanyInfoWrap>
      <SubmitWrap>
        <SubmitContainer>
          <SubmitBtn>제출하기</SubmitBtn>
        </SubmitContainer>
      </SubmitWrap>
    </LayoutCompany>
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
