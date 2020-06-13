import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Router, { withRouter } from "next/router";
import Pagination from "rc-pagination";
import AppListItem from "../../components/Dashboard/AppListItem";

const itemRender = (current, type, element) => {
  if (type === "page") {
    return <PageBtn>{current}</PageBtn>;
  }
  if (type === "prev") {
    return <PagiBtn>이전</PagiBtn>;
  }
  if (type === "next") {
    return <PagiBtn next>다음</PagiBtn>;
  }
  return <PageBtn>...</PageBtn>;
};

const ApplicationList = ({ router }) => {
  const [pageNum, setPageNum] = useState(1);

  const itemRender = useCallback(
    (current, type, element) => {
      if (type === "page") {
        return <PageBtn isOn={current === pageNum}>{current}</PageBtn>;
      }
      if (type === "prev") {
        return <PagiBtn>이전</PagiBtn>;
      }
      if (type === "next") {
        return <PagiBtn next>다음</PagiBtn>;
      }
      return <PageBtn>...</PageBtn>;
    },
    [pageNum]
  );

  const getPage = (page) => {
    setPageNum(page);
  };

  return (
    <ListWrap>
      <NavWrap>
        <NavItem isOn={router.query.match === "new"}>신규 (0)</NavItem>
        <NavItem>서류통과 (0)</NavItem>
        <NavItem>최종합격 (0)</NavItem>
        <NavItem>불합격 (0)</NavItem>
        <NavItem>기간만료 (0)</NavItem>
      </NavWrap>
      <AppListItem />
      <PaginationWrap
        total={100}
        itemRender={itemRender}
        showTitle={false}
        current={pageNum}
        onChange={getPage}
      />
    </ListWrap>
  );
};

export default withRouter(ApplicationList);

const ListWrap = styled.div`
  width: 100%;
`;

const NavWrap = styled.div`
  display: flex;
  border: 1px solid rgb(225, 226, 227);
  background-color: #fff;
  line-height: 2;
`;

const NavItem = styled.div`
  padding: 16px;
  color: rgb(17, 17, 17);
  flex: 1 1 0%;
  cursor: pointer;
  text-align: center;
  border-top: 2px solid
    ${({ isOn }) => (isOn ? "rgb(17, 17, 17)" : "transparent")};

  &:hover {
    border-top: 2px solid
      ${({ isOn }) => (isOn ? "rgb(17, 17, 17)" : "rgb(219,219,219)")};
  }
`;

const PaginationWrap = styled(Pagination)`
  display: felx;
  justify-content: center;
  margin-top: 30px;

  li:focus {
    all: unset;
  }
`;

const PagiBtn = styled.div`
  margin: ${({ next }) => (next ? "0 0 0 10px" : "0 20px 0 0")};
  min-width: 54px;
  cursor: pointer;
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgb(225, 226, 227);
  padding: 8px 15px;
`;

const PageBtn = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ isOn }) => (isOn ? "rgb(117, 117, 117)" : "#b5b5b5")};
  border: 1px solid rgb(219, 219, 219);
  padding: 8px 15px;

  &:hover {
    color: rgb(117, 117, 117);
  }
`;
