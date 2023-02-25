// @ts-nocheck
import { Box, Card, CardMedia, Stack, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { selectHomeBrands } from "features/products/productsSlice.js";
import { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBrandWrapper = styled(Box)(({ theme }) => ({
  "marginTop": "16px",
  "padding": "12px 16px",
  "width": "100%",
  "borderRadius": "8px",
  "background":
    "linear-gradient(rgba(255, 255, 255, 0) 22.49%, rgb(255, 255, 255) 73.49%), linear-gradient(264.03deg, rgb(220, 229, 251) -10.27%, rgb(234, 236, 255) 35.65%, rgb(213, 236, 253) 110.66%)",
  [theme.breakpoints.up("xl")]: {
    minHeight: "320px",
  },
  "& .slick-slide": {
    padding: "0px 8px",
  },
}));

const BrandTitle = styled("h3")(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: 700,
  lineHeight: "150%",
}));

const BrandTitleIcon = styled("img")(({ theme }) => ({
  width: 70,
}));

function HomeBrand() {
  const [title, setTitle] = useState([]);
  const [brands, setBrands] = useState([]);

  const brandsData = useAppSelector(selectHomeBrands);

  useEffect(() => {
    if (brandsData.length > 0) {
      setTitle(brandsData[0].data[0].title);
      setBrands(brandsData[0].data[0].banners);
    }
  }, [brandsData]);

  const renderCarousel = useCallback(() => {
    return (
      brands &&
      brands.length > 0 &&
      brands.map((brand, i) => {
        return (
          <Link
            key={i}
            to={brand.title.replace("https://tiki.vn/", "")}
          >
            <Card>
              <CardMedia
                component="img"
                image={brand.image_url}
                title={brand.title}
                alt={brand.title}
              />
            </Card>
          </Link>
        );
      })
    );
  }, [brands]);
  const _settings = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 6,
    // slidesToShow: 3,
  };
  return (
    <HomeBrandWrapper>
      {title && title.length > 0 && (
        <Stack
          style={{
            flexDirection: "row",
            alignItems: "center",
            color: "rgb(39,39,42",
            marginBottom: "12px",
            columnGap: "12px",
          }}
        >
          <BrandTitle>{title?.text}</BrandTitle>
          <BrandTitleIcon
            src={title?.icon?.url}
            srcSet={title?.icon?.url}
            title={title?.text}
            alt={title?.text}
          />
        </Stack>
      )}

      <SlickCarousel settings={{ ..._settings, infinite: brands.length > 6 }}>
        {renderCarousel()}
      </SlickCarousel>
    </HomeBrandWrapper>
  );
}

export default memo(HomeBrand);
