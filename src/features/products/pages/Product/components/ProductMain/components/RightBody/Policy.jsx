import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectProductById } from "features/products/productsSlice.js";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
  "fontSize": "1.3rem",
  "lineHeight": "20px",
  "padding": "8px 0px",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.warranty-item": {
    "display": "flex",
    "justifyContent": "space-between",
    "padding": "12px 0px 0px",
    "flexWrap": "no-wrap",
    "&>.itemLeft": {
      color: "rgb(120, 120, 120)",
      flexShrink: 0,
      marginRight: "8px",
    },
  },
});

const Policy = () => {
  const productData = useAppSelector(selectProductById);
  return (
    <Wrapper>
      {productData?.warranty_info &&
        productData?.warranty_info?.length > 0 &&
        productData?.warranty_info?.map((item, idx) => (
          <div
            className="warranty-item"
            key={idx}
          >
            <span className="itemLeft">{item.name}</span>
            {!item.url ? (
              <span className="itemRight">{item.value}</span>
            ) : (
              <Link
                className="itemRight"
                to={item.url}
              >
                {item.value}
              </Link>
            )}
          </div>
        ))}
    </Wrapper>
  );
};

export default memo(Policy);
