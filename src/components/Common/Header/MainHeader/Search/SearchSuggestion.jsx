import React, { useState } from "react";
import { styled } from "@mui/material";
import SearchResultItem from "./SearchResultItem.jsx";
import SearchWidget from "./SearchWidget.jsx";

const Wrapper = styled("div")(({ theme }) => ({}));

const SuggestionList = styled("ul")(({ theme }) => ({
  "&>.show-more": {
    "fontSize": "12px",
    "lineHeight": "1.67",
    "display": "flex",
    "WebkitBoxPack": "center",
    "justifyContent": "center",
    "color": "rgb(13, 92, 182)",
    "&>.show-more-btn": {
      display: "flex",
      padding: "6px 16px",
      WebkitBoxAlign: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },
}));

function SearchSuggestion({ suggestion, hotKeys, hotCategories, collap }) {
  const [isCollap, setIsCollap] = useState(3);
  const handleCollap = () => {
    setIsCollap((prev) =>
      prev < suggestion.length ? suggestion.length : collap
    );
  };
  return (
    <Wrapper>
      <SuggestionList>
        {suggestion &&
          suggestion.length > 0 &&
          suggestion.map((data, idx) => {
            return (
              <SearchResultItem
                data={data}
                key={idx}
                classNames={isCollap < idx + 1 ? "hide" : ""}
              />
            );
          })}
        <div className="show-more">
          <div
            className="show-more-btn"
            onClick={handleCollap}
          >
            {collap < isCollap ? "Thu gon ^ " : "Xem them ~"}
          </div>
        </div>
      </SuggestionList>
      <SearchWidget data={hotKeys} />
      <SearchWidget data={hotCategories} />
    </Wrapper>
  );
}

export default SearchSuggestion;
