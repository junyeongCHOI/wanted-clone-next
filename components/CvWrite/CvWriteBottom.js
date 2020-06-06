import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import { CvWriteBodyAPI, postCvM } from "../../config";

const CvWriteBottom = ({ data, router, careerData, awardData }) => {
  const postResume = async (state) => {
    try {
      const token = localStorage.getItem("token");
      await Promise.all[
        ((axios.post(
          `${CvWriteBodyAPI}/${router.query.id}`,
          {
            status: state,
            ...data,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        ),
        axios.post(
          `${postCvM}/${router.query.id}?category=career`,
          careerData,
          {
            headers: {
              Authorization: token,
            },
          }
        )),
        axios.post(`${postCvM}/${router.query.id}?category=award`, awardData, {
          headers: {
            Authorization: token,
          },
        }))
      ];
      Router.push("/CvList");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CvWriteBottomWrap>
      <CvWriteBottomContainer>
        <TempSubmitBtn onClick={() => postResume(true)}>
          임시 저장
        </TempSubmitBtn>
        <CvSubmitBtn onClick={() => postResume(false)}>작성 완료</CvSubmitBtn>
      </CvWriteBottomContainer>
    </CvWriteBottomWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.typedCv,
    careerData: state.typedCvCareer,
    awardData: state.typedCvAward,
  };
};

export default connect(mapStateToProps, null)(withRouter(CvWriteBottom));

const CvWriteBottomWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
`;

const CvWriteBottomContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 5px;
  margin: 0 auto;
`;

const TempSubmitBtn = styled.div`
  width: 184px;
  min-width: 94px;
  margin: 0 5px;
  background-color: #ffffff;
  border: 1px solid #258bf7;
  border-radius: 3px;
  color: #258bf7;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
`;

const CvSubmitBtn = styled(TempSubmitBtn)`
  border-color: #258bf7;
  background-color: #258bf7;
  color: #fff;
`;
