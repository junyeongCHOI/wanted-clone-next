import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import LayoutUser from "../components/LayoutUser";
import ProfileNavMenu from "../components/Profile/ProfileNavMenu";
import ProfileNoResult from "../components/Profile/ProfileNoResult";
import { profilegetReq, profilegetLike, profilegetPro } from "../config";
import moment from "moment";

const offer = () => {
  const [listNum, setListNum] = useState(0);
  const [reqList, setReqList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [proList, setProList] = useState([]);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    if (listNum === 0) {
      setShowList([...reqList, ...likeList, ...proList]);
    } else if (listNum === 1) {
      setShowList([...likeList]);
    } else if (listNum === 2) {
      setShowList([...reqList]);
    } else if (listNum === 3) {
      setShowList([...proList]);
    } else {
      return;
    }
  }, [listNum]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const res1 = await axios.get(profilegetReq, {
        headers: {
          Authorization: token,
        },
      });
      const res2 = await axios.get(profilegetLike, {
        headers: {
          Authorization: token,
        },
      });
      const res3 = await axios.get(profilegetPro, {
        headers: {
          Authorization: token,
        },
      });
      setReqList(res1.data.is_resume_request);
      setLikeList(res2.data.companies);
      setProList(res3.data.companies);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>MatchUp, 이제 지원하지 말고 제안 받으세요!</title>
      </Head>
      <LayoutUser footer={false}>
        <OfferWrap>
          <ProfileNavMenu />
          <OfferContainer>
            <OfferInfo>
              <h2>제안받기 현황</h2>
              <h3>나를 원하는 회사</h3>
              <OfferInfoItemWrap
                isOn={listNum === 0}
                onClick={() => setListNum(0)}
              >
                전체
                <OfferInfoNumBox>
                  {[...reqList, ...likeList, ...proList].length}
                </OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap
                isOn={listNum === 1}
                onClick={() => setListNum(1)}
              >
                원해요<OfferInfoNumBox>{likeList.length}</OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap
                isOn={listNum === 2}
                onClick={() => setListNum(2)}
              >
                프로필 열람 요청
                <OfferInfoNumBox>{reqList.length}</OfferInfoNumBox>
              </OfferInfoItemWrap>
              <OfferInfoItemWrap
                isOn={listNum === 3}
                onClick={() => setListNum(3)}
              >
                받은 제안<OfferInfoNumBox>{proList.length}</OfferInfoNumBox>
              </OfferInfoItemWrap>
            </OfferInfo>
            <OfferDetailSide>
              <OfferHeader>
                <h2>회사명</h2>
                <h3>일자</h3>
              </OfferHeader>
              {showList.length === 0 ? (
                <ProfileNoResult />
              ) : (
                showList.map((item) => (
                  <ItemWrap>
                    <CompanyWrap>
                      <CompanyLogo
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      {item.name}
                    </CompanyWrap>
                    <DateWrap>
                      {moment(item.date).format("YYYY-MM-DD HH:MM")}
                    </DateWrap>
                  </ItemWrap>
                ))
              )}
            </OfferDetailSide>
          </OfferContainer>
        </OfferWrap>
      </LayoutUser>
    </>
  );
};

export default offer;

const OfferWrap = styled.div`
  min-height: 100vh;
  background-color: #f8f8fa;
`;

const OfferContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: felx;
`;

const OfferInfo = styled.aside`
  width: 250px;
  height: 500px;

  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  h3 {
    padding-bottom: 17px;
    border-bottom: 1px solid #e1e2e3;
    margin-bottom: 30px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
`;

const OfferInfoItemWrap = styled.div`
  color: ${({ isOn }) => (isOn ? "#36f" : "#333")};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.42857143;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OfferInfoNumBox = styled.div`
  min-width: 30px;
  height: 30px;
  padding: 4px 10px;
  border-radius: 3px;
  background-color: #e1e2e3;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;

const OfferDetailSide = styled.section`
  width: calc(100% - 250px);
  margin-left: 20px;
`;

const OfferHeader = styled.header`
  color: #999;
  font-size: 14px;
  display: felx;
  h2 {
    width: 65%;
    padding-left: 20px;
  }
  h3 {
    width: 35%;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
  border-bottom: 1px solid #999;
  padding: 10px;

  &::last-child {
    border-bottom: 0ch;
  }
`;

const CompanyWrap = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
`;

const DateWrap = styled.div`
  width: 35%;
`;
