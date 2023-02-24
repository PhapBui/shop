import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  homeCollection: [],
  homeBrands: [],
  homeHotDeal: [],
  homeCamp: [],
  homeInfinite: [],
  sidebarMenu: [],

  product: [],
  coupon: [],
  delivery: [],
  seller: [],
  clientImage: [],

  comboList: [],
  comboDiscount: [],
  similarList: [],
  bannerEvent: [],
  reviewList: [],
  discoverList: [],
  recentlyList: [],

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

    fetchSideMenuConfig(state, action) {
      state.sidebarMenu = action.payload;
    },

    //Product Details
    fetchProductById(state, action) {
      state.loading = true;
    },
    fetchProductByIdSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    fetchCouponInfo(state, action) {
      state.loading = true;
    },
    fetchCouponInfoSuccess(state, action) {
      state.loading = false;
      state.coupon = action.payload;
    },
    fetchDeliveryInfo(state, action) {
      state.loading = true;
    },
    fetchDeliveryInfoSuccess(state, action) {
      state.loading = false;
      state.delivery = action.payload;
    },
    fetchSellerInfo(state, action) {
      state.loading = true;
    },
    fetchSellerInfoSuccess(state, action) {
      state.loading = false;
      state.seller = action.payload;
    },
    fetchClientReviewImages(state, action) {
      state.loading = true;
    },
    fetchClientReviewImagesSuccess(state, action) {
      state.loading = false;
      state.clientImage = action.payload;
    },

    //Product Single Page

    fetchProductCombo(state, action) {
      state.loading = true;
    },
    fetchProductComboSuccess(state, action) {
      state.loading = false;
      state.comboList = action.payload;
    },

    fetchProductComboDiscount(state, action) {
      state.loading = true;
    },
    fetchProductComboDiscountSuccess(state, action) {
      state.loading = false;
      state.comboDiscount = action.payload;
    },

    fetchProductSimilar(state, action) {
      state.loading = true;
    },
    fetchProductSimilarSuccess(state, action) {
      state.loading = false;

      const widgets = action.payload.widgets.reduce((a, b) => {
        a[b.code] = b;
        return a;
      }, {});
      state.similarList = widgets.similar_products;
      state.bannerEvent = widgets.banner_product_info;
    },

    fetchProducReviewList(state, action) {
      state.loading = true;
    },
    fetchProducReviewListSuccess(state, action) {
      state.loading = false;
      state.reviewList = action.payload;
    },

    fetchProductDiscover(state, action) {
      state.loading = true;
    },
    fetchProductDiscoverSuccess(state, action) {
      state.loading = false;
      state.discoverList = action.payload;
    },

    fetchProductRecentlyViewed(state, action) {
      state.loading = true;
    },
    fetchProductRecentlyViewedSuccess(state, action) {
      state.loading = false;
      state.recentlyList = action.payload.data;
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

/**
  loading
  list
  filter
  homeCollection
  homeBrands
  homeHotDeal
  homeCamp
  homeInfinite
  sidebarMenu
 */
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

export const selectSidebarMenuConfig = (state) =>
  state.rootReducer.products.sidebarMenu;

/**
  product
  coupon
  delivery
  seller
  clientImage
   */
export const selectProductById = (state) => state.rootReducer.products.product;

export const selectCoupon = (state) => state.rootReducer.products.coupon;
export const selectDeliveryInfo = (state) =>
  state.rootReducer.products.delivery;
export const selectSellerInfo = (state) => state.rootReducer.products.seller;
export const selectClientImage = (state) =>
  state.rootReducer.products.clientImage;
/**
  comboList
  comboDiscount
  similarList
  detail
  reviewList
  discoverList
  recentlyList
 */
export const selectComboList = (state) => state.rootReducer.products.comboList;
export const selectComboDiscount = (state) =>
  state.rootReducer.products.comboDiscount;
export const selectSimilarList = (state) =>
  state.rootReducer.products.similarList;
export const selectBannerEvent = (state) =>
  state.rootReducer.products.bannerEvent;
export const selectReviewList = (state) =>
  state.rootReducer.products.reviewList;
export const selectDiscoverList = (state) =>
  state.rootReducer.products.discoverList;
export const selectRecentlyList = (state) =>
  state.rootReducer.products.recentlyList;

//Reducer
const productReducer = productSlice.reducer;
export default productReducer;
