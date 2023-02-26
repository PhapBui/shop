// @ts-nocheck
import { Box, Stack, styled } from "@mui/material";
import { memo, useEffect, useState } from "react";

import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";

import { useAppSelector } from "app/hooks.js";
import { selectHomeHotDeal } from "features/products/productsSlice.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import Products from "./ProductsData.js";
import Timer from "./Timer.jsx";

const HomeDealWrapper = styled(Box)(({ theme }) => ({
  "marginTop": "16px",
  "padding": "12px 16px",
  "width": "100%",
  "borderRadius": "8px",
  "background":
    "linear-gradient(rgba(255, 255, 255, 0) 22.49%, rgb(255, 255, 255) 73.49%), linear-gradient(264.03deg, rgb(220, 229, 251) -10.27%, rgb(234, 236, 255) 35.65%, rgb(213, 236, 253) 110.66%)",
  [theme.breakpoints.up("xl")]: {
    minHeight: "265px",
  },
  "& .slick-slide": {
    margin: "0px 8px",
  },
}));

const DealTitle = styled("h3")(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: 700,
  lineHeight: "150%",
}));

const TimeCountDown = styled("div")(({ theme }) => ({}));

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

function HomeDeal() {
  const [products, setProducts] = useState(() => Products);
  const [timeStamp, setTimeStamp] = useState(0);

  const hotDealData = useAppSelector(selectHomeHotDeal);

  useEffect(() => {
    if (hotDealData.data) {
      setProducts(hotDealData.data);
      setTimeStamp(
        hotDealData.data[0]?.special_to_date -
          new Date(hotDealData.datetime).getTime() / 1000
      );
    }
  }, [hotDealData]);

  return (
    <HomeDealWrapper>
      <Stack
        style={{
          flexDirection: "row",
          WebkitBoxAlign: "center",
          alignItems: "center",
          WebkitBoxPack: "justify",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            WebkitBoxAlign: "center",
            alignItems: "center",
            WebkitGBoxPack: "start",
            justifyContent: "flex-start",
            cursor: "pointer",
            gap: 8,
          }}
        >
          <DealTitle>Giá sốc hôm nay</DealTitle>
          <TimeCountDown>
            <Timer timelife={timeStamp} />
          </TimeCountDown>
        </div>
        <Link
          to={"/deal-hot?tab=now"}
          className="readmore"
        >
          Xem thêm
        </Link>
      </Stack>

      <SlickCarousel settings={settings}>
        {products &&
          products.length > 0 &&
          products.map((product, i) => (
            <ProductCard
              key={product.deal_id}
              data={product.product}
              progress={product.progress}
            />
          ))}
      </SlickCarousel>
    </HomeDealWrapper>
  );
}

export default memo(HomeDeal);
