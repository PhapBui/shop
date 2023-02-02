import { styled } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
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

function SearchResult({
  searchResult,
  suggestion,
  hotKeys,
  hotCategories,
  collap,
}) {
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setIsSearching(searchResult && searchResult.length > 0);
  }, [searchResult]);
  console.log(searchResult);
  return (
    <Wrapper>
      {isSearching ? (
        searchResult.map((item) => (
          <SearchResultItem
            data={item}
            key={item.keyword}
            classNames={""}
          />
        ))
      ) : (
        <SearchSuggestion
          suggestion={suggestion}
          hotKeys={hotKeys}
          hotCategories={hotCategories}
          collap={collap}
        />
      )}
    </Wrapper>
  );
}

export default SearchResult;
