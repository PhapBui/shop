import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import React, { useState, useEffect, memo } from "react";

const Wrapper = styled("div")({
  "marginTop": "16px",
  "&>.content": {
    "marginBottom": "12px",

    "&:last-child": {
      marginBottom: 0,
    },

    "&>.title": {
      "color": "rgb(142, 142, 142)",
      "fontSize": "13px",
      "lineHeight": "20px",
      "fontWeight": "400",
      "margin": "0px",
      "paddingRight": "20px",
      "&>span": {
        color: "rgb(36, 36, 36)",
        fontWeight: 600,
      },
    },
    "&>.option": {
      "display": "flex",
      "flexWrap": "wrap",
      "&>.item": {
        "cursor": "pointer",
        "margin": "8px 10px 0px 0px",
        "padding": "8px",
        "color": "rgb(36, 36, 36)",
        "fontSize": "13px",
        "minWidth": "80px",
        "position": "relative",
        "backgroundColor": "rgb(242, 242, 242)",
        "border": "1px solid transparent",
        "outline": "0px",
        "borderRadius": "4px",
        "&>img": {
          position: "absolute",
          top: "-1px",
          right: "-1px",
          display: "none",
        },
        "&.active": {
          "border": "1px solid rgb(13, 92, 182)",
          "backgroundColor": "rgb(229, 242, 255)",
          "&>img": {
            display: "block",
          },
        },
        "&:hover": {
          "border": "1px solid rgb(13, 92, 182)",
          "backgroundColor": "rgb(229, 242, 255)",
          "&>img": {
            display: "block",
          },
        },
      },
    },
  },
});

const SizeConfig = () => {
  const [productOpt, setProductOpt] = useState({});
  // const [products, setProducts] = useState([]);
  const [size, setSize] = useState([]);
  const productData = useAppSelector(selectProductById);

  useEffect(() => {
    if (productData) {
      setSize(productData.configurable_options);
      // setProducts(productData?.configurable_products);
    }
  }, [productData]);

  const handleChangeProduct = (item, code) => {
    setProductOpt((prev) => ({ ...prev, [code]: item.label }));
  };

  const renderLabel = (values, code) => {
    return values.map((value, idx) => (
      <button
        className={`item ${value.label === productOpt[code] ? "active" : ""}`}
        onClick={() => handleChangeProduct(value, code)}
        key={idx}
      >
        {value.label}
        <img
          className="selected-indicator"
          src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
          alt="Selected"
        ></img>
      </button>
    ));
  };
  return (
    <Wrapper className="size-config">
      {size &&
        size?.length > 0 &&
        size?.map((item, idx) => (
          <div
            className="content"
            key={idx}
          >
            <div className="title">
              {`${item.name}: `}
              <span>{productOpt[item.code] || item.values[idx].label}</span>
            </div>
            <div className="option">{renderLabel(item.values, item.code)}</div>
          </div>
        ))}
    </Wrapper>
  );
};

export default memo(SizeConfig);
