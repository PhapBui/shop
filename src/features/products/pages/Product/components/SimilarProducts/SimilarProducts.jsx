// @ts-nocheck
import { styled } from "@mui/material";
import axios from "axios";
import SlickCarousel from "components/Custom/Carousel/SlickCarousel.jsx";
import { useEffect, useState } from "react";
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
function SimilarProducts() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    const fetchCombo = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/personalish/v2/pdp?strategy=new_pdp&mpid=113864742&spid=113864746`
        );
        if (res) {
          const similarProduct = res.data.widgets.reduce((a, b) => {
            a[b.code] = b;
            return a;
          }, {});
          setCombo(similarProduct?.similar_products);
        }
      } catch (error) {
        console.log("Fail to fetch combo: ", error);
      }
    };
    fetchCombo();
  }, []);
  return (
    <Wrapper>
      <Header>
        <Title>{combo.title}</Title>
        <Readmore to={combo.view_more_url}>{combo.view_more_text}</Readmore>
      </Header>
      <SlickCarousel
        settings={{ ...settings, infinite: combo?.items?.length > 6 }}
      >
        {combo.items &&
          combo.items.length > 0 &&
          combo.items.map((product, i) => (
            <ProductItem
              key={product.id}
              data={product}
            />
          ))}
      </SlickCarousel>
    </Wrapper>
  );
}

export default SimilarProducts;
