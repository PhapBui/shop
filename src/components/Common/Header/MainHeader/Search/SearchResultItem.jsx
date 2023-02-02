import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = styled(Link)({
  "display": "flex",
  "color": "rgb(39, 39, 42)",
  "fontSize": "1.4rem",
  "lineHeight": "150%",
  "alignItems": "center",
  "padding": "0px 16px",
  "textDecoration": "none",
  "fontWeight": 500,
  "&:hover": {
    backgroundColor: "rgba(39, 39, 42, 0.12)",
  },
  "&.hide": {
    display: "none",
  },
});

function SearchResultItem({ data, classNames }) {
  return (
    <Item
      to={data.url}
      className={classNames}
    >
      <img
        src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
        alt={data.keyword}
        width={35}
        height={35}
      />
      <div className={data.type}>{data.keyword}</div>
    </Item>
  );
}

export default SearchResultItem;
