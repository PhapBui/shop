import { Stack, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import {
  selectClientImage,
  selectProductById,
} from "features/products/productsSlice.js";
import { memo, useState } from "react";
import AddOn from "./components/LeftBody/AddOn.jsx";
import AddToCart from "./components/LeftBody/AddToCart.jsx";
import Coupon from "./components/LeftBody/Coupon.jsx";
import Price from "./components/LeftBody/Price.jsx";
import ProductHeader from "./components/LeftBody/ProductHeader.jsx";
import Shipping from "./components/LeftBody/Shipping.jsx";
import SizeConfig from "./components/LeftBody/SizeConfig.jsx";
import Benefit from "./components/RightBody/Benefit.jsx";
import Policy from "./components/RightBody/Policy.jsx";
import SellerOverView from "./components/RightBody/SellerOverView.jsx";
const ProductMainWrapper = styled(Stack)({
  "flexDirection": "row",
  "marginBottom": "16px",
  "backgroundColor": "rgb(255, 255, 255)",
  "borderRadius": "4px",
  "&>div": {
    padding: "12px",
  },
});
const ProductMainImage = styled("div")({
  "& img": {
    width: "100%",
    height: "100%",
  },
  "&>.group-images": {
    "borderColor": "red",

    "&>.thumbnail": {
      "borderColor": "red",

      "& .container": {
        "width": "444px",
        "height": "444px",
        "& picture": {},
      },
    },
  },
  "&>.review-images": {
    "marginTop": "16px",

    "&>.image-list": {
      "borderColor": "red",

      "&> button": {
        "cursor": "pointer",
        "position": "relative",
        "width": "64px",
        "height": "64px",
        "marginRight": "12px",
        "borderRadius": "4px",
        "overflow": "hidden",
        "border": "2px solid #fff",
        "&.active": {
          borderColor: "red",
        },
      },
    },
  },
});

const ProductMainBody = styled("div")({
  flex: "1 1 0%",

  borderLeft: "1px solid rgb(242, 242, 242)",
});

const ProductMainBodyHeader = styled("div")({});

const ProductMainBodyMain = styled("div")({
  display: "flex",
});

const ProductMainBodyMainLeft = styled("div")({
  paddingRight: 12,
  flex: "1 0 0 ",
});
const ProductMainBodyMainRight = styled("div")({
  "width": 240,
  "&>.current-seller": {
    padding: "8px 12px",
    borderRadius: 4,
    boxShadow:
      "rgb(242 242 242) 1px 1px 0px 0px inset, rgb(242 242 242) -1px -1px 0px 0px inset",
  },
});

function ProductMain() {
  const [thumnailUrl, setThumnailUrl] = useState("");
  const [active, setActive] = useState(0);

  const clientImages = useAppSelector(selectClientImage);
  const productData = useAppSelector(selectProductById);

  const handleThumbmailProduct = (image, idx) => {
    setActive(idx);
    setThumnailUrl(image.base_url);
  };
  return (
    <ProductMainWrapper>
      <ProductMainImage>
        <div className="group-images">
          <div className="thumbnail">
            <div className="container">
              <picture>
                <source
                  type="image/webp"
                  srcSet={thumnailUrl || productData?.thumbnail_url}
                />
                {(thumnailUrl || productData?.thumbnail_url) && (
                  <img
                    src={thumnailUrl || productData?.thumbnail_url}
                    alt="product"
                  />
                )}
              </picture>
            </div>
          </div>
        </div>
        <div className="review-images">
          <div className="image-list">
            {productData?.images &&
              // eslint-disable-next-line array-callback-return
              productData?.images?.map((image, idx) => {
                if (idx < 5)
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleThumbmailProduct(image, idx)}
                      className={active === idx ? "active" : ""}
                    >
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={image.thumbnail_url}
                        />
                        <img
                          key={idx}
                          src={image.thumbnail_url}
                          alt={image.thumbnail_url}
                        />
                      </picture>
                    </button>
                  );
              })}
            {clientImages && productData?.images && (
              <button
                type="button"
                onClick={() => handleThumbmailProduct(clientImages[5], 5)}
                className={active === 5 ? "active" : ""}
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet={productData?.images[5]?.thumbnail_url}
                  />
                  <img
                    src={clientImages[5]?.thumbnail_url}
                    alt={clientImages[5]?.thumbnail_url}
                  />
                </picture>
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: 9,
                  }}
                >
                  Xem them
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="social-share"></div>
        <div className="track-banner"></div>
      </ProductMainImage>

      <ProductMainBody>
        <ProductMainBodyHeader>
          <ProductHeader />
        </ProductMainBodyHeader>

        <ProductMainBodyMain className="body">
          <ProductMainBodyMainLeft className="product">
            <Price />
            <SizeConfig />
            <Coupon />
            <Shipping />
            <AddOn />
            <AddToCart />
          </ProductMainBodyMainLeft>
          <ProductMainBodyMainRight className="provider">
            <div className="current-seller">
              <SellerOverView />
              <Policy />
              <Benefit />
            </div>
          </ProductMainBodyMainRight>
        </ProductMainBodyMain>
      </ProductMainBody>
    </ProductMainWrapper>
  );
}

export default memo(ProductMain);
