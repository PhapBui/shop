import { Box, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "app/hooks.js";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { selectKey } from "../../searchSlice.js";

const Item = styled(Box)(({ theme }) => ({
  "padding": "5px 16px",
  "borderRadius": theme.spacing(1),
  "cursor": "pointer",
  "transition": "all 0.3s ease 0s",
  "color": "rgb(128, 128, 137) ",
  "order": 2,
  "&:has(> a.active)": {
    background: "rgb(142 162 183 / 30%)",
    order: 1,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.4rem",
  },
  "& > .link-item": {
    "display": "flex",
    "alignItems": "center",
    "alignContent": "center",
    "fontSize": "1.2rem",
    "textDecoration": "none",
    "color": "rgb(39, 39, 42)",

    "&>.filter-name": {
      fontSize: "1.4rem",
    },
  },
}));
const Icon = styled("picture")(({ theme }) => ({
  "flex": "0 0 32px",
  "marginRight": theme.spacing(1),
  "&>img": {
    maxHeight: 10,
    width: "auto",
  },
}));

function SidebarItem({ data, query }) {
  const [starRate, setStarRate] = useState(0);

  const key = useAppSelector(selectKey).replace(/ /g, "+");
  const location = useLocation();

  useEffect(() => {
    const parse = queryString.parse(location.search);
    // @ts-ignore
    setStarRate(parse.rating);
  }, [location.search]);

  return (
    <Item>
      {data.display_value && query !== "rating" && query !== "price" && (
        <Link
          className="link-item"
          to={`/search?q=${key}&category=${data.query_value}`}
          relative="path"
        >
          {data.icon && (
            <Icon>
              <source
                type="image/webp"
                srcSet={data.icon}
              />
              <img
                src={data.icon}
                alt={data.text}
                height={data.icon_height}
                width={data.icon_width}
              />
            </Icon>
          )}
          <div>{data.display_value}</div>
        </Link>
      )}
      {data.display_value && query === "rating" && (
        <Link
          className={`link-item ${
            data.query_value === starRate ? "active" : ""
          }`}
          to={`/search?q=${key}&rating=${data.query_value}`}
        >
          <Rating
            name="rate-filter"
            size="small"
            defaultValue={+data.query_value}
            precision={0.5}
            readOnly
          />
          <div
            className="filter-name"
            style={{ marginLeft: 4 }}
          >
            {data.display_value}
          </div>
        </Link>
      )}
      {data.display_value && query === "price" && (
        <Link
          className={`link-item ${
            data.query_value === starRate ? "active" : ""
          }`}
          to={`/search?q=${key}&rating=${data.query_value}`}
        >
          <div className="filter-name">{data.display_value}</div>
        </Link>
      )}
    </Item>
  );
}

export default SidebarItem;
