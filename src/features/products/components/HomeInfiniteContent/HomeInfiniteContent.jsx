// @ts-nocheck
import { styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import {
  productActions,
  selectHomeInfinite,
} from "features/products/productsSlice.js";
import { memo, useEffect, useRef, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct.jsx";
import ProductHeader from "./Header.jsx";

const Wrapper = styled("div")({
  "marginTop": 16,
  "borderRadius": 8,
  "background": "rgb(245, 245, 250)",
  "& .home-infinite-content": {
    "display": "flex",
    "flexWrap": "wrap",
    "flexDirection": "row",

    "&>.product-item": {
      maxWidth: "calc(16.6667%)",
      flex: "1 1 calc(16.6667%)",
      padding: "4px",
    },
  },
});

function HomeInfiniteContent() {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectHomeInfinite);

  const [products, setProducts] = useState([]);
  const [tabActive, setTabActive] = useState("");

  useEffect(() => {
    dispatch(productActions.fetchProductsList());
  }, [dispatch]);

  useEffect(() => {
    if (productData.tabs) {
      setProducts(productData.tabs[0]);
      setTabActive(productData.tabs[0].title);
    }
  }, [productData]);
  const productsRef = useRef();

  const handleNavigate = (e, i) => {
    e.preventDefault();
    setProducts(productData.tabs[i]);
    setTabActive(productData.tabs[i].title);
  };
  return (
    <Wrapper ref={productsRef}>
      <ProductHeader
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 997,
          width: "auto",
          padding: "0px 4px",
        }}
        tabs={productData.tabs}
        // @ts-ignore
        title={productData.title}
        handleNavigate={handleNavigate}
        tabActive={tabActive}
      />
      <div className="home-infinite-content">
        {products?.items &&
          products?.items?.length > 0 &&
          products?.items?.map((product, i) => (
            <div
              key={product.default_spid}
              className="product-item"
            >
              <SingleProduct data={product} />
            </div>
          ))}
      </div>
    </Wrapper>
  );
}

export default memo(HomeInfiniteContent);
