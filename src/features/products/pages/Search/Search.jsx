import { Box, Pagination, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import React, { memo } from "react";
import SearchHeader from "./components/SearchHeader.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import { selectPaging } from "./searchSlice.js";

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
  const paginationData = useAppSelector(selectPaging);
  return (
    <Wrapper>
      <SearchHeader />
      <SearchProduct />
      <Pagination
        count={paginationData?.last_page}
        defaultPage={paginationData?.current_page}
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

export default memo(Search);
