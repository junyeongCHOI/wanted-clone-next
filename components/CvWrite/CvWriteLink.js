import React from "react";
import styled from "styled-components";
import { AddMore } from "./CvWriteBody";
import { connect } from "react-redux";
import CvWriteLinkInfo from "./CvWriteLinkInfo";
import { loadLink, addNewLink } from "../../actions";

const CvWriteLink = ({ typedCvLink, addNewLink, laodLink }) => {
  return (
    <CvWriteLinkWrap>
      <AddMore onClick={() => addNewLink(1, 2)}>+ 추가</AddMore>
      {typedCvLink.map((data, idx) => (
        <CvWriteLinkInfo data={data} idx={idx} />
      ))}
    </CvWriteLinkWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    typedCvLink: state.typedCvLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewLink: (rId, id) => dispatch(addNewLink(rId, id)),
    laodLink: (val) => dispatch(loadLink(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvWriteLink);

const CvWriteLinkWrap = styled.div`
  margin-bottom: 20px;
`;
