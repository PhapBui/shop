import { Stack, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [filterOption, setFilterOption] = useState([]);

  useEffect(() => {
    const fetchFilterOption = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh`
        );
        if (res) {
          setFilterOption(() => {
            return res.data.filters.filter(
              (a) => a.type === "service" && a.icon !== undefined
            );
          });
        }
      } catch (error) {
        console.log("Failed to fetch data filter Option: ", error);
      }
    };
    fetchFilterOption();
  }, []);
  console.log(filterOption);
  return (
    <FilterWrapper>
      {filterOption &&
        filterOption.length > 0 &&
        filterOption.map((filter, idx) => (
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

export default FilterBy;
