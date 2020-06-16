import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import WdCard from "./WdCard";
import { Pay, getDashboardPosition } from "../../config";

const Topad = ({ week1, week2, week3, week4 }) => {
  const [itemList, setItemList] = useState([]);
  const [itemId, setItemId] = useState(false);
  const [date, setDate] = useState(false);

  const payment = async () => {
    if (itemId && date) {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        Pay,
        {
          position_id: itemId,
          start_date: date[0],
          end_date: date[1],
          position_name: "포지션 이름",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      location.href = res.data.response.redirect;
    } else {
      return;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(getDashboardPosition, {
        headers: {
          Authorization: token,
        },
      });
      setItemList(res.data.company);
    })();
  }, []);

  return (
    <TopadWrap>
      <h2>직무 상단 광고</h2>
      <span>STEP1</span>
      <h3>광고를 노출할 방문자의 포지션을 선택</h3>
      <h4>
        채용 포지션 등록시 선택한 직무 목록입니다. 현재 채용 중인 포지션이 있는
        직무에 광고를 할 수 있습니다.
      </h4>
      {itemList.length === 0 ? (
        <h5>현재 채용 중이거나, 승인 신청 중인 포지션이 없습니다.</h5>
      ) : (
        <CardWrap>
          {itemList.map((item) => (
            <WdCard
              item={item}
              key={item.id}
              setItemId={setItemId}
              itemId={itemId}
            />
          ))}
        </CardWrap>
      )}
      <Line />
      <span>STEP2</span>
      <h3>광고 일정 선택</h3>
      <EachDate onClick={() => setDate(week1)} isOn={week1 === date}>
        {week1[0]} ~ {week1[1]}
      </EachDate>
      <EachDate onClick={() => setDate(week2)} isOn={week2 === date}>
        {week2[0]} ~ {week2[1]}
      </EachDate>
      <EachDate onClick={() => setDate(week3)} isOn={week3 === date}>
        {week3[0]} ~ {week3[1]}
      </EachDate>
      <EachDate onClick={() => setDate(week4)} isOn={week4 === date}>
        {week4[0]} ~ {week4[1]}
      </EachDate>
      <Line />
      <GoPay onClick={payment}>
        <span>STEP3</span>
        <h3>
          광고 금액 확인 및 결제 <i className="xi-angle-right-min" />
        </h3>
        {itemId && date ? (
          <h6 style={{ color: "#36f" }}>결제하기</h6>
        ) : (
          <h6>포지션과 날짜를 모두 선택해주세요.</h6>
        )}
      </GoPay>
    </TopadWrap>
  );
};

export default Topad;

const TopadWrap = styled.div`
  width: 100%;
  padding-bottom: 50px;

  h2 {
    line-height: 1.4;
    color: rgb(51, 51, 51);
    margin: 0 0 20px;
    font-size: 26px;
    font-weight: 700;
  }

  span {
    width: 44px;
    height: 16px;
    display: inline-block;
    background-color: rgb(37, 139, 247);
    margin-right: 10px;
    font-size: 10px;
    color: rgb(255, 255, 255);
    line-height: 18px;
    text-align: center;
    font-weight: 600;
    border-radius: 3px;
  }

  h3 {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: rgb(51, 51, 51);
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    margin: 12px 0px 20px;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    color: rgb(204, 204, 204);
    margin: 172px 0px;
    text-align: center;
  }

  h6 {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    color: #ff0000;
    margin-left: 20px;
  }
`;

const CardWrap = styled.div`
  margin: -10px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgb(225, 226, 227);
  margin: 40px 0;
`;

const GoPay = styled.div`
  cursor: pointer;
  padding: 10px 0;
`;

const EachDate = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${({ isOn }) => (isOn ? "#333" : "#999")};
  border: 1px solid rgb(225, 226, 227);
  margin-top: 25px;
  font-weight: 600;
  padding: 25px 30px;
  cursor: pointer;
`;
