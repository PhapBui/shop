import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import React from "react";
import AddOnToolTip from "./AddOnToolTip.jsx";
const Wrapper = styled("div")({
  "background": "white",
  "margin": "8px 0px",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.title": {
    padding: "12px 12px 0px",
    fontSize: "1.5rem",
    lineHeight: "24px",
    fontWeight: "600",
  },
  "&>.wrap": {
    "&>.item": {
      "display": "flex",
      "padding": "12px 16px",
      "borderBottom": "1px solid rgb(242, 242, 242)",
      "alignItems": "center",

      "&:last-of-type": {
        borderBottom: "none",
      },

      "&>img": {
        "maxWidth": "100%",

        "&.thumb": {
          width: "48px",
          height: "48px",
          objectFit: "contain",
          margin: "0px 8px",
          flexShrink: "0",
        },
      },

      "&>.info": {
        "display": "flex",
        "flexDirection": "column",
        "flex": "1 1 0%",
        "&>.name": {
          "display": "flex",
          "alignItems": "center",
          "&>span": {
            fontSize: "1.3rem",
            lineHeight: "2rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
          },
          "&>.info-icon": {
            width: "16px",
            height: "16px",
            marginLeft: "4px",
          },
        },
        "&>.price": {
          fontSize: "1.5rem",
          lineHeight: "24px",
          fontWeight: "600",
        },
      },
    },
  },
});

const AddOn = () => {
  const productData = useAppSelector(selectProductById);

  return (
    <Wrapper className="add-on">
      <div className="title">{productData?.add_on_title}</div>
      <div className="wrap">
        {productData?.add_on &&
          productData?.add_on.map((item, idx) => (
            <div
              className="item"
              key={idx}
            >
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/enabled_on.svg"
                alt=""
              />
              <img
                className="thumb"
                src={item.thumbnail_url}
                alt="thumb"
              />
              <div className="info">
                <div className="name">
                  <span>{item.name}</span>
                  <AddOnToolTip
                    text={item.add_on_description_list}
                    title={item.name}
                    readmore={item.add_on_information_url}
                    readmoreTitle={item.add_on_information_title}
                  >
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icons-info-outlined-default.svg"
                      alt="info-icon"
                      className="info-icon"
                    />
                  </AddOnToolTip>
                </div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default AddOn;
