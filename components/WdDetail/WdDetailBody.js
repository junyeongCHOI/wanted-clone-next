import React from "react";
import styled from "styled-components";
import Tag from "../Tag";
import { wdDetailSmall } from "../../config";

const WdDetailBody = ({
  positionName,
  companyName,
  location,
  country,
  tags,
  reward,
  body,
}) => {
  return (
    <WdDetailBodyWrap>
      <PositionInfo>
        <h2>{positionName}</h2>
        <CompanyInfo>
          {companyName}
          <Line />
          <span>
            {location}
            <Dot>.</Dot>
            {country}
          </span>
        </CompanyInfo>
        <Tags>
          {tags.map((name, idx) => (
            <Tag key={idx} name={name} />
          ))}
        </Tags>

        <RewardMobile>
          <h3>채용보상금</h3>
          <RewardContainer>
            <InnerBox>
              <h4>추천인</h4>
              <p>{reward.referrer}</p>
            </InnerBox>
            <InnerBox>
              <h4>지원자</h4>
              <p>{reward.volunteer}</p>
            </InnerBox>
          </RewardContainer>
        </RewardMobile>
      </PositionInfo>
      <BodyContext>{body.description}</BodyContext>
      <BodyContextSubTitle>주요업무</BodyContextSubTitle>
      <BodyContext>{body.main_task}</BodyContext>
      <BodyContextSubTitle>자격요건</BodyContextSubTitle>
      <BodyContext>{body.qualification}</BodyContext>
      {body.preferred !== "" && (
        <>
          <BodyContextSubTitle>우대사항</BodyContextSubTitle>
          <BodyContext>{body.preferred}</BodyContext>
        </>
      )}
      <BodyContextSubTitle>혜택 및 복지</BodyContextSubTitle>
      <BodyContext>{body.benefit}</BodyContext>
    </WdDetailBodyWrap>
  );
};

export default WdDetailBody;

const WdDetailBodyWrap = styled.div`
  margin: 40px 0 80px;
  min-width: 400px;
  @media only screen and (max-width: ${wdDetailSmall}) {
    margin: 0;
    padding: 20px;
  }
`;

const PositionInfo = styled.div`
  margin-bottom: 40px;
  color: #333333;
  font-weight: 800;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${wdDetailSmall}) {
    font-weight: 600;
    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  span {
    color: #999999;
    font-weight: 600;
  }
  @media only screen and (max-width: ${wdDetailSmall}) {
    font-size: 13px;
  }
`;

const Line = styled.div`
  display: inline-block;
  width: 1px;
  height: 100%;
  margin: 0 10px;
  background-color: #d8d8d8;
`;

const Dot = styled.div`
  display: inline;
  margin: 0 3px;
  top: -4px;
  position: relative;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const RewardMobile = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9fa;
  display: none;
  h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
  }

  @media only screen and (max-width: ${wdDetailSmall}) {
    display: block;
  }
`;

const RewardContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InnerBox = styled.div`
  width: 50%;
  font-weight: 600;

  h4 {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
    color: #333;
  }
`;

const BodyContext = styled.p`
  font-size: 16px;
  color: #333333;
  line-height: 1.75;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const BodyContextSubTitle = styled.h6`
  font-size: 16px;
  color: #333333;
  line-height: 1.75;
  margin-top: 20px;
  font-weight: 600;
`;
