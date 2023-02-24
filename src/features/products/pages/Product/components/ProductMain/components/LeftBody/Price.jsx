import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import React, { memo } from "react";

const Wrapper = styled("div")(({ theme, color }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  backgroundColor: "rgb(250, 250, 250)",
  padding: "0px 16px 12px",
}));

const ProductPrice = styled("div")(({ color }) => ({
  "&>.price": {
    "display": "flex",
    "paddingTop": "12px",
    "alignItems": "flex-end",
    "&>.current-price ": {
      "fontSize": "32px",
      "lineHeight": "40px",
      "marginRight": "8px",
      "fontWeight": "600",
      "&.has-discount ": {
        color: "rgb(255, 66, 78)",
      },
    },
    "&>.orignal-price ": {
      color: "rgb(128, 128, 137)",
      textDecoration: "line-through",
      fontSize: "14px",
      lineHeight: "20px",
    },
    "&>.discount-rate ": {
      fontWeight: "600",
      marginLeft: "4px",
      color: "rgb(255, 66, 78)",
      marginTop: "3px",
      lineHeight: "18px",
      fontSize: "14px",
      padding: "0px 4px",
    },
  },
}));

const Astra = styled("div")(({ color }) => ({
  "display": "flex",
  "marginTop": "10px",
  "alignItems": "center",
  "&>img": {
    maxWidth: "42px",
    height: 20,
    marginLeft: 8,
    cursor: "pointer",
  },
  "&>.content": {
    borderRadius: "4px",
    backgroundColor: "rgb(242, 240, 254)",
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    padding: "4px 8px",
    border: "0.5px solid rgb(198, 188, 248)",
    margin: "0px",
    cursor: "pointer",
    color: color,
    fontSize: "1.4rem",
  },
}));

const Price = () => {
  const productData = useAppSelector(selectProductById);
  return (
    <Wrapper>
      {productData && (
        <ProductPrice>
          <div className="price">
            <div
              className={`current-price ${
                productData?.discount_rate > 0 ? "has-discount" : ""
              }`}
            >
              {productData?.price?.toLocaleString("de-DE")} đ
            </div>
            {productData?.discount_rate > 0 && (
              <div className="orignal-price">
                {productData?.original_price?.toLocaleString("de-DE")} đ
              </div>
            )}
            {productData?.discount_rate > 0 && (
              <div className="discount-rate">
                {productData?.discount_rate} %
              </div>
            )}
          </div>
          <Astra
            className="asa_cashback_widget"
            color={productData?.asa_cashback_widget?.text_color}
          >
            <div className="content">
              <img
                src={productData?.asa_cashback_widget?.icon.url}
                height={productData?.asa_cashback_widget?.icon.height}
                width={productData?.asa_cashback_widget?.icon.width}
                alt="asa_cashback_widget"
              />
              <span>{productData?.asa_cashback_widget?.text}</span>
            </div>
            <img
              src={
                productData?.asa_cashback_widget?.new_badge ||
                productData?.asa_cashback_widget?.asa_plus_badge
              }
              alt="asa_cashback_widget"
            />
          </Astra>
        </ProductPrice>
      )}
    </Wrapper>
  );
};

export default memo(Price);
