import productTikiApi from "api/tiki/productTikiApi.js";
import { call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "./userSlice.js";

function* fetchUserLocation() {
  try {
    const res = yield call(productTikiApi.getUserLocation);
    yield put(userActions.fetchUserLocationSuccess(res));
  } catch (error) {
    console.log("Failed to fetchSearchSuggestion: ", error);
    yield put(userActions.fetchUserFailed());
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.fetchUserLocation, fetchUserLocation);
}
