import React from "react";
import styled from "styled-components";
import CvCard from "./CvCard";

const UploadCard = () => {
  return (
    <CvCard>
      <UploadCardWrap>
        <NewCardContainer>
          <Icon>
            <i className="xi-folder-upload-o" />
          </Icon>
          <h4>파일 업로드</h4>
        </NewCardContainer>
      </UploadCardWrap>
    </CvCard>
  );
};

export default UploadCard;

const UploadCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const NewCardContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  h4 {
    margin-top: 20px;
  }
`;

const Icon = styled.div`
  width: 74px;
  height: 74px;
  margin: 0 auto;
  background-color: #e1e2e3;
  border-radius: 50%;
  color: #666;
  display: felx;
  justify-content: center;
  align-items: center;
  i {
    display: block;
    font-size: 27px;
  }
`;
