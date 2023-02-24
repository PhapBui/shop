import { createSlice } from "@reduxjs/toolkit";

const recentlyCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cartArr: recentlyCart,
  loading: false,
};

const checkProductInCart = (arr, action) => {
  if (!arr) return;
  return arr.find((p) => p.id === action.payload.id);
};

const indexProduct = (arr, action) => {
  if (!arr) return;
  return arr.findIndex((obj) => obj.id === action.payload.id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.loading = true;
    },
    addToCartSuccess(state, action) {
      const productInCart = checkProductInCart(state.cartArr, action);
      if (!productInCart) {
        state.cartArr = [...state.cartArr, action.payload];
      } else {
        const objIndex = indexProduct(state.cartArr, action);

        if (objIndex === undefined) {
          state.cartArr[objIndex].quantily = +action.payload.quantily;
        } else {
          state.cartArr[objIndex].quantily += +action.payload.quantily;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cartArr));
      state.loading = false;
    },
    addToCartListFailed(state, action) {
      state.loading = false;
    },
    removeProductInCart(state, action) {
      state.cartArr.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartArr));
    },
    emptyCart: (state) => {
      state.cartArr = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.rootReducer.cart.cartArr;

const cartReducer = cartSlice.reducer;
export default cartReducer;
