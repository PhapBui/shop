// @ts-nocheck
import { Box, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import {
  selectSliderBanner,
  selectSubBanner,
} from "features/products/productsSlice.js";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBanner = styled(Box)(({ theme }) => ({
  "display": "flex",
  "justifyContent": "space-between",
  "overflow": "hidden",
  "columnGap": "16px",
  "borderRadius": "12px",
  "& .main-banner": {
    "borderRadius": "12px",
    "flexBasis": "75%",
    "height": " 280px",
    "overflow": " hidden",
    "display": " flex",
    "&>.slider-wrapper": {
      width: "100%",
      overflow: "hidden",
    },
    "&>.slider-wrapper .slick-dots": {
      bottom: "10px",
    },
    "& .slick-dots li button:before ": {
      height: "2px",
      content: '""',
      backgroundColor: "#fff",
    },
    "& .slick-prev ": {
      left: "25px",
      zIndex: 1,
    },
    "& .slick-next ": {
      right: "25px",
      zIndex: 1,
    },
  },

  "& .sub-banner": {
    height: "280px",
    width: "280px",
    borderRadius: "12px",

    overflow: " hidden",
  },
  "&  img": {
    width: "100%",
    height: "100%",
  },
}));
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [dataBanner, setDataBanner] = useState([]);
  const [subBanner, setSubBanner] = useState([]);

  const sliderData = useAppSelector(selectSliderBanner);
  const subBannerData = useAppSelector(selectSubBanner);

  useEffect(() => {
    setDataBanner(sliderData?.banners);
  }, [sliderData]);

  useEffect(() => {
    if (subBannerData.banners) setSubBanner(subBannerData?.banners[0]);
  }, [subBannerData]);
  return (
    <HomeBanner>
      <div className="main-banner">
        <div className="slider-wrapper">
          <SlickCarousel settings={settings}>
            {dataBanner &&
              dataBanner.length > 0 &&
              dataBanner.map((item) => {
                return (
                  <div
                    key={item.id}
                    title={item.title}
                  >
                    <Link to={item.title.replace("https://tiki.vn/", "")}>
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={item.image_url}
                        />
                        <img
                          src={item.image_url}
                          alt={item.title}
                        />
                      </picture>
                    </Link>
                  </div>
                );
              })}
          </SlickCarousel>
        </div>
      </div>
      <div className="sub-banner">
        {subBanner && (
          <div title={subBanner.title}>
            <Link to={subBanner.title}>
              <picture>
                <source
                  type="image/webp"
                  srcSet={subBanner.image_url}
                />
                <img
                  src={subBanner.image_url}
                  alt={subBanner.title}
                />
              </picture>
            </Link>
          </div>
        )}
      </div>
    </HomeBanner>
  );
}

export default memo(Banner);
