import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Wrapper = styled("div")({
  "display": "flex",
  "justifyContent": "space-between",
  "padding": "5px 10px",
  "alignItems": "center",
  "borderBottom": "1px solid #c3c3c3",

  "&>.thumbnail": {
    "padding": "5px 10px",
    "&>img": {
      width: 60,
      height: 60,
    },
  },
  "&>.detail": {
    "flex": 1,
    "padding": "5px 10px",
    "&>.name": {
      fontWeight: 600,
      color: "rgb(36, 36, 36)",
    },
    "&>.price": {
      "fontSize": "1.4rem",
      "fontWeight": 600,
      "color": "#333",

      "&>.icon": {
        fontSize: "1.2rem",
      },
    },
  },
  "&>.cancle": {
    "cursor": "pointer",
    "width": "24px",
    "height": "24px",
    "padding": "5px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "border": "2px solid rgb(128, 128, 137)",
    "borderRadius": "999px",
    "&>.icon": {
      fontSize: "1.8rem",
    },
  },
});

const CartItem = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
CartItem.propTypes = {
  children: PropTypes.node,
};

export default CartItem;
