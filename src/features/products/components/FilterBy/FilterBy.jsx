import { Stack, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectFilterOption } from "features/products/pages/Search/searchSlice.js";
import { memo, useEffect, useState } from "react";

const FilterWrapper = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-start",
  padding: "12px 0px 12px 16px",
  marginBottom: "8px",
  flexWrap: "wrap",
});
const FilterItem = styled("div")({
  "color": "rgb(11, 116, 229)",
  "border": "1px solidrgb(26, 148, 255)",
  "fontSize": "13px",
  "padding": "10px 12px",
  "lineHeight": "20px",
  "position": "relative",
  "borderRadius": "100px",
  "display": "flex",
  "marginRight": "10px",
  "marginBottom": "0px",
  "height": "32px",
  "WebkitBoxAlign": "center",
  "alignItems": "center",
  "background": "rgb(238, 238, 238)",
  "cursor": "pointer",
  "borderColor": "transparent",

  "& > img": {
    maxWidth: "100%",
    maxHeight: "1.2rem",
    width: "auto",
  },
});

function FilterBy() {
  const filterOption = useAppSelector(selectFilterOption);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const newOptions = filterOption.filter((a) => a.icon !== undefined);
    setOptions(newOptions);
  }, [filterOption]);
  return (
    <FilterWrapper>
      {options &&
        options.length > 0 &&
        options.map((filter, idx) => (
          <FilterItem key={idx}>
            <img
              src={filter.icon}
              alt={filter.display_name}
              height={filter.icon_height}
              width={filter.icon_width}
            />
          </FilterItem>
        ))}
    </FilterWrapper>
  );
}

export default memo(FilterBy);
