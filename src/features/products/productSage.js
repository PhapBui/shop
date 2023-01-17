import { call, put, takeLatest } from "redux-saga/effects";
import productApi from "../../api/productApi.js";
import { productActions } from "./productsSlice.js";

function* fetchProductList(action) {
  try {
    const res = yield call(productApi.getAll, action.payload);
    yield put(productActions.fetchProductsListSuccess(res));
  } catch (error) {
    console.log("Failed to fetchStudentList: ", error);
    yield put(productActions.fetchProductsListFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductsList, fetchProductList);
}
