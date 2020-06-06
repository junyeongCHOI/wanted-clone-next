import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  typingRYdate,
  typingAEndMdate,
  typingAname,
  typingAcontent,
} from "../../actions";

const CvWriteAwardInfo = ({
  UIdx,
  data,
  typingRYdate,
  typingAEndMdate,
  typingAname,
  typingAcontent,
}) => {
  return (
    <CvWriteAwardInfoWrap>
      <DeleteABtn>
        <i className="xi-close-min" />
      </DeleteABtn>
      <CWRDateSide>
        <DateTimeInput
          placeholder="YYYY"
          type="text"
          maxLength="4"
          value={data.date[0]}
          onChange={(e) => typingRYdate(e.target.value, UIdx)}
        />
        .
        <DateTimeInput
          placeholder="MM"
          type="text"
          maxLength="2"
          value={data.date[1]}
          onChange={(e) => typingAEndMdate(e.target.value, UIdx)}
        />
      </CWRDateSide>
      <CWCInfoSide>
        <CWRTitle
          placeholder="회사명"
          type="text"
          maxLength="100"
          value={data.name}
          onChange={(e) => typingAname(e.target.value, UIdx)}
        />
        <CWRSubTitle
          placeholder="부서명/직책"
          type="text"
          maxLength="80"
          value={data.content}
          onChange={(e) => typingAcontent(e.target.value, UIdx)}
        />
      </CWCInfoSide>
    </CvWriteAwardInfoWrap>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    typingRYdate: (val, idx) => dispatch(typingRYdate(val, idx)),
    typingAEndMdate: (val, idx) => dispatch(typingAEndMdate(val, idx)),
    typingAname: (val, idx) => dispatch(typingAname(val, idx)),
    typingAcontent: (val, idx) => dispatch(typingAcontent(val, idx)),
  };
};

export default connect(null, mapDispatchToProps)(CvWriteAwardInfo);

const CvWriteAwardInfoWrap = styled.div`
  display: flex;
  padding: 30px;
  position: relative;
`;

const CWRDateSide = styled.div`
  width: 25%;
  display: felx;
  color: #555;
`;

const DateTimeInput = styled.input`
  text-align: center;
  width: 36px;
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857143;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CWCInfoSide = styled.div`
  width: 75%;
`;

const CWRInput = styled.input`
  margin-bottom: 3px;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto;
  color: #3b3d40;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CWRTitle = styled(CWRInput)`
  font-size: 20px;
  font-weight: 600;
`;

const CWRSubTitle = styled(CWRInput)`
  font-size: 16px;
  font-weight: 600;
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
