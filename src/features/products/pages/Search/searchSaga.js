import productTikiApi from "api/tiki/productTikiApi.js";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { searchActions } from "./searchSlice.js";

function* fetchSearchSuggestion() {
  try {
    const res = yield call(productTikiApi.getSearchResultList, "");
    yield put(searchActions.fetchSearchSuggestionSuccess(res));
  } catch (error) {
    console.log("Failed to fetchSearchSuggestion: ", error);
    yield put(searchActions.fetchSearchFailed());
  }
}

function* fetchSearchResultList(action) {
  try {
    const res = yield call(productTikiApi.getSearchResultList, action.payload);
    yield put(searchActions.fetchSearchResultSuccess(res.data));
  } catch (error) {
    console.log("Failed to fetchSearchResultList: ", error);
    yield put(searchActions.fetchSearchFailed());
  }
}

function* fetchQuickSearch(action) {
  try {
    const res = yield call(productTikiApi.getSearchResultList, action.payload);
    yield put(searchActions.fetchSearchResultSuccess(res.data));
    console.log(res);
  } catch (error) {
    console.log("Failed to fetchQuickSearch: ", error);
    yield put(searchActions.fetchSearchFailed());
  }
}
function* fetchProductList(action) {
  try {
    const params = {
      limit: 40,
      include: "advertisement",
      aggregations: 2,
      q: action.payload,
    };
    const res = yield call(productTikiApi.getSearchResultByKey, params);
    yield put(searchActions.fetchSearchProductListSuccess(res));
  } catch (error) {
    console.log("Failed to fetchQuickSearch: ", error);
    yield put(searchActions.fetchSearchFailed());
  }
}

export default function* searchSaga() {
  yield takeLatest(searchActions.fetchSearchSuggestion, fetchSearchSuggestion);
  yield takeLatest(searchActions.fetchQuickSearch, fetchQuickSearch);
  yield debounce(500, searchActions.fetchSearchResult, fetchSearchResultList);
  yield takeLatest(searchActions.fetchSearchProductList, fetchProductList);
}
