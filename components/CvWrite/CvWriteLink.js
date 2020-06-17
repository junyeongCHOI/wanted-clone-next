import React, { useEffect } from "react";
import styled from "styled-components";
import { AddMore } from "./CvWriteBody";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";
import CvWriteLinkInfo from "./CvWriteLinkInfo";
import { loadLink, addNewLink } from "../../actions";
import { createCvM, postCvM } from "../../config";

const CvWriteLink = ({ typedCvLink, addNewLink, laodLink, router }) => {
  const delLink = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${createCvM}/${router.query.id}?category=link`, {
      headers: {
        Authorization: token,
      },
      data: {
        id,
      },
    });
    const res = await axios.get(`${postCvM}/${router.query.id}?category=link`, {
      headers: {
        Authorization: token,
      },
    });
    laodLink(res.data.data);
  };

  const pressAddNewLinkBtn = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${createCvM}/${router.query.id}?category=link`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      addNewLink(res.data.data.resume_id, res.data.data.id);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      try {
        const res = await axios.get(
          `${postCvM}/${router.query.id}?category=link`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        laodLink(res.data.data);
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  return (
    <CvWriteLinkWrap>
      <AddMore onClick={pressAddNewLinkBtn}>+ 추가</AddMore>
      {typedCvLink.map((data, idx) => (
        <CvWriteLinkInfo key={idx} data={data} idx={idx} delLink={delLink} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CvWriteLink));

const CvWriteLinkWrap = styled.div`
  margin-bottom: 20px;
`;
