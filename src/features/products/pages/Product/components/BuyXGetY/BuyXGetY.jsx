// @ts-nocheck
import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { selectComboList } from "features/products/productsSlice.js";
import { memo } from "react";
import { Link } from "react-router-dom";
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
const Readmore = styled(Link)({
  fontSize: "1.4rem",
});

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};
function BuyXGetY() {
  const comboData = useAppSelector(selectComboList);
  return (
    <>
      {comboData?.items && comboData?.items?.length > 0 && (
        <Wrapper>
          <Header>
            <Title>{comboData?.title}</Title>
            <Readmore to={comboData?.view_more_url}>
              {comboData?.view_more_text}
            </Readmore>
          </Header>
          <SlickCarousel settings={settings}>
            {comboData?.items &&
              comboData?.items?.length > 0 &&
              comboData?.items?.map((product, i) => (
                <ProductItem
                  key={product.id}
                  comboData={product}
                />
              ))}
          </SlickCarousel>
        </Wrapper>
      )}
    </>
  );
}

export default memo(BuyXGetY);
