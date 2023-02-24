import { styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import React, { useEffect } from "react";
import CartListItem from "./CartListItem.jsx";
import { selectCartItems, cartActions } from "./cartSlice.js";
import EmptyCart from "./EmptyCart.jsx";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  borderRadius: theme.spacing(0.5),
  boxShadow: "7px 4px 12px 3px #938b8b",
  padding: theme.spacing(2, 1),
  minHeight: theme.spacing(30),
  width: theme.spacing(40),
}));

const Cart = () => {
  const dispatch = useAppDispatch();
  const CartList = useAppSelector(selectCartItems);
  useEffect(() => {
    dispatch(cartActions.addToCart);
  }, [dispatch]);

  const handleRemoveItem = (i) => {
    dispatch(cartActions.removeProductInCart(i));
  };

  return (
    <Wrapper>
      {CartList && CartList.length > 0 ? (
        <CartListItem
          removeItem={handleRemoveItem}
          data={CartList}
        />
      ) : (
        <EmptyCart />
      )}
    </Wrapper>
  );
};

Cart.propTypes = {};

export default Cart;
