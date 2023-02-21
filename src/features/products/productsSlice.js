import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  homeCollection: [],
  homeBrands: [],
  homeHotDeal: [],
  homeCamp: [],
  homeInfinite: [],

  list: [1],
  filter: {
    page: 1,
    per_page: 12,
    page_size: 36,
    block_code: "infinite_scroll",
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
    },

    fetchProductsListFailed(state, action) {
      state.loading = false;
    },

    fetchHomeCollection(state, action) {
      state.homeCollection = action.payload;
    },

    fetchHomeBrands(state, action) {
      state.homeBrands = action.payload;
    },

    fetchHomeHotDeal(state, action) {
      state.homeHotDeal = action.payload;
    },
    fetchHomeCamp(state, action) {
      state.homeCamp = action.payload;
    },

    fetchHomeInfinite(state, action) {
      state.homeInfinite = action.payload;
    },

    setFilter(state, action) {
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

//Creat Select
export const loadingProductLoading = (state) =>
  state.rootReducer.products.loading;
export const loadingProductList = (state) => state.rootReducer.products.list;
export const selectFilterProduct = (state) => state.rootReducer.products.filter;

export const selectHomeCollection = (state) =>
  state.rootReducer.products.homeCollection;

export const selectHomeBrands = (state) =>
  state.rootReducer.products.homeBrands;

export const selectHomeHotDeal = (state) =>
  state.rootReducer.products.homeHotDeal;

export const selectHomeCamp = (state) => state.rootReducer.products.homeCamp;

export const selectHomeInfinite = (state) =>
  state.rootReducer.products.homeInfinite;

const productReducer = productSlice.reducer;
export default productReducer;
