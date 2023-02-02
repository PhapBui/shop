// @ts-nocheck
import { Box, Card, CardMedia, Stack, styled } from "@mui/material";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { useEffect, useState } from "react";
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

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

function HomeCollection() {
  const [title, setTitle] = useState("");
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://api.tiki.vn/raiden/v2/collections?page=1&per_page=20")
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        // setBrands((prev) => [...prev, ...res.data[0].banners]);
        setBrands(res.items);
      });
  }, []);
  return (
    <HomeBrandWrapper>
      {title && (
        <Stack
          style={{
            flexDirection: "row",
            alignItems: "center",
            color: "rgb(39,39,42",
            marginBottom: "12px",
            columnGap: "12px",
          }}
        >
          <BrandTitle>{title}</BrandTitle>
          <BrandTitleIcon
            src={title.icon?.url}
            srcSet={title.icon?.url}
            title={title.text}
            alt={title.text}
          />
        </Stack>
      )}

      <SlickCarousel settings={settings}>
        {brands &&
          brands.length > 0 &&
          brands.map((brand, i) => (
            <Link
              key={i}
              to={brand.title?.replace("https://tiki.vn/", "")}
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
          ))}
      </SlickCarousel>
    </HomeBrandWrapper>
  );
}

export default HomeCollection;
