// @ts-nocheck
import { Box, styled } from "@mui/material";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
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

function HomeCamp() {
  const [title, setTitle] = useState("");
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(
      "https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_widget_banner_left&group=msp_widget_banner_right_top&group=msp_widget_banner_right_bottom"
    )
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.data[0]?.title?.text);
        setBrands(res.data);
      });
  }, []);
  const items = brands?.reduce((a, b) => {
    a[b.group] = b.banners;
    return a;
  }, {});

  const _settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    // slidesToShow: 3,
  };
  const itemLeft = items?.msp_widget_banner_left;
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
        {itemLeft &&
          itemLeft.length > 0 &&
          itemLeft.map((item, idx) => (
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
                      to={items?.msp_widget_banner_right_top[
                        idx
                      ]?.title?.replace("https://tiki.vn", "")}
                    >
                      <img
                        src={items?.msp_widget_banner_right_top[idx]?.image_url}
                        alt={items?.msp_widget_banner_right_top[idx]?.title}
                        style={{ maxHeight: 129 }}
                      />
                    </Link>
                  </div>
                  <div className="bottom">
                    <Link
                      className="item"
                      to={items?.msp_widget_banner_right_bottom[
                        idx
                      ]?.title?.replace("https://tiki.vn", "")}
                    >
                      <img
                        src={
                          items?.msp_widget_banner_right_bottom[idx]?.image_url
                        }
                        alt={items?.msp_widget_banner_right_bottom[idx]?.title}
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
