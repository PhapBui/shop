// @ts-ignore
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

// @ts-ignore
const HotKey = styled("div")(({ theme, column, gap, borderTop }) => ({
  "backgroundColor": "rgb(255, 255, 255)",
  "padding": "8px 12px 12px",

  //HotKeys
  "&.hot_keywords": {
    "borderTop": "1px solid rgb(242, 242, 242)",

    "&>.content": {
      "gridTemplateColumns": "1fr 1fr 1fr",
      "gap": "8px",

      "& a": {
        "flexDirection": "row",

        "& img": {
          width: "38px",
          height: "38px",
          marginRight: "8px",
          objectFit: "contain",
        },
      },
    },

    "&>.title": {
      "&>.trending": {
        width: "24px",
        height: "24px",
        marginRight: "8px",
      },
    },
  },
  //Categories
  "&.hot_categories": {
    "&>.content": {
      "gridTemplateColumns": "1fr 1fr 1fr 1fr",
      "gap": "12px 8px",

      "& a": {
        "flexDirection": "column",

        "&>.thumb-wrap": {
          "padding": "0px 40px",
          "&>.thumb": {
            "width": "100%",
            "paddingTop": "100%",
            "borderRadius": "36%",
            "position": "relative",
            "overflow": "hidden",
            "background": "rgb(250, 250, 250)",
            "&>img": {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            },
          },
        },

        "&>.hot_categories": {
          fontSize: "12px",
          lineHeight: "16px",
          padding: "6px 0px 0px",
          textAlign: "center",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        },
      },
    },
  },

  //population
  "&>.content": {
    "display": "grid",
    "gridTemplateRows": " 1fr",

    "& a": {
      "position": "relative",
      "display": "flex",
      "fontSize": "12px",
      "lineHeight": "1.67",
      "background": "rgb(250, 250, 250)",
      "color": "rgb(36, 36, 36)",
      "textDecoration": "none",

      "&:hover": {
        boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px 0px",
      },
    },
  },

  "&>.title": {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    fontSize: "15px",
    lineHeight: "24px",
    padding: "0px 0px 8px",
  },
}));
const ListItems = styled("div")(({ theme }) => ({}));

function SearchWidget({ data }) {
  return (
    <HotKey
      // @ts-ignore
      className={data?.code}
    >
      <div className="title">
        {data?.code === "hot_keywords" ? (
          <img
            src={
              "https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
            }
            alt={data?.code}
            className="trending"
          />
        ) : null}
        <div>{data?.title}</div>
      </div>
      <ListItems className="content ">
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, idx) => (
            <Link
              to={item.url.replace("https://tiki.vn/", "")}
              key={idx}
            >
              {data?.code === "hot_keywords" ? (
                <img
                  src={item.thumbnail_url}
                  alt={item.title || item.name}
                />
              ) : (
                <div className="thumb-wrap">
                  <div className="thumb">
                    <img
                      src={item.thumbnail_url}
                      alt={item.title || item.name}
                    />
                  </div>
                </div>
              )}
              <div className={data?.type}>{item.title || item.name}</div>
            </Link>
          ))}
      </ListItems>
    </HotKey>
  );
}

export default SearchWidget;
