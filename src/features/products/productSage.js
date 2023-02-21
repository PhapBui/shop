import { all, call, put, takeLatest } from "redux-saga/effects";
import productTikiApi from "../../api/tiki/productTikiApi.js";
import { productActions } from "./productsSlice.js";

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
  ];
  const params = paramsValue.map((v, i) => `group=${v}`).join("&");

  const res = yield call(productTikiApi.getBanners, params);
  yield put(productActions.fetchHomeCamp(res));
}

function* fetchProductData(action) {
  try {
    yield all([
      call(fetchHomeBrands),
      call(fetchProductHomeCollection),
      call(fetchProductHotDeal),
      call(fetchInfiniteScrollBlock),
      call(fetchWidgetsBanner),
    ]);

    yield put(productActions.fetchProductsListSuccess());
  } catch (error) {
    console.log("Failed to fetch Product data", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductsList, fetchProductData);
}
