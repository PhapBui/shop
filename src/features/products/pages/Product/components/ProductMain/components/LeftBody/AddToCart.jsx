import { styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import {
  cartActions,
  // addToCart,
} from "features/cart/cartSlice.js";
import { selectProductById } from "features/products/productsSlice.js";
import React, { useEffect, useState } from "react";

const Wrapper = styled("div")({
  "display": "flex",
  "flexDirection": "column",
  "margin": "16px 0px 0px",
  "padding": "16px 0px",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.label": {
    fontSize: "1.6rem",
    lineHeight: "1.6",
  },

  "&>.group-input": {
    "display": "flex",
    "alignItems": "center",
    "marginTop": "8px",
    "&>button,>input": {
      height: "30px",
      color: " rgb(36, 36, 36)",
      fontSize: "14px",
      textAlign: "center",
      outline: "none",
      transition:
        "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
    },
    "&>input": {
      width: "40px",
      border: "1px solid rgb(236, 236, 236)",
    },
    "&>button": {
      "cursor": "pointer",
      "width": "30px",
      "backgroundColor": "rgb(255, 255, 255)",
      "border": "1px solid rgb(236, 236, 236)",
      "&:first-of-type": {
        borderRight: "none",
        borderRadius: "4px 0px 0px 4px",
        padding: "4px",
      },
    },
  },

  "&>.group-button": {
    "marginTop": "16px",
    "flex": "1 1 0%",
    "display": "flex",

    "&>.btn": {
      "cursor": "pointer",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "minWidth": "190px",
      "width": "100%",
      "maxWidth": "300px",
      "height": "4.8rem",
      "fontSize": "1.5rem",
      "lineHeight": "2.4rem",
      "fontWeight": "600",
      "textTransform": "capitalize",
      "border": "none",
      "borderRadius": "4px",
      "outline": "none",

      "&.btn-add-to-cart": {
        "color": "rgb(255, 255, 255)",
        "backgroundColor": "rgb(255, 57, 69)",

        "&.installment-payment": {
          "border": "1px solid rgb(13, 92, 182)",
          "fontSize": "1.5rem",
          "lineHeight": "1.5rem",
          "color": "rgb(13, 92, 182)",
          "flexDirection": "column",
          "textTransform": "unset",
          "background": "white",
          "justifyContent": "center",
          "marginLeft": "12px",
          "&>span": {
            fontSize: "1.1rem",
            lineHeight: "1.45",
            fontWeight: 400,
          },
        },
      },
    },
    "&>.btn-chat": {
      "margin": "0px 0px 0px 12px",
      "width": "48px",
      "minWidth": "unset",
      "height": "48px",
      "background": "rgb(255, 255, 255)",
      "flexShrink": "0",
      "flexDirection": "column",
      "border": "1px solid rgb(13, 92, 182)",
      "&>span": {
        fontSize: "10px",
        lineHeight: "12px",
        fontWeight: "600",
        margin: "3px 0px 0px",
        color: "rgb(13, 92, 182)",
      },
    },
  },
});

const AddToCart = () => {
  const [quantily, setQuantily] = useState(1);
  const [data, setData] = useState({});
  // const count = useAppSelector(addToCart);
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProductById);
  const handleProductQuantily = (e) => {
    setQuantily(e.target.value);
  };

  useEffect(() => {
    const data = {
      quantily,
      price: productData.price,
      name: productData.name,
      id: productData.id,
      image: productData.thumbnail_url,
      short_url: productData.url_path,
    };
    setData(data);
  }, [productData, quantily]);

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(data));
    setQuantily(1);
  };

  return (
    <Wrapper>
      <p className="label">Số lượng</p>
      <div className="group-input">
        <button className="disable">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
            alt="remove-icon"
            width="20"
            height="20"
          />
        </button>
        <input
          type="number"
          className="input"
          value={quantily}
          onChange={(e) => handleProductQuantily(e)}
        />
        <button>
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
            alt="add-icon"
            width="20"
            height="20"
          />
        </button>
      </div>
      <div className="group-button">
        <button
          type="button"
          className="btn btn-add-to-cart"
          data-view-id="pdp_add_to_cart_button"
          onClick={handleAddToCart}
        >
          Chọn mua
        </button>
        {productData?.installment_info_v2 && (
          <a
            data-view-id="pdp_installment_button"
            className="btn btn-add-to-cart installment-payment"
            type="button"
            href={productData?.installment_info_v2?.redirect_url}
            rel="noreferrer"
            target="_blank"
          >
            {productData?.installment_info_v2?.title}
            <span>{productData?.installment_info_v2?.summary}</span>
          </a>
        )}
        <div className="btn btn-chat">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8.25C0 3.95165 4.15905 0.75 9 0.75C13.8409 0.75 18 3.95165 18 8.25C18 10.0141 17.2499 11.5969 16.0855 12.8642L16.4951 16.414C16.5254 16.6772 16.4147 16.9369 16.2037 17.0972C15.9927 17.2575 15.7128 17.2946 15.4674 17.1947L11.2797 15.4913C10.5273 15.6864 9.78118 15.75 9 15.75C4.15905 15.75 0 12.5483 0 8.25ZM9 2.25C4.69095 2.25 1.5 5.04835 1.5 8.25C1.5 11.4517 4.69095 14.25 9 14.25C9.77869 14.25 10.451 14.1792 11.1095 13.9816C11.2734 13.9325 11.4491 13.9408 11.6076 14.0053L14.8598 15.3282L14.5549 12.686C14.5287 12.4585 14.6078 12.2316 14.7697 12.0697C15.8609 10.9785 16.5 9.66018 16.5 8.25C16.5 5.04835 13.3091 2.25 9 2.25Z"
              fill="#0d5cb6"
            ></path>
          </svg>
          <span>Chat</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
