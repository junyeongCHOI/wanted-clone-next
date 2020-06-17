import React from "react";
import styled from "styled-components";
import GoogleMapContainer from "../GoogleMapContainer";
import { wdDetailSmall } from "../../config";

const WdDetailBottom = ({ data }) => {
  return (
    <WdDetailBottomWrap>
      <Info>
        <span>마감일</span>
        {data.always.value ? "상시" : data.always.expiry_date}
      </Info>
      <Info>
        <span>근무지역</span>
        {data.location.full_location}
      </Info>
      <GoogleMapContainerWrap>
        <GoogleMapContainer lat={data.location.lat} lng={data.location.lng} />
      </GoogleMapContainerWrap>
      <CompanyInfo>
        <CompanyLogo
          style={{ backgroundImage: `url(${data.company.image})` }}
        />
        <CompanyContext>
          <h5>{data.company.name}</h5>
          <h6>{data.company.industry_name}</h6>
        </CompanyContext>
      </CompanyInfo>
    </WdDetailBottomWrap>
  );
};

export default WdDetailBottom;

const WdDetailBottomWrap = styled.div`
  border-top: 1px solid #eeeeee;
  padding: 30px 0 4px;
  @media only screen and (max-width: ${wdDetailSmall}) {
    padding: 20px;
  }
`;

const Info = styled.h4`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #333333;

  span {
    display: inline-block;
    width: 80px;
    color: #999999;
  }

  @media only screen and (max-width: ${wdDetailSmall}) {
    font-size: 15px;
    span {
      width: 70px;
    }
  }
`;

const GoogleMapContainerWrap = styled.div`
  width: 100%;
  height: 254px;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
`;

const CompanyInfo = styled.div`
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  padding: 20px;
  margin-top: 80px;
  display: felx;
  align-items: center;
  @media only screen and (max-width: ${wdDetailSmall}) {
    margin: 0;
    padding: 20px 0;
    border: unset;
  }
`;

const CompanyLogo = styled.div`
  background-position: 50%;
  background-size: cover;
  width: 50px;
  height: 50px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1);
  margin-right: 15px;
`;

const CompanyContext = styled.div`
  font-size: 15px;
  font-weight: 600;

  h5 {
    color: #333333;
    margin-bottom: 5px;
  }

  h6 {
    color: #999999;
  }
`;
