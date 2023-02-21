import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Wrapper = styled("div")({
  "display": "flex",
  "justifyContent": "space-between",
  "padding": "5px 10px",

  "&>.thumbnail": {
    "&>img": {
      width: 60,
      height: 60,
    },
  },
  "&>.detail": {
    flex: 1,
  },
});

const CartItem = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
CartItem.propTypes = {
  children: PropTypes.node,
};

export default CartItem;
