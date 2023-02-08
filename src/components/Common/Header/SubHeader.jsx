import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Location from "./SubHeader/Location.jsx";
import QuickSearch from "./SubHeader/QuickSearch.jsx";

const SubHeaderContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

function SubHeader() {
  const [QuickSearchData, setQuickSearchData] = useState();
  useEffect(() => {
    const fetchQuickSearch = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/shopping/v2/featured_keywords?page_name=HomepageRevamp`
        );
        setQuickSearchData(res.data?.data);
      } catch (error) {
        console.log("Failed to fetch QuickSearch Data: ", error);
      }
    };
    fetchQuickSearch();
  }, []);
  return (
    <SubHeaderContainer>
      <QuickSearch data={QuickSearchData} />
      <Location pretext={"Giao đến: "} />
    </SubHeaderContainer>
  );
}

export default SubHeader;
