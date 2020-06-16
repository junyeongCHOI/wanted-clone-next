import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import qs from "qs";
import Pagination from "rc-pagination";
import Head from "next/head";
import LayoutCompany from "../../components/LayoutCompany";
import Slider, { Range } from "rc-slider";
import axios from "axios";
import { filterData, getDashboardMatchup } from "../../config";
import Loading from "../../components/Loading";
import MatchupItem from "../../components/Dashboard/MatchupItem";

const rangeSettings = {
  min: 0,
  max: 20,
  step: 1,
  allowCross: false,
  defaultValue: [0, 20],
  pushable: 1,
};

const LIMIT = 10;

const matchup = ({ router }) => {
  const [filterDropdonw, setFilterDropDown] = useState([false, false]);
  const [sliderVal, setSliderVal] = useState([0, 20]);
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [listData, setListData] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [total_amount, settotal_amount] = useState(0);

  const itemRender = useCallback(
    (current, type, element) => {
      if (type === "page") {
        return <PageBtn isOn={current === pageNum}>{current}</PageBtn>;
      }
      if (type === "prev") {
        return <PagiBtn>이전</PagiBtn>;
      }
      if (type === "next") {
        return <PagiBtn next>다음</PagiBtn>;
      }
      return <PageBtn>...</PageBtn>;
    },
    [pageNum]
  );

  const getPage = useCallback((page) => {
    setPageNum(page);
  });

  const clickedMenu = (listNum) => {
    Router.push({
      pathname: "/dashboard/matchup",
      query: {
        ...router.query,
        resume_list: listNum,
      },
    });
  };

  const submitFilter = () => {
    setFilterDropDown([false, false]);
    Router.push({
      pathname: "/dashboard/matchup",
      query: {
        ...router.query,
        country: country,
        limit: LIMIT,
        year_from: sliderVal[0],
        year_to: sliderVal[1],
        keyword: keyword,
      },
    });
  };

  const checkCountry = (val) => {
    if (val === "all") {
      setCountry("all");
    } else if (country.includes(val)) {
      setCountry(country.filter((currentVal) => currentVal !== val));
    } else {
      if (country === "all") {
        setCountry([val]);
      } else {
        setCountry([...country, val]);
      }
    }
  };

  const filterDown = (e, i) => {
    e.stopPropagation();
    if (i === 1) {
      setFilterDropDown([!filterDropdonw[0], false]);
    } else if (i === 2) {
      setFilterDropDown([false, !filterDropdonw[1]]);
    }
  };

  const onSliderChange = (val) => {
    setSliderVal(val);
  };

  useEffect(() => {
    if (country.length === 5 || country.length === 0) {
      setCountry("all");
    }
  }, [country]);

  useEffect(() => {
    const { country, year_from, year_to, resume_list } = router.query;
    if (!country || !year_from || !year_to || !resume_list) {
      Router.push(
        "/dashboard/matchup?country=한국&year_from=0&year_to=20&keyword=&resume_list=-1"
      );
    } else {
      const token = localStorage.getItem("token");
      // getDashboardMatchup
      (async () => {
        setListData(false);
        const res = await axios.get(getDashboardMatchup, {
          params: {
            ...router.query,
            offset: (pageNum - 1) * LIMIT,
            limit: LIMIT,
          },
          headers: {
            Authorization: token,
          },
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        });
        setListData(res.data.resume_search);
        settotal_amount(res.data.total_amount);
      })();
    }
  }, [router.query, pageNum]);

  useEffect(() => {
    (async () => {
      const [res] = await Promise.all([axios.get(filterData)]);
      setCountryList(res.data.country_city);
    })();
  }, []);

  const { resume_list } = router.query;
  return (
    <>
      <Head>
        <title>Wanted from Employers</title>
      </Head>
      <LayoutCompany loggedin>
        <MatchupWrap>
          <Banner>
            <p>매치업 무제한 요금제(매무요) 출시! 매무요는 채용수수료가 5%</p>
          </Banner>
          <FilterWrap>
            <FilterContainer>
              <SearchWrap>
                <i className="xi-search" />
                <SearchInput
                  placeholder="띄어쓰기로 중복검색 가능(회사명, 학교, 스킬 검색)"
                  value={keyword}
                  onChange={useCallback((e) => setKeyword(e.target.value), [])}
                />
              </SearchWrap>
              <FilterBoxWrap>
                <FilterBox isDown={filterDropdonw[0]}>
                  <span onClick={(e) => filterDown(e, 1)}>
                    {country === "all" ? "전체" : country}
                    <i className="xi-caret-down-min" />
                  </span>
                  <FilterDrop style={{ display: filterDropdonw[0] || "none" }}>
                    <FilterConItem
                      main
                      isOn={country === "all"}
                      onClick={() => setCountry("all")}
                    >
                      <i
                        className={`${
                          country === "all"
                            ? "xi-check-square"
                            : "xi-checkbox-blank"
                        }`}
                      />
                      전체
                    </FilterConItem>
                    {countryList
                      .slice(0, countryList.length - 1)
                      .map((item) => (
                        <FilterConItem
                          key={item.country}
                          isOn={country.includes(item.country)}
                          onClick={() => checkCountry(item.country)}
                        >
                          <i
                            className={`${
                              country.includes(item.country)
                                ? "xi-check-square"
                                : "xi-checkbox-blank"
                            }`}
                          />
                          {item.country}
                        </FilterConItem>
                      ))}
                  </FilterDrop>
                </FilterBox>
                <FilterBox isDown={filterDropdonw[1]}>
                  <span onClick={(e) => filterDown(e, 2)}>
                    {sliderVal[0] === 0 && sliderVal[1] === 20
                      ? "경력 전체"
                      : `${sliderVal[0]} ~ ${sliderVal[1]}`}
                    <i className="xi-caret-down-min" />
                  </span>
                  <FilterDrop
                    slider
                    style={{ display: filterDropdonw[1] || "none" }}
                  >
                    <SliderNumWrap>
                      <h2>{sliderVal[0]}</h2>
                      <h2>{sliderVal[1]}</h2>
                    </SliderNumWrap>
                    <Range {...rangeSettings} onChange={onSliderChange} />
                  </FilterDrop>
                </FilterBox>
                <FilterBtn onClick={submitFilter}>검색하기</FilterBtn>
              </FilterBoxWrap>
            </FilterContainer>
          </FilterWrap>
          <MatchupContainer>
            <MenuSide>
              <h2>매치업 소개</h2>
              <GoService>서비스 결제하기</GoService>
              <MenuItem
                onClick={() => clickedMenu(-1)}
                isOn={resume_list == -1}
              >
                목록 전체
              </MenuItem>
              <MenuItem onClick={() => clickedMenu(1)} isOn={resume_list == 1}>
                요청 후 받은 이력서
              </MenuItem>
              <MenuItem onClick={() => clickedMenu(2)} isOn={resume_list == 2}>
                찜한 목록
              </MenuItem>
              <MenuItem onClick={() => clickedMenu(3)} isOn={resume_list == 3}>
                미열람 목록
              </MenuItem>
              <MenuItem onClick={() => clickedMenu(4)} isOn={resume_list == 4}>
                열람한 목록
              </MenuItem>
              <MenuItem onClick={() => clickedMenu(5)} isOn={resume_list == 5}>
                면접 제안한 목록
              </MenuItem>
            </MenuSide>
            <ContextSide>
              {listData ? (
                <>
                  {listData.map((data, idx) => (
                    <MatchupItem key={idx} data={data} />
                  ))}
                  <PaginationWrap
                    total={total_amount}
                    itemRender={itemRender}
                    showTitle={false}
                    current={pageNum}
                    onChange={getPage}
                  />
                </>
              ) : (
                <Loading />
              )}
            </ContextSide>
          </MatchupContainer>
        </MatchupWrap>
      </LayoutCompany>
    </>
  );
};

export default withRouter(matchup);

const MatchupWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(244, 244, 244);
  padding-top: 100px;
`;

const ContextSide = styled.div`
  width: calc(100% - 270px);
  margin-left: 20px;
`;

const MatchupContainer = styled.div`
  padding-top: 50px;
  width: 87.73%;
  max-width: 1060px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
`;

const Banner = styled.div`
  height: 54px;
  background-image: linear-gradient(to right, #6684fd 0%, #7d5af0);
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;

  p {
    width: 1060px;
    margin: 0px auto;
  }
`;

const FilterWrap = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 0px 0px;
  border-top: 1px solid rgb(236, 236, 236);
`;

const FilterContainer = styled.div`
  width: 87.73%;
  max-width: 1060px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 500px;
  padding: 0 30px 0 60px;
  height: 50px;
  color: rgb(51, 51, 51);
  font-size: 14px;
`;

const SearchWrap = styled.div`
  position: relative;
  background-color: rgb(242, 244, 247);
  border: 1px solid rgb(225, 227, 231);
  border-radius: 50px;

  i {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 30px;
    font-size: 16px;
    color: rgb(51, 51, 51);
  }

  ${SearchInput}:focus {
    border: 1px solid #6684fd;
    border-radius: 50px;
  }
`;

const MenuSide = styled.div`
  width: 250px;
  padding: 0 0 30px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: rgb(51, 102, 255);
    margin-bottom: 18px;
  }
`;

const GoService = styled.div`
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-weight: 600;
  background-image: linear-gradient(
    to left,
    rgb(129, 89, 234),
    rgb(96, 147, 253)
  );
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  height: 67px;
  border-radius: 3px;
  line-height: 67px;
  text-align: center;
`;

const MenuItem = styled.div`
  display: block;
  color: ${({ isOn }) => (isOn ? "#36f" : "rgb(17, 17, 17)")};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin: 20px 0;
`;

const FilterBoxWrap = styled.div`
  position: relative;
  width: calc(100% - 550px);
  display: felx;
  justify-content: space-between;
`;

const FilterBtn = styled.div`
  width: 31%;
  height: 50px;
  background-image: linear-gradient(to right, #6684fd 0%, #7d5af0);
  text-align: center;
  line-height: 50px;
  border-radius: 9999px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

const FilterBox = styled.div`
  width: 31%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(85, 85, 85);
  cursor: pointer;

  span {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }

  i {
    transform: ${({ isDown }) => (isDown ? "rotate(180deg)" : "")};
    font-size: 16px;
    color: ${({ isDown }) => (isDown ? "#36f" : "")};
    transition: all 0.15s ease;
  }
`;

const FilterDrop = styled.div`
  position: absolute;
  padding: ${({ slider }) => (slider ? "18px 25px 25px" : "0 0 5px")};
  transform: translate(0, 100%);
  bottom: 0px;
  z-index: 500;
  min-width: 31%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
  color: rgb(119, 119, 119);
  border: 1px solid rgb(225, 226, 227);
`;

const SliderNumWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FilterConItem = styled.div`
  padding: ${({ main }) => (main ? "20px" : "15px 20px")};
  margin-bottom: ${({ main }) => (main ? "5px" : "0")};
  font-size: 14px;
  color: #777;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ main }) => main && "1px solid rgb(225, 226, 227)"};
  i {
    color: ${({ isOn }) => isOn && "#36f"};
    transform: none;
  }
`;

const PaginationWrap = styled(Pagination)`
  display: felx;
  justify-content: center;
  margin-top: 30px;

  li:focus {
    all: unset;
  }
`;

const PagiBtn = styled.div`
  margin: ${({ next }) => (next ? "0 0 0 10px" : "0 20px 0 0")};
  min-width: 54px;
  cursor: pointer;
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgb(225, 226, 227);
  padding: 8px 15px;
`;

const PageBtn = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ isOn }) => (isOn ? "rgb(117, 117, 117)" : "#b5b5b5")};
  border: 1px solid rgb(219, 219, 219);
  padding: 8px 15px;

  &:hover {
    color: rgb(117, 117, 117);
  }
`;
