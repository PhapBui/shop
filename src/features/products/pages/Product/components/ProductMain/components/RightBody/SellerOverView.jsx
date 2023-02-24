import { styled } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useAppSelector } from "app/hooks.js";
import { selectSellerInfo } from "features/products/productsSlice.js";

const Wrapper = styled("div")({
  "&>.seller-info": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "minHeight": "60px",
    "&>.seller-name": {
      "marginLeft": 12,
      "display": "flex",
      "flexDirection": "column",
      "&>span": {
        margin: "0px 0px 2px",
        fontSize: "1.6rem",
        fontWeight: "600",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.6",
        letterSpacing: "normal",
        color: "rgb(36, 36, 36)",
      },
    },
  },

  "&>.seller-detail": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "minHeight": "40px",
    "& .item": {
      "display": "flex",
      "flexDirection": "column",
      "flex": "1 1 0%",
      "alignItems": "center",

      "&>.title": {
        display: "flex",
        alignItems: "center",
        fontSize: "1.6rem",
        fontWeight: "600",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.6",
        letterSpacing: "normal",
      },
      "&>.sub-title": {
        fontSize: "1.1rem",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.45",
        letterSpacing: "normal",
        color: "rgb(120, 120, 120)",
      },
    },
    "&>.border": {
      alignSelf: "center",
      width: "1px",
      height: "16px",
      backgroundColor: "rgb(242, 242, 242)",
    },
  },

  "&>.seller-action": {
    "display": "flex",
    "padding": "12px 0",
    "justifyContent": "space-between",
    "&>.action": {
      "display": "flex",
      "padding": "6px 9px",
      "alignItems": "center",
      "borderRadius": "4px",
      "border": "1px solid rgb(13, 92, 182)",
      "cursor": "pointer",

      "&>.follow": {
        padding: "6px 11.3px",
      },

      "&>img": {
        width: 20,
        height: 20,
      },

      "&>span": {
        fontSize: "1.3rem",
        fontWeight: "600",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.54",
        letterSpacing: "normal",
        color: "rgb(13, 92, 182)",
        marginLeft: "4px",
      },
    },
  },
});

const SellerOverView = () => {
  const sellerInfo = useAppSelector(selectSellerInfo);
  return (
    <Wrapper>
      <Link
        to={`/${sellerInfo?.data?.seller.url.replace("https://tiki.vn/", "")}`}
        className="seller-info"
      >
        <picture>
          <source
            srcSet={sellerInfo?.data?.seller.icon}
            type="image/webp"
          />
          <img
            className="seller-thumbnail"
            src={sellerInfo?.data?.seller.icon}
            alt={sellerInfo?.data?.seller.name}
            width={44}
          />
        </picture>
        <div className="seller-name">
          <span>{sellerInfo?.data?.seller.name}</span>
          <picture>
            <source />
            <img
              src={sellerInfo?.data?.seller.badge_img?.url}
              alt={sellerInfo?.data?.seller.name}
              width={sellerInfo?.data?.seller.badge_img?.width}
            />
          </picture>
        </div>
      </Link>
      <div className="seller-detail">
        {sellerInfo?.data?.seller.info &&
          sellerInfo?.data?.seller.info.length > 0 &&
          sellerInfo?.data?.seller.info.map((item, idx) => (
            <div key={idx}>
              <div className={`item ${item.type}`}>
                <div className="title">
                  {item.title}{" "}
                  {item.type === "review" ? (
                    <StarIcon style={{ color: "rgb(253, 216, 54)" }} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="sub-title">{item.sub_title}</div>
              </div>
              {idx < sellerInfo?.data?.seller.info.length - 1 ? (
                <div className="border"></div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
      <div className="seller-action ">
        <Link
          className="action"
          data-view-id="pdp_store_seller.view"
          to={`/${sellerInfo?.data?.seller.url.replace(
            "https://tiki.vn/",
            ""
          )}`}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png"
            alt="view-store"
          />
          <span>Xem Shop</span>
        </Link>
        <div
          data-view-id="pdp_store_seller.follow"
          className="action follow"
          data-view-label="196090"
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png"
            alt="follow-store"
          />
          <span>Theo Dõi</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(SellerOverView);
