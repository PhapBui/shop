import { Rating, styled } from "@mui/material";
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

const ProductHeader = ({ data }) => {
  return (
    data && (
      <Wrapper className="header">
        <div className="brand">
          <span>Thương hiệu:</span>
          <Link to={`/thuong-hieu/${data?.brand?.slug}`}>
            {data?.brand?.name}
          </Link>
        </div>
        <h2 className="name">{data?.name}</h2>
        <div className="quick-review">
          <Rating
            name="rate-filter"
            size="large"
            readOnly
            defaultValue={+data.rating_average}
            precision={0.5}
          />
          <div className="feel-back">
            (Xem {data?.review_count} đánh giá ) |
          </div>
          <div className="qty-sold">{data?.quantity_sold?.text}</div>
        </div>
      </Wrapper>
    )
  );
};

export default ProductHeader;
