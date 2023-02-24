import { styled } from "@mui/material";
import { useCallback } from "react";
import { memo, useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { selectSearchResultList } from "features/products/pages/Search/searchSlice.js";
import { useAppSelector } from "app/hooks.js";
import SearchResultItem from "./SearchResultItem.jsx";
import SearchSuggestion from "./SearchSuggestion.jsx";

const Wrapper = styled("div")(({ theme }) => ({
  background: "white",
  width: "820px",
  listStyle: "none",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "5px",
  overflow: "hidden",
  borderTop: "1px solid rgb(225, 225, 225)",
  boxShadow: "rgb(0 0 0 / 28%) 0px 6px 12px 0px",
}));

function SearchResult({ handleSearchItem, searchValue }) {
  const [isSearching, setIsSearching] = useState(false);
  const searchResult = useAppSelector(selectSearchResultList);
  useEffect(() => {
    setIsSearching(searchValue && searchResult && searchResult.length > 0);
  }, [searchResult, searchValue]);

  const handleOnClick = useCallback(() => {
    if (handleSearchItem) handleSearchItem();
  }, [handleSearchItem]);

  return (
    <Wrapper onClick={handleOnClick}>
      {isSearching && searchResult ? (
        searchResult.map((item) => (
          <SearchResultItem
            data={item}
            key={item.keyword}
            classNames={""}
          />
        ))
      ) : (
        <SearchSuggestion />
      )}
    </Wrapper>
  );
}
SearchResult.propTypes = {
  handleSearchItem: PropTypes.func,
  searchValue: PropTypes.string,
};
export default memo(SearchResult);
