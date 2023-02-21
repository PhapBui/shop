import { styled } from "@mui/material";
import React, { useState, useEffect } from "react";

const Wrapper = styled("div")({
  "marginTop": "16px",
  "&>.content": {
    "marginBottom": "12px",

    "&:last-child": {
      marginBottom: 0,
    },

    "&>.title": {
      "color": "rgb(142, 142, 142)",
      "fontSize": "13px",
      "lineHeight": "20px",
      "fontWeight": "400",
      "margin": "0px",
      "paddingRight": "20px",
      "&>span": {
        color: "rgb(36, 36, 36)",
        fontWeight: 600,
      },
    },
    "&>.option": {
      "display": "flex",
      "flexWrap": "wrap",
      "&>.item": {
        "cursor": "pointer",
        "margin": "8px 10px 0px 0px",
        "padding": "8px",
        "color": "rgb(36, 36, 36)",
        "fontSize": "13px",
        "minWidth": "80px",
        "position": "relative",
        "backgroundColor": "rgb(242, 242, 242)",
        "border": "1px solid transparent",
        "outline": "0px",
        "borderRadius": "4px",
        "&>img": {
          position: "absolute",
          top: "-1px",
          right: "-1px",
          display: "none",
        },
        "&.active": {
          "border": "1px solid rgb(13, 92, 182)",
          "backgroundColor": "rgb(229, 242, 255)",
          "&>img": {
            display: "block",
          },
        },
        "&:hover": {
          "border": "1px solid rgb(13, 92, 182)",
          "backgroundColor": "rgb(229, 242, 255)",
          "&>img": {
            display: "block",
          },
        },
      },
    },
  },
});

const SizeConfig = ({ data }) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    if (data) setProduct(data.size[0]?.values[0]?.label);
  }, [data]);

  const handleChangeProduct = (item) => {
    setProduct(item.label);
  };
  return (
    <Wrapper className="size-config">
      {data && (
        <div className="content">
          <div className="title">
            {`${data && data.size[0]?.name}: `}
            <span>{product}</span>
          </div>
          <div className="option">
            {data &&
              data.size[0]?.values.map((item, idx) => (
                <button
                  className={`item ${item.label === product ? "active" : ""}`}
                  onClick={() => handleChangeProduct(item)}
                  key={idx}
                >
                  {item.label}
                  <img
                    className="selected-indicator"
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                    alt="Selected"
                  ></img>
                </button>
              ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SizeConfig;
