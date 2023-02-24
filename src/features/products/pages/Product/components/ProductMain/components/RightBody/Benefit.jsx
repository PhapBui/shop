import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import React, { memo } from "react";

const Wrapper = styled("div")({
  "display": "flex",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.benefit-item": {
    "background": "white",
    "display": "flex",
    "flexDirection": "column",
    "flex": "1 0 30%",
    "alignItems": "center",
    "&>.item-icon": {
      height: 32,
      width: 32,
    },
    "&>.item-text": {
      textAlign: "center",
      fontSize: "1.2rem",
      lineHeight: "2rem",
      marginTop: "8px",
    },
  },
});

const Benefit = () => {
  const productData = useAppSelector(selectProductById);
  return (
    <Wrapper>
      {productData?.benefits &&
        productData?.benefits?.length > 0 &&
        productData?.benefits?.map((item, idx) => (
          <div
            className="benefit-item"
            key={idx}
          >
            <img
              className="item-icon"
              src={item.icon}
              alt={item.text}
            />
            <span
              className="item-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></span>
          </div>
        ))}
    </Wrapper>
  );
};

export default memo(Benefit);
