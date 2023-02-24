import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import Location from "./Location.jsx";
import QuickSearch from "./QuickSearch.jsx";

const SubHeaderContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

function SubHeader({ quickSearchDatas }) {
  return (
    <SubHeaderContainer>
      <QuickSearch data={quickSearchDatas} />
      <Location pretext={"Giao đến: "} />
    </SubHeaderContainer>
  );
}

export default memo(SubHeader);
