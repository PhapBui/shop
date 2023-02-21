import { all } from "redux-saga/effects";
import cartSaga from "components/Common/Header/cart/cartSage.js";
import productSaga from "../features/products/productSage.js";

export default function* rootSaga() {
  yield all([productSaga(), cartSaga()]);
}
