import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [1],
  filter: {
    _page: 1,
    _limit: 15,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsList(state, action) {
      state.loading = true;
    },
    fetchProductsListSuccess(state, action) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchProductsListFailed(state, action) {
      state.loading = false;
    },
    setFilter(state, action) {
      console.log(action);
      state.loading = false;
      state.filter = action.payload;
    },
    setFilterWithDebounce(state, action) {
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const productActions = productSlice.actions;

export const loadingProductLoading = (state) =>
  state.rootReducer.products.loading;
export const loadingProductList = (state) => state.rootReducer.products.list;
export const selectFilterProduct = (state) => state.rootReducer.products.filter;

const productReducer = productSlice.reducer;
export default productReducer;
