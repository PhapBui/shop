import { styled } from "@mui/material";
import Location from "components/Common/Header/SubHeader/Location.jsx";
import React from "react";

const Wrapper = styled("div")({
  "backgroundColor": "rgb(255, 255, 255)",
  "margin": "16px 0px 0px",
  "borderTop": "1px solid rgb(242, 242, 242)",

  "&>.location": {
    "display": "flex",
    "padding": "12px 0px",
    "justifyContent": "space-between",
    "cursor": "pointer",
    "& .address": {
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "24px",
    },
    "& h4.title": {
      fontWeight: 400,
    },
  },
  "&>.shipping-zone": {
    "position": "relative",
    "display": "flex",
    "flex": "1 1 0%",
    "flexDirection": "column",
    "marginBottom": "12px",
    "marginRight": "12px",
    "padding": "8px",
    "borderRadius": "12px",
    "width": "100%",
    "maxWidth": "100%",
    "border": "1px solid rgb(238, 238, 238)",
    "color": "rgb(120, 120, 120)",
    "fontSize": "1.4rem",
    "lineHeight": "20px",
    "zIndex": "1",

    "&>.shipping-header": {
      "display": "flex",
      "alignItems": "center",
      "&>.divider": {
        content: `" "`,
        width: "1px",
        height: "8px",
        margin: "0px 4px",
        backgroundColor: "rgb(235, 235, 240)",
      },

      "&>.shipping-high-light": {
        color: "rgb(0, 171, 86)",
        fontWeight: 600,
      },
      "& img": {
        display: "flex",
      },
    },

    "&>.shipping-fee": {
      "display": "flex",
      "marginBottom": "2px",
      "color": "rgb(56, 56, 61)",
      "&>span": {
        marginLeft: "4px",
        color: "#808089",
        fontSize: "1.2rem",
      },
    },
    "&>.asa-deliver": {
      "display": "flex",
      "alignItems": "center",
      "color": "rgb(64, 45, 161)",
      "backgroundColor": "rgb(242, 240, 254)",
      "padding": "4px",
      "width": "fit-content",
      "borderRadius": "4px",
      "cursor": "pointer",

      "&>span": {
        marginLeft: "4px",
        color: "rgb(64, 45, 161)",
        fontSize: "1.2rem",
        lineHeight: "1.6rem",
      },
    },
  },
});

const Shipping = () => {
  return (
    <Wrapper className="shipping">
      <div className="location">
        <Location
          pretext="Giao đến: "
          aftertext={true}
        />
      </div>
      <div className="shipping-zone">
        <div className="shipping-header">
          <div className="logo">
            <img
              src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
              alt="fastship"
              height={14}
              width={32}
            />
          </div>
          <div className="divider"></div>
          <div className="shipping-high-light">Ngày mai, trước 17:00</div>
        </div>

        <div className="shipping-fee">
          Vận chuyển: 11.500đ{" "}
          <span>
            <del> 31.500đ</del>
          </span>
        </div>

        <div className="asa-deliver">
          <img
            src="https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png"
            alt="asa-deliver"
            width={13}
            height={"auto"}
          />
          <span>Freeship 100% với 52,17 ASA</span>
          <span
            style={{
              display: "inline-block",
              backgroundImage:
                " url(https://frontend.tikicdn.com/_desktop-next/static/img/icons/question-blue.svg)",
              width: "10px",
              height: "10px",
              backgroundSize: "10px 10px",
              marginLeft: "4px",
            }}
          ></span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shipping;
