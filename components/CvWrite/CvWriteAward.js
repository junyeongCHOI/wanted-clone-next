import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import axios from "axios";
import CvWriteAwardInfo from "./CvWriteAwardInfo";
import { AddMore } from "./CvWriteBody";
import { addNewAward, loadAward } from "../../actions";
import { createCvM, postCvM } from "../../config";

const CvWriteAward = ({ awards, addNewAward, router, loadAward }) => {
  const delAward = async (id) => {
    const token = localStorage.getItem("token");
    await axios.del(`${createCvM}/${router.query.id}?category=award`, {
      headers: {
        Authorization: token,
      },
      data: {
        id,
      },
    });
    const res = await axios.get(
      `${postCvM}/${router.query.id}?category=award`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    loadAward(res.data.data);
  };

  const pressAddNewAwardBtn = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${createCvM}/${router.query.id}?category=award`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      addNewAward(res.data.data.resume_id, res.data.data.id);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      const res = await axios.get(
        `${postCvM}/${router.query.id}?category=award`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      loadAward(res.data.data);
    })();
  }, []);

  return (
    <CvWriteAwardWrap>
      <AddMore onClick={pressAddNewAwardBtn}> + 추가</AddMore>
      {awards.map((data, idx) => (
        <CvWriteAwardInfo
          key={idx}
          UIdx={idx}
          data={data}
          delAward={delAward}
        />
      ))}
    </CvWriteAwardWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    awards: state.typedCvAward,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewAward: (rId, id) => dispatch(addNewAward(rId, id)),
    loadAward: (val) => dispatch(loadAward(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CvWriteAward));

const CvWriteAwardWrap = styled.div`
  margin-bottom: 20px;
`;
