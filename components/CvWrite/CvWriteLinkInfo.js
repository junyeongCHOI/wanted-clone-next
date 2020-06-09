import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { typingLink } from "../../actions";

const CvWriteLinkInfo = ({ data, typingLink }) => {
  return (
    <CvWriteLinkInfoWrap>
      <LinkInputWrap>
        <LinkInput
          placeholder="http://"
          value={data.url}
          onChange={(e) => typingLink(e.target.value)}
        />
        <DeleteABtn>
          <i className="xi-close-min" />
        </DeleteABtn>
      </LinkInputWrap>
    </CvWriteLinkInfoWrap>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    typingLink: (val) => dispatch(typingLink(val, ownProps.idx)),
  };
};

export default connect(null, mapDispatchToProps)(CvWriteLinkInfo);

const CvWriteLinkInfoWrap = styled.div`
  padding: 30px;
`;

const LinkInputWrap = styled.div`
  position: relative;
`;

const LinkInput = styled.input`
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  margin-bottom: 3px;
  height: auto;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const DeleteABtn = styled.div`
  position: absolute;
  font-size: 24px;
  color: #d1d1d1;
  top: 10px;
  right: 10px;
  padding: 7px;
  cursor: pointer;
  &:hover {
    color: #176fd8;
  }
`;
