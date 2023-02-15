import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material";

const SliderWrapper = styled(Slider)({
  "&:hover .slick-arrow": {
    opacity: 1,
  },
  "& .slick-arrow": {
    opacity: "0.3",
  },
  "& .slick-prev": {
    left: "10px",
    zIndex: "1",
  },
  "& .slick-next": {
    right: "10px",
    zIndex: "1",
  },
  "& .slick-next:before, & .slick-prev:before": {
    color: "#2f52d3",
  },
});
function SlickCarousel({ settings, children }) {
  return <SliderWrapper {...settings}>{children}</SliderWrapper>;
}

export default SlickCarousel;
