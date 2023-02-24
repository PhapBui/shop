// @ts-nocheck
import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { selectComboDiscount } from "features/products/productsSlice.js";
import { memo } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./Item.jsx";

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
const Readmore = styled(Link)({
  fontSize: "1.4rem",
});

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};
function DiscountMatch() {
  const comboDiscount = useAppSelector(selectComboDiscount);

  return (
    comboDiscount?.data &&
    comboDiscount?.data?.length > 0 && (
      <Wrapper>
        <Header>
          <Title>{comboDiscount?.title}</Title>
          <Readmore to={comboDiscount?.view_more_url}>
            {comboDiscount?.view_more_text}
          </Readmore>
        </Header>
        <SlickCarousel settings={settings}>
          {comboDiscount?.data &&
            comboDiscount?.data?.length > 0 &&
            comboDiscount?.data?.map((product, i) => (
              <ProductItem
                key={product.id}
                data={product}
              />
            ))}
        </SlickCarousel>
      </Wrapper>
    )
  );
}

export default memo(DiscountMatch);
