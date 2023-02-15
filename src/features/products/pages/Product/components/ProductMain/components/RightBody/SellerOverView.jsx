import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Wrapper = styled("div")({
  "&>.seller-info": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "minHeight": "60px",
    "&>.seller-name": {
      "marginLeft": 12,
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
    "&>.item": {
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

const SellerOverView = ({ data }) => {
  return (
    <Wrapper>
      <Link
        to={`/${data?.current?.url.replace("https://tiki.vn/", "")}`}
        className="seller-info"
      >
        <picture>
          <source
            srcSet={data?.current?.icon}
            type="image/webp"
          />
          <img
            className="seller-thumbnail"
            src={data?.current?.icon}
            alt={data?.current?.name}
            width={44}
          />
        </picture>
        <div className="seller-name">
          <span>{data?.current?.name}</span>
          <picture>
            <source />
            <img
              src={data?.current?.badge_img?.url}
              alt={data?.current?.name}
              width={data?.current?.badge_img?.width}
            />
          </picture>
        </div>
      </Link>
      <div className="seller-detail">
        {data?.current?.info &&
          data?.current?.info.length > 0 &&
          data?.current?.info.map((item, idx) => (
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
              {idx < data?.current?.info.length - 1 ? (
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
          to={`/${data?.current?.url.replace("https://tiki.vn/", "")}`}
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

export default SellerOverView;
