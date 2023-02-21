import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import CartItem from "./CartItem.jsx";

const Wrapper = styled("div")({});
const CartListItem = ({ data, removeItem }) => {
  const totalBill = (cartList) => {
    if (cartList) return cartList.reduce((a, b) => a + b.price * b.qty, 0);
  };
  const handleCancleItem = (i) => {
    removeItem(i);
  };
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
              <div className="name">{item.name}</div>
              <div className="price">
                {item.price} x {item.qty}
              </div>
            </div>
            <div
              className="cancle"
              onClick={() => handleCancleItem(idx)}
            >
              X
            </div>
          </CartItem>
        ))}
      <div className="total-bill">{totalBill(data)}</div>
    </Wrapper>
  );
};
CartListItem.propTypes = {
  data: PropTypes.array,
  removeItem: PropTypes.func,
};

export default CartListItem;
