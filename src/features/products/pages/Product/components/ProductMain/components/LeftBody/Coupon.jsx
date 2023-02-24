import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectCoupon } from "features/products/productsSlice.js";
import React, { memo } from "react";

const Wrapper = styled("div")({
  "backgroundColor": "rgb(255, 255, 255)",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "marginTop": "16px",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "paddingTop": "16px",
  "&>.title": {
    fontSize: "15px",
    fontWeight: "600",
    color: "rgb(36, 36, 36)",
    flex: "1 1 0%",
    cursor: "pointer",
  },
  "&>.options": {
    "display": "flex",
    "padding": "0px 4px 0px 0px",
    "flexWrap": "wrap",

    "&>.option": {
      "cursor": "pointer",
      "padding": "3px 12px",
      "border": "1px solid rgb(13, 92, 182)",
      "borderRadius": "4px",
      "fontSize": "13px",
      "fontWeight": "500",
      "lineHeight": "20px",
      "color": "rgb(13, 92, 182)",
      "position": "relative",
      "margin": "8px 12px 0px 0px",
      "&:after,&:before": {
        content: `""`,
        width: "10px",
        height: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor:
          "transparent rgb(13, 92, 182) rgb(13, 92, 182) transparent",
        borderImage: "initial",
        position: "absolute",
        top: "50%",
        marginTop: "-5px",
        borderRadius: "50%",
      },
      "&:after": {
        right: "-6px",
        transform: "rotate(135deg)",
      },
      "&:before": {
        left: "-6px",
        transform: "rotate(-45deg)",
      },
    },

    "&>.view-more-coupon": {
      width: "28px",
      height: "28px",
      margin: "8px 0px 0px -12px",
      cursor: "pointer",
    },
  },
});

const Coupon = () => {
  const couponData = useAppSelector(selectCoupon);
  return (
    <Wrapper className="coupon">
      <div className="title">{couponData && couponData?.coupon_qty}</div>
      <div className="options">
        {couponData &&
          couponData?.coupon_label?.map((lab, idx) => (
            <div
              className="option"
              key={idx}
            >
              {lab}
            </div>
          ))}
        <img
          className="view-more-coupon"
          src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png"
          alt="view-more-coupon"
        />
      </div>
    </Wrapper>
  );
};

export default memo(Coupon);
