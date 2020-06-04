import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNewCareer } from "../../actions";
import { withRouter } from "next/router";
import axios from "axios";
import { AddMore } from "./CvWriteBody";
import CvWriteCareerInfo from "./CvWriteCareerInfo";
import { createCvM } from "../../config";

const CvWriteCareer = ({ careers, addNewCareer, router }) => {
  const pressAddNewCareerBtn = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${createCvM}/${router.query.id}?category=career`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      addNewCareer(res.data.data.resume_id, res.data.data.id);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <CvWriteCareerWrap>
      <AddMore onClick={pressAddNewCareerBtn}> + 추가</AddMore>
      {careers.map((item, idx) => (
        <CvWriteCareerInfo key={idx} UIdx={idx} />
      ))}
    </CvWriteCareerWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    careers: state.typedCvCareer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCareer: (rId, id) => dispatch(addNewCareer(rId, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CvWriteCareer));

const CvWriteCareerWrap = styled.div`
  margin-bottom: 20px;
`;
