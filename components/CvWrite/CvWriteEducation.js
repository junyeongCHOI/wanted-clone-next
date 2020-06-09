import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AddMore } from "./CvWriteBody";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import CvWriteEducationInfo from "./CvWriteEducationInfo";
import { loadEducation, addNewEducation } from "../../actions";
import { createCvM, postCvM } from "../../config";

const CvWriteEducation = ({
  typedEducation,
  addNewEducation,
  loadEducation,
  router,
}) => {
  const pressAddNewCEducationBtn = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${createCvM}/${router.query.id}?category=education`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      addNewEducation(res.data.data.id);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    (async () => {
      try {
        const res = await axios.get(
          `${postCvM}/${router.query.id}?category=education`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        loadEducation(res.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <CvWriteEducationWrap>
      <AddMore onClick={pressAddNewCEducationBtn}>+ 추가</AddMore>
      {typedEducation.map((data, idx) => (
        <CvWriteEducationInfo key={idx} data={data} idx={idx} />
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
    loadEducation: (val) => dispatch(loadEducation(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CvWriteEducation));

const CvWriteEducationWrap = styled.div`
  margin-bottom: 20px;
`;
