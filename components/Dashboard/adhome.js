import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Adhome = () => {
  return (
    <AdhomeWrap>
      <AdItemWrap>
        <AdItem style={{ marginRight: 10 }}>
          <h2>회사 홍보를 특정 직무에 하고 싶으신가요?</h2>
          <ItemImg url="https://static.wanted.co.kr/images/dashboard_ad_toppicks5@2x.png" />
          <h3>
            원티드의 직군/직무별 잠재 구직자들을 타겟팅하여 <br />
            280여개 세분화된 직무마다 효율적으로 홍보할 수 있습니다.
          </h3>
          <Link href="/dashboard/ad?match=ad">
            <a>
              <ItemBtn>직무 상단 광고</ItemBtn>
            </a>
          </Link>
        </AdItem>
        <AdItem>
          <h2>모든 직군에 구분 없이 노출을 하고 싶으신가요?</h2>
          <ItemImg url="https://static.wanted.co.kr/images/dashboard_ad_network@2x.png" />
          <h3>
            다양한 콘텐츠를 다양한 채널에 논스탑으로 채용 광고를 <br />
            진행하여 최대 500만 노출을 달성할 수 있습니다.
          </h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSenBmA6WeeZB76H754ujqT3h51F7PhhKAA3lIHK8QX97B7oPg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ItemBtn>네트워크 광고</ItemBtn>
          </a>
        </AdItem>
      </AdItemWrap>
      <AdNav>
        <p>직무 상단 광고 성과</p>
      </AdNav>
    </AdhomeWrap>
  );
};

export default Adhome;

const AdhomeWrap = styled.div``;

const AdItemWrap = styled.div`
  display: flex;
`;

const AdItem = styled.div`
  width: 390px;
  height: 374px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  border: 1px solid rgb(225, 226, 227);
  text-align: center;

  h2 {
    color: rgb(51, 51, 51);
    margin: 30px 0px 20px;
    line-height: 1.4;
    font-size: 16px;
    font-weight: 600;
  }

  h3 {
    color: #b5b5b5;
    line-height: 1.4;
    font-size: 14px;
  }
`;

const ItemImg = styled.div`
  width: 388px;
  height: 180px;
  background-image: url(${({ url }) => url});
  background-size: cover;
`;

const ItemBtn = styled.div`
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 139, 247);
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  margin: 20px auto 0;
`;

const AdNav = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(17, 17, 17);
  margin: 20px 0px;
  border-bottom: 1px solid rgb(225, 226, 227);

  p {
    width: max-content;
    font-size: 14px;
    font-weight: 400;
    color: rgb(17, 17, 17);
    padding: 10px 15px;
    border-bottom: 2px solid rgb(51, 51, 51);
  }
`;
