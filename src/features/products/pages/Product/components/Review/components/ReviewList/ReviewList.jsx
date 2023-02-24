import { Stack, styled } from "@mui/material";
import PaginationCp from "components/Common/Pagination/Pagination.jsx";
import React, { memo } from "react";
import ReviewItem from "./ReviewItem.jsx";

const Wrapper = styled("div")({
  "display": "flex",
  "padding": "0px 48px 16px",
  "flexDirection": "column",
  "& .MuiPagination-root": {
    "fontSize": "1.4rem",
    "fontWeight": 600,
    "& .MuiSvgIcon-root": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
});
const PaginationContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
});
const ReviewList = ({ data, page }) => {
  return (
    <Wrapper>
      {data &&
        data.map((item, idx) => (
          <ReviewItem
            data={item}
            key={idx}
          />
        ))}
      {page && (
        <PaginationContainer>
          <PaginationCp
            count={page?.last_page}
            siblingCount={1}
            boundaryCount={1}
          />
        </PaginationContainer>
      )}
    </Wrapper>
  );
};

export default memo(ReviewList);
