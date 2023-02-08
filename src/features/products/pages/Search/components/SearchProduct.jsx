import { Stack, styled } from "@mui/material";
import axios from "axios";
import SingleProduct from "features/products/components/SingleProduct/SingleProduct.jsx";
import React, { useEffect, useState } from "react";

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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchSortOption = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh`
        );
        if (res) {
          setProducts(res.data.data);
        }
      } catch (error) {
        console.log("Failed to fetch data Sort Option: ", error);
      }
    };
    fetchSortOption();
  }, []);
  return (
    <SearchProductWrapper className="search-products">
      {products &&
        products.length > 0 &&
        products.map((product, idx) => (
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

export default SearchProduct;
