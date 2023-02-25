import { all, call, put, takeLatest } from "redux-saga/effects";
import productTikiApi from "../../api/tiki/productTikiApi.js";
import { productActions } from "./productsSlice.js";

//HomePage components
function* fetchHomeBrands() {
  const paramsValue = ["msp_widget_banner_premium"];
  const params = paramsValue.map((v, i) => `group=${v}`).join("&");
  const res = yield all([call(productTikiApi.getBanners, params)]);
  yield put(productActions.fetchHomeBrands(res));
}

function* fetchProductHomeCollection() {
  const res = yield all([
    call(productTikiApi.getHomeCollection, { page: 1, per_page: 12 }),
  ]);
  yield put(productActions.fetchHomeCollection(res));
}

function* fetchProductHotDeal() {
  const res = yield call(productTikiApi.getHomeHotDeal);
  yield put(productActions.fetchHomeHotDeal(res));
}

function* fetchInfiniteScrollBlock() {
  const res = yield call(productTikiApi.getBlockProduct, {
    page_size: 36,
    block_code: "infinite_scroll",
  });
  yield put(productActions.fetchHomeInfinite(res));
}

function* fetchWidgetsBanner() {
  const paramsValue = [
    "msp_widget_banner_left",
    "msp_widget_banner_right_top",
    "msp_widget_banner_right_bottom",
    "msp_widget_banner_premium",
    "home_banner_main_v2",
    "msp_app_background_v2",
  ];
  const params = paramsValue.map((v, i) => `group=${v}`).join("&");

  const res = yield call(productTikiApi.getBanners, params);
  yield put(productActions.fetchHomeCamp(res));
}

function* fetchSidebarMenuConfig() {
  const res = yield call(productTikiApi.getSibarMenuConfig);
  yield put(productActions.fetchSideMenuConfig(res));
}

function* fetchProductData(action) {
  try {
    yield all([
      call(fetchHomeBrands),
      call(fetchProductHomeCollection),
      call(fetchProductHotDeal),
      call(fetchInfiniteScrollBlock),
      call(fetchWidgetsBanner),
      call(fetchSidebarMenuConfig),
    ]);

    yield put(productActions.fetchProductsListSuccess());
  } catch (error) {
    console.log("Failed to fetch Product data", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

//Product Page->Detail
function* fectProductInfo(action) {
  try {
    const product = yield call(productTikiApi.getById, action.payload);
    const res = yield call(productTikiApi.getProductCoupon, action.payload);
    yield put(productActions.fetchProductByIdSuccess(product));
    yield put(productActions.fetchCouponInfoSuccess(res));
  } catch (error) {
    console.log("Failed to Fetch product data :", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

function* fetchDeliveryInfo(action) {
  try {
    const res = yield call(
      productTikiApi.getProductDeliveryInfo,
      action.payload
    );
    yield put(productActions.fetchDeliveryInfoSuccess(res));
  } catch (error) {
    console.log("Failed to Fetch DeliveryInfo :", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchSellerInfo(action) {
  try {
    const res = yield call(productTikiApi.getSellerInfo, action.payload);
    yield put(productActions.fetchSellerInfoSuccess(res));
  } catch (error) {
    console.log("Failed to Fetch SellerInfo:", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductReviewPhotoList(action) {
  try {
    const res = yield call(productTikiApi.getProductReviewList, action.payload);
    yield put(productActions.fetchClientReviewImagesSuccess(res));
  } catch (error) {
    console.log("Failed to Fetch SellerInfo:", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

// Product SinglePage components
function* fetchProductCombo(action) {
  try {
    const res = yield call(
      productTikiApi.getProductComboSeller,
      action.payload
    );
    yield put(productActions.fetchProductComboSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductComboDiscount(action) {
  try {
    const res = yield call(
      productTikiApi.getProductMatchDiscount,
      action.payload
    );
    yield put(productActions.fetchProductComboDiscountSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductSimilar(action) {
  try {
    const res = yield call(productTikiApi.getWidgets, action.payload);
    yield put(productActions.fetchProductSimilarSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductReviewList(action) {
  try {
    const res = yield call(productTikiApi.getProductReviewList, action.payload);
    yield put(productActions.fetchProducReviewListSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductDiscoverList(action) {
  try {
    const params = {
      "block_code": "maybe_you_like",
      "strategy": "new_pdp",
      "model.pdp.highest_product_id": action.payload.product_id,
      "model.pdp.seller_product_id": action.payload.seller_id,
    };
    const res = yield call(productTikiApi.getBlockProduct, params);
    yield put(productActions.fetchProductDiscoverSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}
function* fetchProductRecentlyViewedList(action) {
  const params = {
    product_id: action.payload.productId,
    ids: "145974294,190194378",
  };
  try {
    const res = yield call(productTikiApi.getProductViewedRecently, params);
    yield put(productActions.fetchProductRecentlyViewedSuccess(res));
  } catch (error) {
    console.log("Failed to fetch ProductCombo Data: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductsList, fetchProductData);
  yield takeLatest(productActions.fetchProductById, fectProductInfo);
  yield takeLatest(productActions.fetchDeliveryInfo, fetchDeliveryInfo);
  yield takeLatest(productActions.fetchSellerInfo, fetchSellerInfo);
  yield takeLatest(
    productActions.fetchClientReviewImages,
    fetchProductReviewPhotoList
  );
  yield takeLatest(productActions.fetchProductCombo, fetchProductCombo);
  yield takeLatest(
    productActions.fetchProductComboDiscount,
    fetchProductComboDiscount
  );
  yield takeLatest(productActions.fetchProductSimilar, fetchProductSimilar);
  yield takeLatest(
    productActions.fetchProducReviewList,
    fetchProductReviewList
  );
  yield takeLatest(
    productActions.fetchProductDiscover,
    fetchProductDiscoverList
  );
  yield takeLatest(
    productActions.fetchProductRecentlyViewed,
    fetchProductRecentlyViewedList
  );
}
