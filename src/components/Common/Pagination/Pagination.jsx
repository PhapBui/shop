import React from "react";
import { Pagination, styled } from "@mui/material";
import PropTypes from "prop-types";
const Wrapper = styled(Pagination)({
  "& button": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },
});

const PaginationCp = ({ count = 1, siblingCount = 2, boundaryCount = 1 }) => {
  return (
    <Wrapper
      count={count}
      color="primary"
      size="large"
      shape="rounded"
      siblingCount={siblingCount}
      boundaryCount={boundaryCount}
      style={{}}
    />
  );
};

PaginationCp.propTypes = {
  count: PropTypes.number,
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
};

export default PaginationCp;
