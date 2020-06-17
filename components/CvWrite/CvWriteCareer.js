import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNewCareer, loadCareer } from "../../actions";
import { withRouter } from "next/router";
import axios from "axios";
import { AddMore } from "./CvWriteBody";
import CvWriteCareerInfo from "./CvWriteCareerInfo";
import { createCvM, postCvM } from "../../config";

const CvWriteCareer = ({ careers, addNewCareer, router, loadCareer }) => {
  const getData = () => {
    const token = localStorage.getItem("token");
    (async () => {
      try {
        const res = await axios.get(
          `${postCvM}/${router.query.id}?category=career`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        loadCareer(res.data.data);
      } catch (err) {
        console.warn(err);
      }
    })();
  };

  const deleteCareer = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${createCvM}/${router.query.id}?category=career`, {
        headers: {
          Authorization: token,
        },
        data: {
          id,
        },
      });
      getData();
    } catch (err) {
      console.warn(err);
    }
  };

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <CvWriteCareerWrap>
      <AddMore onClick={pressAddNewCareerBtn}> + 추가</AddMore>
      {careers.map((item, idx) => (
        <CvWriteCareerInfo
          key={idx}
          UIdx={idx}
          deleteCareer={deleteCareer}
          getData={getData}
        />
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
    loadCareer: (val) => dispatch(loadCareer(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CvWriteCareer));

const CvWriteCareerWrap = styled.div`
  margin-bottom: 20px;
`;
