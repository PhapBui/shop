import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import {
  selectCollap,
  selectHotCate,
  selectHotKeys,
  selectSearchSuggestion,
} from "features/products/pages/Search/searchSlice.js";
import { memo, useState } from "react";
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

function SearchSuggestion() {
  const [isCollap, setIsCollap] = useState(3);

  const suggestionList = useAppSelector(selectSearchSuggestion);

  const collaps = useAppSelector(selectCollap);
  const hotKey = useAppSelector(selectHotKeys);
  const hotCates = useAppSelector(selectHotCate);

  const handleCollap = () => {
    setIsCollap((prev) =>
      prev < suggestionList?.length ? suggestionList?.length : collaps
    );
  };

  return (
    <Wrapper>
      <SuggestionList>
        {suggestionList &&
          suggestionList.length > 0 &&
          suggestionList.map((data, idx) => {
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
            {collaps < isCollap ? "Thu gon ^ " : "Xem them ~"}
          </div>
        </div>
      </SuggestionList>
      <SearchWidget data={hotKey} />
      <SearchWidget data={hotCates} />
    </Wrapper>
  );
}

export default memo(SearchSuggestion);
