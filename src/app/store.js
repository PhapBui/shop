import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import cartReducer from "features/cart/cartSlice.js";
import productReducer from "../features/products/productsSlice.js";
import { history } from "../utils";
import rootSaga from "./rootSaga.js";
import searchReducer from "features/products/pages/Search/searchSlice.js";

const rootReducer = combineReducers({
  router: connectRouter(history),
  products: productReducer,
  cart: cartReducer,
  search: searchReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);
