import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Location from "./SubHeader/Location.jsx";
import QuickSearch from "./SubHeader/QuickSearch.jsx";

const SubHeaderContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

function SubHeader() {
  return (
    <SubHeaderContainer>
      <QuickSearch />
      <Location />
    </SubHeaderContainer>
  );
}

export default SubHeader;
