import { Card, CardMedia, Stack, styled } from "@mui/material";
import FireIcon from "assets/images/fire_icon.js";
import React, { memo } from "react";

const ProductWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
}));

const ProductInfo = styled("div")(({ theme }) => ({
  position: "relative",
}));

const PercentsPriceDiscount = styled("span")(({ theme }) => ({
  position: "absolute",
  top: "4px",
  left: "4px",
  padding: "2px",
  background: "rgb(255, 219, 222)",
  borderRadius: "4px",
  color: "rgb(255, 66, 78)",
  fontWeight: "700",
  fontSize: "1.2rem",
  lineHeight: "150%",
}));

const DealPriceDiscount = styled("span")(({ theme }) => ({
  textAlign: "center",
  padding: "2px",
  borderRadius: "4px",
  color: "rgb(255, 66, 78)",
  fontWeight: "700",
  fontSize: "1.2rem",
  lineHeight: "150%",
}));

const DealQty = styled("div")(({ theme }) => ({
  "backgroundColor": "rgb(255, 170, 175)",
  "color": "rgb(255, 255, 255)",
  "borderRadius": "10px",
  "position": "relative",
  "display": "flex",
  "width": "100%",
  "height": "20px",
  "& .deals__progress": {
    position: "absolute",
    left: "0px",
    top: "0px",
    backgroundColor: "#ff424e",
    height: "20px",
    borderRadius: "10px",
    minWidth: "20px",
  },
  "&>span": {
    fontSize: "11px",
    lineHeight: "16px",
    padding: "0px 0px 0px 6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    textAlign: "center",
  },
}));

const FastShip = styled("img")(({ theme }) => ({
  width: "91px",
  height: "16px",
  position: "absolute",
  bottom: 0,
  left: 0,
}));

function ProductCard({ data, progress }) {
  return (
    <ProductWrapper>
      <ProductInfo>
        <CardMedia
          component="img"
          image={data.thumbnail_url}
          title={data.name}
          alt={data.name}
        />
        <FastShip
          src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png"
          alt="tiki-fast"
        />
      </ProductInfo>
      <PercentsPriceDiscount>-{data.discount_rate}%</PercentsPriceDiscount>
      <Stack>
        <DealPriceDiscount style={{ fontSize: "16px", margin: "auto" }}>
          {data.price.toLocaleString("de-DE")}
          <sup> ₫</sup>
        </DealPriceDiscount>
      </Stack>
      <DealQty>
        <div
          className="deals__progress"
          style={{ width: progress.ordered_percent }}
        ></div>
        <span>{progress.progress_text}</span>
        {progress.is_hot_flag && (
          <FireIcon
            style={{
              zIndex: 10,
              position: "absolute",
              width: "24px",
              height: "24px",
              bottom: "4px",
              left: "5px",
            }}
          />
        )}
      </DealQty>
    </ProductWrapper>
  );
}

export default memo(ProductCard);
