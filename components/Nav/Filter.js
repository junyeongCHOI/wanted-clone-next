import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Router from "next/router";
import { MYIP, filterData } from "../../config";

const Filter = ({ isFilterOn, setFilterOn }) => {
  const [listData, setListData] = useState(false);
  const [yearData, setYearData] = useState(false);
  const [year, setYear] = useState(-1);
  const [country, setCountry] = useState("all");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("all");
  const [sort, setSort] = useState("latest");
  const [inputVal, setInputVal] = useState("");

  const goFilterBtn = () => {
    Router.push(
      `/WdList?sort_by=${sort}&year=${year}&country=${country}&city=${city}&keyword=${inputVal}`
    );
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(filterData);
      setListData(res.data.country_city);
      setYearData(res.data.career);
    })();
  }, []);

  return (
    <>
      <FilterWrap
        isFilterOn={isFilterOn}
        onMouseLeave={() => setFilterOn(false)}
      >
        <FilterContainer>
          <FilterInputWrap>
            <FilterInput
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />{" "}
            <i className="xi-search" />
          </FilterInputWrap>
          <h2>
            태그로 검색하기 <i className="xi-angle-right-min" />
          </h2>
          <SelectBoxWrap>
            <SelectBoxContainer>
              <h3>정렬</h3>
              <FilterSelectbox
                defaultValue="latest"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">최신순</option>
                <option value="popularity">인기순</option>
                <option value="compensation">보상금순</option>
              </FilterSelectbox>
            </SelectBoxContainer>
            <SelectBoxContainer>
              <h3>경력</h3>
              <FilterSelectbox onChange={(e) => setYear(e.target.value)}>
                <option value={-1}>전체</option>
                {yearData &&
                  yearData.map((item, idx) => (
                    <option key={idx} value={idx}>
                      {item}
                    </option>
                  ))}
              </FilterSelectbox>
            </SelectBoxContainer>
          </SelectBoxWrap>
          <h3>국가</h3>
          <OptionBoxWrap>
            <OptionBox
              isActive={country === "all"}
              onClick={() => setCountry("all")}
            >
              전체
            </OptionBox>
            {listData &&
              listData.map((item, idx) => (
                <OptionBox
                  key={idx}
                  isActive={item.country === country}
                  onClick={() => {
                    setCountry(item.country);
                    setCity("all");
                    setCityList(listData[idx].city);
                  }}
                >
                  {item.country}
                </OptionBox>
              ))}
          </OptionBoxWrap>
          {cityList.length !== 0 && <h3>지역</h3>}
          <OptionBoxWrap>
            <OptionBox isActive={city === "all"} onClick={() => setCity("all")}>
              전체
            </OptionBox>
            {country !== "all" &&
              cityList.map((item) => (
                <OptionBox
                  isActive={item === city}
                  onClick={() => setCity(item)}
                  key={item}
                >
                  {item}
                </OptionBox>
              ))}
          </OptionBoxWrap>
          <FilterSubMitBtn
            onClick={() => {
              setFilterOn(false);
              goFilterBtn();
            }}
          >
            적용
          </FilterSubMitBtn>
        </FilterContainer>
      </FilterWrap>
      {isFilterOn && <FilterBg />}
    </>
  );
};

export default Filter;

const FilterWrap = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  padding: 50px 0 0;
  z-index: 500;
  background-color: #fff;
  height: ${({ isFilterOn }) => (isFilterOn ? "100%" : "0%")};
  max-height: 590px;
  transition: 0.5s;
  overflow: hidden;
`;

const FilterContainer = styled.div`
  position: relative;
  width: 87.72%;
  height: 100%;
  margin: 0 auto;
  max-width: 1060px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
    line-height: 1;
    color: #268bf7;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #999;
    margin: 10px 0;
  }
`;

const ItemShowing = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}
`;

const FilterBg = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 499;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${ItemShowing} 0.35s linear;
`;

const FilterInputWrap = styled.div`
  position: relative;
  margin-top: 30px;
  i {
    position: absolute;
    font-size: 16px;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
`;

const FilterInput = styled.input`
  height: 36px;
  width: 100%;
  padding: 0 36px 0 46px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 300;
  color: #333;
  background-color: #e8e8e8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionBoxWrap = styled.div`
  width: 100%;
  display: felx;
  flex-wrap: wrap;
  margin: 10px 0 30px;
`;

const OptionBox = styled.div`
  margin-right: 9px;
  margin-bottom: 9px;
  border: 1px solid ${({ isActive }) => (isActive ? "#0092fc" : "#e1e2e3")};
  background: ${({ isActive }) => (isActive ? "#0092fc" : "#f8f8fa")};
  padding: 11px 13px;
  font-size: 15px;
  line-height: 1;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  cursor: pointer;
`;

const FilterSelectbox = styled.select`
  width: 50%;
  padding: 7px 20px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  border: 0;
  border-radius: 3px;
  background-color: #f8f8fa;
  cursor: pointer;
`;

const SelectBoxContainer = styled.div`
  width: 50%;
`;

const SelectBoxWrap = styled.div`
  display: flex;
`;

const FilterSubMitBtn = styled.div`
  position: absolute;
  color: #fff;
  bottom: 60px;
  right: 20px;
  background: #238ff4;
  text-align: center;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 20px;
  width: 100px;
  cursor: pointer;
`;
