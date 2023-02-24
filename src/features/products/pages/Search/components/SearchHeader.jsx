import { Box, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import FilterBy from "features/products/components/FilterBy/FilterBy.jsx";
import SortBy from "features/products/components/SortBy/SortBy.jsx";
import { memo } from "react";
import { selectKey } from "../searchSlice.js";

const Wrapper = styled(Box)({
  padding: "0px",
  backgroundColor: "rgb(255, 255, 255)",
});
const Title = styled("h3")({
  padding: "12px 0px 0px 16px",
  fontWeight: 400,
  color: "rgb(56, 56, 61)",
  fontSize: "2rem ",
});

function SearchHeader() {
  const key = useAppSelector(selectKey);

  return (
    <Wrapper>
      <Title>Kết quả tìm kiếm cho `{key}` </Title>
      <SortBy />
      <FilterBy />
    </Wrapper>
  );
}

export default memo(SearchHeader);
