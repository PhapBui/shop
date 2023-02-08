import { Box, Pagination, styled } from "@mui/material";
import React from "react";
import SearchHeader from "./components/SearchHeader.jsx";
import SearchProduct from "./components/SearchProduct.jsx";

const Wrapper = styled(Box)({
  "& 	.MuiPagination-ul": {
    "justifyContent": "center",
    "margin": "77px 0px 16px",
    "& button": {
      "fontSize": "1.6rem",
      "& svg": {
        fontSize: "3rem",
      },
    },
  },
});

function Search() {
  return (
    <Wrapper>
      <SearchHeader />
      <SearchProduct />
      <Pagination
        count={46}
        color="primary"
        size="large"
        shape="rounded"
        siblingCount={2}
        boundaryCount={1}
        style={{}}
      />
    </Wrapper>
  );
}

export default Search;
