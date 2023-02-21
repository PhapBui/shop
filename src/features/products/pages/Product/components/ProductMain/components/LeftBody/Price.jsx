import { styled } from "@mui/material";
import React from "react";

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
  "&>img": {
    width: "75px",
    cursor: "pointer",
  },
}));

const Price = ({ data }) => {
  return (
    <Wrapper>
      {data && (
        <ProductPrice>
          <div className="price">
            <div
              className={`current-price ${
                data?.discount_rate > 0 ? "has-discount" : ""
              }`}
            >
              {data?.price?.toLocaleString("de-DE")} đ
            </div>
            {data?.discount_rate > 0 && (
              <div className="orignal-price">
                {data?.originalPrice?.toLocaleString("de-DE")} đ
              </div>
            )}
            {data?.discount_rate > 0 && (
              <div className="discount-rate">{data?.discount_rate} %</div>
            )}
          </div>
          <Astra
            className="astra"
            color={data?.astra.text_color}
          >
            <div className="content">
              <img
                src={data?.astra.icon.url}
                height={data?.astra.icon.height}
                width={data?.astra.icon.width}
                alt="astra"
              />
              <span>{data?.astra.text}</span>
            </div>
            <img
              src={data?.astra.asa_plus_badge}
              alt="astra"
            />
          </Astra>
        </ProductPrice>
      )}
    </Wrapper>
  );
};

export default Price;
