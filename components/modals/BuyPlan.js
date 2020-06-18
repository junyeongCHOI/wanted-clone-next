import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import styled from "styled-components";
import axios from "axios";
import { inicischeck, inipre, userinfo } from "../../config";
import { buyPlanOff } from "../../actions";

const BuyPlan = ({ buyPlanOff }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    country_id: null,
  });

  const payment = async (itemName, Price) => {
    const token = localStorage.getItem("token");
    const IMP = window.IMP;
    IMP.init("imp84455120");
    const MUID = "cha" + new Date().getTime();

    await axios.post(
      inipre,
      {
        merchant_uid: MUID,
        amount: Price,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    IMP.request_pay(
      {
        pg: "inicis",
        pay_method: "card",
        merchant_uid: MUID,
        name: itemName,
        amount: Price,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        buyer_tel: userInfo.contact,
      },
      function (rsp) {
        if (rsp.success) {
          jQuery
            .ajax({
              url: inicischeck,
              type: "POST",
              dataType: "json",
              headers: {
                Authorization: token,
              },
              data: {
                imp_uid: rsp.imp_uid,
                merchant_uid: rsp.merchant_uid,
                status: rsp.status,
                amount: Price,
              },
            })
            .done(function (data) {
              if (true) {
                if (confirm("결제 완료. 나가시겠습니까?")) {
                  buyPlanOff();
                }
              } else {
                if (confirm("결제 실패. 나가시겠습니까?")) {
                  buyPlanOff();
                }
                // 서버 res에 따라 결과 표출
              }
            });
        } else {
          if (confirm("결제 실패. 나가시겠습니까?")) {
            buyPlanOff();
          }
        }
      }
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const token = localStorage.getItem("token");
    (async () => {
      const infores = await axios.get(userinfo, {
        headers: {
          Authorization: token,
        },
      });
      setUserInfo(infores.data.data);
    })();

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <BuyPlanWrap>
        <Title>
          서비스 플랜
          <i className="xi-close" onClick={buyPlanOff} />
        </Title>
        <BuyPlanContainer>
          <ItemWrap>
            <h1>라이트</h1>
            <h2>500,00원</h2>
            <h5>부가세 별도</h5>
            <Line />
            <h3>
              <span>30</span>일간 최대 <span>30</span>건의 이력서 열람 및 면접
              제안
            </h3>
            <ItemContextWrap>
              <h4>- 채용 수수료 무료</h4>
              <h4>- 학력/경력 등 상세 이력 확인</h4>
              <h4>- 30건 상세 이력서 열람</h4>
              <h4>- 30회 제안 보내기 가능</h4>
              <h6>* 유효기간 : 구매일로부터 30일</h6>
            </ItemContextWrap>
            <BuyBtn onClick={() => payment("서비스 플랜 - 라이트", 550)}>
              서비스 결제하기
            </BuyBtn>
          </ItemWrap>
          <ItemWrap style={{ marginLeft: "-1px" }}>
            <h1>베이직</h1>
            <h2>1,000,00원</h2>
            <h5>부가세 별도</h5>
            <Line />
            <h3>
              <span>60/</span>일간 최대 <span>200</span>건의 이력서 열람 및 면접
              제안
            </h3>
            <ItemContextWrap>
              <h4>- 채용 수수료 무료</h4>
              <h4>- 학력/경력 등 상세 이력 확인</h4>
              <h4>- 200건 상세 이력서 열람</h4>
              <h4>- 200회 제안 보내기 가능</h4>
              <h6>* 유효기간 : 구매일로부터 60일</h6>
            </ItemContextWrap>
            <BuyBtn onClick={() => payment("서비스 플랜 - 베이직", 1100)}>
              서비스 결제하기
            </BuyBtn>
          </ItemWrap>
        </BuyPlanContainer>
      </BuyPlanWrap>
      <BuyPlanBg onClick={buyPlanOff} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPlanOff: () => dispatch(buyPlanOff()),
  };
};

export default connect(null, mapDispatchToProps)(BuyPlan);

const BuyPlanWrap = styled.div`
  overflow-y: auto;
  top: 50%;
  left: 50%;
  max-width: 800px;
  max-height: calc(100vh - 150px);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  z-index: 300;
  line-height: 1.42857143;
`;

const Title = styled.div`
  height: 54px;
  padding: 19px 20px;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  i {
    font-size: 18px;
    padding: 18px;
    position: absolute;
    top: 0;
    right: 0;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const BuyPlanBg = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const BuyPlanContainer = styled.div`
  padding: 40px;
  display: flex;
`;

const ItemWrap = styled.div`
  width: 290px;
  padding: 20px;
  border: 1px solid rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  line-height: 1.4;

  span {
    font-weight: 800;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
  }

  h2 {
    margin-top: 9px;
    font-size: 22px;
  }

  h3 {
    font-size: 16px;
    line-height: 1.5;
  }

  h4 {
    margin-top: 9px;
    font-size: 14px;
  }

  h5 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 300;
  }

  h6 {
    margin-top: 12px;
    font-size: 12px;
    color: rgb(102, 102, 102);
  }
`;

const ItemContextWrap = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const Line = styled.div`
  width: 250px;
  height: 1px;
  background-color: rgb(225, 226, 227);
  margin: 22px 0 15px;
`;

const BuyBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 9999px;
  color: #333;
  background-color: #f2f4f7;
  cursor: pointer;

  &:hover {
    background-color: rgb(87, 100, 242);
    color: rgb(255, 255, 255);
  }
`;
