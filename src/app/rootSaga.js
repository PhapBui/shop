import { all } from "redux-saga/effects";
import cartSaga from "features/cart/cartSage.js";
import productSaga from "../features/products/productSaga.js";
import searchSaga from "features/products/pages/Search/searchSaga.js";
import userSaga from "features/users/userSaga.js";

export default function* rootSaga() {
  yield all([productSaga(), cartSaga(), searchSaga(), userSaga()]);
}
