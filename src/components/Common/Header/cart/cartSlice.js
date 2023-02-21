import { createSlice } from "@reduxjs/toolkit";
const cartItem = [
  {
    id: 0,
    qty: 1,
    name: "product1",
    price: 600,
    image: "https://nutthat.com/wp-content/uploads/2022/09/Duong-Don-Diep1.jpg",
  },
  {
    id: 1,
    qty: 1,
    name: "product2",
    price: 600,
    image: "https://nutthat.com/wp-content/uploads/2022/09/Duong-Don-Diep1.jpg",
  },
  {
    id: 2,
    qty: 2,
    name: "product3",
    price: 600,
    image: "https://nutthat.com/wp-content/uploads/2022/09/Duong-Don-Diep1.jpg",
  },
];
const initialState = {
  cartArr: cartItem,
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
          state.cartArr[objIndex].qty = +action.payload.qty;
        } else {
          state.cartArr[objIndex].qty += +action.payload.qty;
        }
      }
      state.loading = false;
    },
    addToCartListFailed(state, action) {
      state.loading = false;
    },
    removeProductInCart(state, action) {
      state.cartArr.splice(action.payload, 1);
      console.log(action);
    },
    emptyCart: (state) => {
      state.cartArr = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

// Selectors
export const addToCart = (state) => state.rootReducer.cart.cartArr;

const cartReducer = cartSlice.reducer;
export default cartReducer;
