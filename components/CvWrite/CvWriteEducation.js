import React from "react";
import styled from "styled-components";
import { AddMore } from "./CvWriteBody";
import { connect } from "react-redux";
import CvWriteEducationInfo from "./CvWriteEducationInfo";
import { loadEducation, addNewEducation } from "../../actions";

const CvWriteEducation = ({
  typedEducation,
  addNewEducation,
  loadEducation,
}) => {
  return (
    <CvWriteEducationWrap>
      <AddMore onClick={() => addNewEducation(1, 2)}>+ 추가</AddMore>
      {typedEducation.map((data, idx) => (
        <CvWriteEducationInfo data={data} idx={idx} />
      ))}
    </CvWriteEducationWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    typedEducation: state.typedEducation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewEducation: (rId, id) => dispatch(addNewEducation(rId, id)),
    loadEducation: (val) => dispatch(loadLink(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvWriteEducation);

const CvWriteEducationWrap = styled.div`
  margin-bottom: 20px;
`;
