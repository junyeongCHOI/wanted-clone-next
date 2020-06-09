import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilterBox = ({ query }) => {
  const [sort, setSort] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [career, setCareer] = useState("");

  useEffect(() => {
    switch (query.sort_by) {
      case "latest":
        setSort("최신순");
        break;
      case "popularity":
        setSort("인기순");
        break;
      case "compensation":
        setSort("보상금순");
        break;
      default:
        setSort("최신순");
        break;
    }
    switch (query.country) {
      case "all":
        setCountry("전체");
        break;
      default:
        setCountry(query.country);
        break;
    }
    switch (query.city) {
      case "all":
        setCity("전체");
        break;
      default:
        setCity(query.city);
        break;
    }
    switch (query.city) {
      case "all":
        setCity("전체");
        break;
      default:
        setCity(query.city);
        break;
    }
    switch (query.year) {
      case "-1":
        setCareer("전체");
        break;
      case "0":
        setCareer("신입");
        break;
      default:
        setCareer(`${query.year} 년`);
        break;
    }
  }, [query]);
  return (
    <FilterBoxWrap>
      <FilterBoxContainer>
        <span>{sort}</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        국가
        <span>{country}</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        지역
        <span>{city}</span>
      </FilterBoxContainer>
      <FilterBoxContainer>
        경력
        <span>{career}</span>
      </FilterBoxContainer>
    </FilterBoxWrap>
  );
};

export default FilterBox;

const FilterBoxWrap = styled.div`
  display: flex;
  padding-top: 45px;
`;

const FilterBoxContainer = styled.div`
  border-radius: 2px;
  border: 1px solid #e1e2e3;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 400;
  padding: 9px 15px;
  margin-right: 10px;

  span {
    margin-left: 3px;
    color: #2886fa;
    font-weight: 600;
  }
`;
