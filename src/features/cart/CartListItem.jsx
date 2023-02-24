import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
const Wrapper = styled("div")({
  "& .name": {
    lineHeight: "1.3",
    marginBottom: "5px",
    padding: "0",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: "36px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
  },
  "& .total-bill": {
    "textAlign": "center",
    "padding": "12px ",
    "marginBottom": "16px",
    "fontSize": "1.6rem",
    "color": "#333",
    "fontWeight": "600",
    "borderBottom": "2px solid #ccc",
    "&>.text": {
      textDecoration: "underline",
    },
    "&>.value": {
      color: "red",
    },
  },
  "&>.action": {
    "display": "flex",
    "flexDirection": "column",
    "padding": "0 16px",
    "&>.btn-action": {
      "display": "block",
      "backgroundColor": "transparent",
      "border": "1px solid transparent",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontSize": ".97em",
      "fontWeight": "bolder",
      "letterSpacing": ".03em",
      "lineHeight": "2.4em",
      "maxWidth": "100%",
      "minHeight": "2.5em",
      "padding": "0 1.2em",
      "position": "relative",
      "textAlign": "center",
      "textDecoration": "none",
      "textShadow": "none",
      "textTransform": "uppercase",
      "transition":
        "transform .3s,border .3s,background .3s,box-shadow .3s,opacity .3s,color .3s",
      "verticalAlign": "middle",
      "marginBottom": "8px",
      "&:last-of-type": {
        marginBottom: "0",
      },
      "&.check-cart": {
        backgroundColor: "#34c1bb",
        borderColor: "rgba(0,0,0,.05)",
        color: "#fff",
      },
      "&.check-out": {
        backgroundColor: "#d26e4b",
        borderColor: "rgba(0,0,0,.05)",
        color: "#fff",
      },
    },
  },
});

const CartListItem = ({ data, removeItem }) => {
  const totalBill = (cartList) => {
    if (cartList) return cartList.reduce((a, b) => a + b.price * b.quantily, 0);
  };

  const handleCancleItem = (i) => {
    removeItem(i);
  };
  const currencyFormat = (number) => {
    const money = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(number);
    return money;
  };

  const totalPrice = useMemo(() => currencyFormat(totalBill(data)), [data]);

  return (
    <Wrapper>
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <CartItem key={idx}>
            <div className="thumbnail">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="detail">
              <Link
                className="name"
                to={`/san-pham/${item.short_url.replace(
                  "https://tiki.vn/product-p",
                  "san-pham/"
                )}`}
              >
                {item.name}
              </Link>
              <div className="price">
                {currencyFormat(item.price)} <ClearIcon className="icon" />{" "}
                {item.quantily}
              </div>
            </div>
            <div
              className="cancle"
              onClick={() => handleCancleItem(idx)}
            >
              <ClearIcon className="icon" />
            </div>
          </CartItem>
        ))}
      <div className="total-bill">
        <span className="text">Tổng tiền:</span>
        <span className="value">{` ${totalPrice}`}</span>
      </div>
      <div className="action">
        <Link
          className="btn-action check-cart"
          to="/cart"
        >
          Xem giỏ hàng
        </Link>
        <Link
          className="btn-action check-out"
          to="/check-out"
        >
          Thanh toán
        </Link>
      </div>
    </Wrapper>
  );
};
CartListItem.propTypes = {
  data: PropTypes.array,
  removeItem: PropTypes.func,
};

export default CartListItem;
