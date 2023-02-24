import { all } from "redux-saga/effects";
import cartSaga from "components/Common/Header/cart/cartSage.js";
import productSaga from "../features/products/productSaga.js";
import searchSaga from "features/products/pages/Search/searchSaga.js";

export default function* rootSaga() {
  yield all([productSaga(), cartSaga(), searchSaga()]);
}
