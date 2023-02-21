import { styled } from "@mui/material/styles";
import images from "assets/images/index.js";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
const Img = styled("img")(({ theme }) => ({
  overflow: "hidden",
  objectFit: "cover",
}));
const Image = forwardRef(
  // @ts-ignore
  ({ src, className, fallback = images.errorImg, alt, ...props }, ref) => {
    const [_fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(fallback);
    };

    return (
      <Img
        ref={ref}
        src={_fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);
Image.propTypes = {
  // @ts-ignore
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
