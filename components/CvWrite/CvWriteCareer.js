import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNewCareer } from "../../actions";
import { AddMore } from "./CvWriteBody";
import CvWriteCareerInfo from "./CvWriteCareerInfo";

const CvWriteCareer = ({ career, addNewCareer }) => {
  return (
    <CvWriteCareerWrap>
      <AddMore onClick={addNewCareer}> + 추가</AddMore>
      <CvWriteCareerInfo />
    </CvWriteCareerWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    career: state.typedCv.career,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCareer: () => dispatch(addNewCareer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvWriteCareer);

const CvWriteCareerWrap = styled.div`
  margin-bottom: 20px;
`;
