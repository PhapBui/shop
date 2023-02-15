import { styled } from "@mui/material";
import axios from "axios";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { useEffect, useState } from "react";
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

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

function RecentlyViewProducts() {
  const [Product, setProduct] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const url = `https://tiki.vn/api/v2/me/recently_viewed?product_id=145974294&ids=145974294,190194378&platform=desktop`;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(url);
        if (res) {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.log("Failed to Fetch Products: ", error);
      }
    };
    fetchProduct();
  }, [url]);

  return (
    <Wrapper>
      <Header>
        <Title>Sản phẩm đã xem</Title>
      </Header>
      <SlickCarousel settings={{ ...settings, infinite: Product?.length > 6 }}>
        {Product &&
          Product.length > 0 &&
          Product.map((product, i) => (
            <ProductItem
              key={product.id}
              data={product}
            />
          ))}
      </SlickCarousel>
    </Wrapper>
  );
}

export default RecentlyViewProducts;
