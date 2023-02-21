// @ts-nocheck
import { Box, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import {
  productActions,
  selectHomeCamp,
} from "features/products/productsSlice.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCampWrapper = styled(Box)(({ theme }) => ({
  "marginTop": "16px",
  "padding": "12px 16px",
  "width": "100%",
  "borderRadius": "8px",
  "background":
    "linear-gradient(rgba(255, 255, 255, 0) 22.49%, rgb(255, 255, 255) 73.49%), linear-gradient(264.03deg, rgb(220, 229, 251) -10.27%, rgb(234, 236, 255) 35.65%, rgb(213, 236, 253) 110.66%)",
  [theme.breakpoints.up("xl")]: {
    minHeight: "265px",
  },
  "& .slick-slider": {
    "margin": "0px 8px",
    "color": "red",
    "&>.slick-list": {
      width: "100%",
    },
  },
  "& .item>img": {
    borderRadius: "8px",
    overflow: "hidden",
  },
}));

const _settings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 3,
  slidesToShow: 3,
  // slidesToShow: 3,
};

function HomeCamp() {
  const [title, setTitle] = useState("");
  const [brands, setBrands] = useState([]);
  const [items, setItems] = useState([]);

  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectHomeCamp);

  useEffect(() => {
    dispatch(productActions.fetchProductsList);
  }, [dispatch]);

  useEffect(() => {
    const items = productData?.data?.reduce((a, b) => {
      a[b.group] = b;
      return a;
    }, {});
    setBrands(items);
    setItems(items?.msp_widget_banner_left.banners);
    setTitle(items?.msp_widget_banner_left.title.text);
  }, [productData]);

  return (
    <HomeCampWrapper>
      <h2
        style={{
          marginBottom: "12px",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "150%",
          color: "rgb(39, 39, 42)",
          display: "flex",
          WebkitBoxAlign: "center",
          alignItems: "center",
        }}
      >
        {title}
      </h2>
      <SlickCarousel settings={_settings}>
        {items &&
          items.length > 0 &&
          items.map((item, idx) => (
            <div
              className="wrapper"
              key={item.id}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                }}
              >
                <div className="left">
                  <Link
                    className="item"
                    to={item.title?.replace("https://tiki.vn", "")}
                  >
                    <img
                      src={item.image_url}
                      alt={item.title}
                      style={{ maxHeight: 266 }}
                    />
                  </Link>
                </div>
                <div
                  className="right"
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <div className="top">
                    <Link
                      className="item"
                      to={brands?.msp_widget_banner_right_top.banners[
                        idx
                      ]?.title?.replace("https://tiki.vn", "")}
                    >
                      <img
                        src={
                          brands?.msp_widget_banner_right_top.banners[idx]
                            ?.image_url
                        }
                        alt={
                          brands?.msp_widget_banner_right_top.banners[idx]
                            ?.title
                        }
                        style={{ maxHeight: 129 }}
                      />
                    </Link>
                  </div>
                  <div className="bottom">
                    <Link
                      className="item"
                      to={brands?.msp_widget_banner_right_bottom.banners[
                        idx
                      ]?.title?.replace("https://tiki.vn", "")}
                    >
                      <img
                        src={
                          brands?.msp_widget_banner_right_bottom.banners[idx]
                            ?.image_url
                        }
                        alt={
                          brands?.msp_widget_banner_right_bottom.banners[idx]
                            ?.title
                        }
                        style={{ maxHeight: 129 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </SlickCarousel>
    </HomeCampWrapper>
  );
}

export default HomeCamp;
