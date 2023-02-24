import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { selectRecentlyList } from "features/products/productsSlice.js";
import { memo } from "react";
import ProductItem from "../Common/ProductItem.jsx";

const Wrapper = styled("div")({
  "margin": "16px 0px",
  "backgroundColor": "rgb(255, 255, 255)",
  "borderRadius": "4px",
  "& .slick-track": {
    margin: "unset",
  },
});
const Header = styled("h2")({
  color: "rgb(51, 51, 51)",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "32px",
  padding: "8px 16px",
  textTransform: "capitalize",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px",
});
const Title = styled("div")({});

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

function RecentlyViewProducts() {
  const RecentlyViewed = useAppSelector(selectRecentlyList);

  return (
    <Wrapper>
      <Header>
        <Title>Sản phẩm đã xem</Title>
      </Header>
      <SlickCarousel
        settings={{ ...settings, infinite: RecentlyViewed?.length > 6 }}
      >
        {RecentlyViewed &&
          RecentlyViewed.length > 0 &&
          RecentlyViewed.map((product, i) => (
            <ProductItem
              key={product.id}
              data={product}
            />
          ))}
      </SlickCarousel>
    </Wrapper>
  );
}

export default memo(RecentlyViewProducts);
