import { Stack, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SingleProduct from "features/products/components/SingleProduct/SingleProduct.jsx";
import { memo } from "react";
import { selectProductList } from "../searchSlice.js";

const SearchProductWrapper = styled(Stack)({
  "flexDirection": "row",
  "flexWrap": "wrap",
  "gap": 8,
  "& .thumbnail": {
    // width: "200px",
    // height: "200px",
  },
});

const Product = styled("div")({
  flex: "1 1 calc(20% - 8px)",
});

function SearchProduct() {
  const productList = useAppSelector(selectProductList);

  return (
    <SearchProductWrapper className="search-products">
      {productList &&
        productList.length > 0 &&
        productList.map((product, idx) => (
          <Product
            className="product"
            key={`${product.id}${idx}`}
          >
            <SingleProduct data={product} />
          </Product>
        ))}
    </SearchProductWrapper>
  );
}

export default memo(SearchProduct);
