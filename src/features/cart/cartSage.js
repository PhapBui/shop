import { put, takeLatest } from "redux-saga/effects";
import { cartActions } from "./cartSlice.js";

function* fetchCart(action) {
  yield put(cartActions.addToCartSuccess(action.payload));
}

export default function* cartSaga() {
  yield takeLatest(cartActions.addToCart, fetchCart);
}
