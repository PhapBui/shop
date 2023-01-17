import { all } from "redux-saga/effects";
import productSaga from "../features/products/productSage.js";

export default function* rootSaga() {
  yield all([productSaga()]);
}
