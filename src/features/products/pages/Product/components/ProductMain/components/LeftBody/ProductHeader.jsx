import { Rating, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import { memo } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
  "padding": "16px 28px 16px 0px",
  "position": "relative",
  "&>.brand": {
    display: "flex",
    marginTop: "8px",
    fontSize: "1.4rem",
  },
  "&>.name": {
    margin: " 0px 0px 4px",
    color: "rgb(36, 36, 36)",
    fontSize: "2.4rem",
    fontWeight: 300,
    lineHeight: "3.2rem",
    wordBreak: "break-word",
  },
  "&>.quick-review": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "columnGap": 8,
    "&>.feel-back, >.qty-sold": {
      color: "rgb(120, 120, 120)",
      fontSize: "1.4rem",
    },
  },
});

const ProductHeader = () => {
  const productData = useAppSelector(selectProductById);
  return (
    productData && (
      <Wrapper className="header">
        <div className="brand">
          <span>Thương hiệu:</span>
          <Link to={`/thuong-hieu/${productData?.brand?.slug}`}>
            {productData?.brand?.name}
          </Link>
        </div>
        <h2 className="name">{productData?.name}</h2>
        <div className="quick-review">
          {productData.rating_average && (
            <Rating
              name="rate-filter"
              size="large"
              readOnly
              defaultValue={+productData.rating_average}
              precision={0.5}
            />
          )}
          <div className="feel-back">
            (Xem {productData?.review_count} đánh giá ) |
          </div>
          <div className="qty-sold">{productData?.quantity_sold?.text}</div>
        </div>
      </Wrapper>
    )
  );
};

export default memo(ProductHeader);
