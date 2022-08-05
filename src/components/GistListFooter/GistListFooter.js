import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGistList } from "redux-state/gists";
import { PaginationControls, PageInfo } from "./GistListFooter.styles";

const GistListFooter = ({ getList, page_number }) => {
  const moveBack = () => {
    getList(page_number - 1);
  };

  const moveNext = () => {
    getList(page_number + 1);
  };

  return (
    <footer>
      <PaginationControls>
        <div></div>
        <div>
          <button disabled={page_number === 1} onClick={moveBack}>
            Prev
          </button>
          <button disabled={page_number === 30} onClick={moveNext}>
            Next
          </button>
        </div>
        <PageInfo>Page {page_number} of 30</PageInfo>
      </PaginationControls>
    </footer>
  );
};

const mapStateToProps = (state) => {
  const {
    gists: { page_number },
  } = state;
  return { page_number };
};

const mapDispatchToProps = {
  getList: fetchGistList,
};

export default connect(mapStateToProps, mapDispatchToProps)(GistListFooter);
