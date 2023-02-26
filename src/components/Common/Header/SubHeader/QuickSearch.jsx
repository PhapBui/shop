import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import {
  searchActions,
  selectKey,
  selectQuickSearch,
} from "features/products/pages/Search/searchSlice.js";
import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

const QuickList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "",
  width: "872px",
  height: "24px",
  marginLeft: "95px",
  marginTop: "8px",
  alignItems: "flex-start",
  flexWrap: "wrap",
  overflow: "hidden",
}));

const QuickListItem = styled(Link)(({ theme }) => ({
  marginRight: "12px",
  textDecoration: "none",
  color: "inherit",
}));

function QuickSearch() {
  const dispatch = useAppDispatch();
  const key = useAppSelector(selectKey);
  const quickSearchData = useAppSelector(selectQuickSearch);
  useEffect(() => {
    dispatch(searchActions.fetchQuickSearch(key));
  }, [dispatch, key]);
  return (
    <QuickList>
      {quickSearchData &&
        quickSearchData.length > 0 &&
        quickSearchData.map((a) => (
          <QuickListItem
            to={`/${a.url.replace("https://tiki.vn/", "")}`}
            key={a.url}
          >
            {a.keyword}
          </QuickListItem>
        ))}
    </QuickList>
  );
}

export default memo(QuickSearch);
