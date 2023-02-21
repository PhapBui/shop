import { styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import React, { useEffect } from "react";
import CartListItem from "./CartListItem.jsx";
import { addToCart, cartActions } from "./cartSlice.js";
import EmptyCart from "./EmptyCart.jsx";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  borderRadius: theme.spacing(0.5),
  boxShadow: "7px 4px 12px 3px #938b8b",
  padding: theme.spacing(1),
  minHeight: 250,
  width: 300,
}));

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector(addToCart);

  useEffect(() => {
    dispatch(cartActions.addToCart);
  }, [dispatch]);

  const handleRemoveItem = (i) => {
    dispatch(cartActions.removeProductInCart(i));
  };

  return (
    <Wrapper>
      {cartItem && cartItem.length > 0 ? (
        <CartListItem
          data={cartItem}
          removeItem={handleRemoveItem}
        />
      ) : (
        <EmptyCart />
      )}
    </Wrapper>
  );
};

Cart.propTypes = {};

export default Cart;
