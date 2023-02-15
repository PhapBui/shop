/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, styled } from "@mui/material";
import BreadCrumb from "components/Common/BreadCrumb";
import Footer from "components/Common/Footer";
// import Header from "components/Common/Header/Header.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import { Product } from "features/products/pages/Product";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = styled("main")(({ theme }) => ({
  backgroundColor: "rgb(245, 245, 250)",
}));
const Main = styled(CusContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));
const Content = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  webkitBoxPack: "justify",
}));
const ProductContainer = styled(Stack)(({ theme }) => ({
  width: "calc(100% )",
}));
function ProductPage() {
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const recent = localStorage.getItem("recentlyViewed");
    if (recent) {
      return JSON.parse(recent);
    }
    return [];
  });

  const location = useLocation();
  const pathArr = location.pathname.split("-");
  const lastPath = pathArr[pathArr.length - 1];
  const productId = lastPath.replace(".html", "").replace("p", "");

  useEffect(() => {
    const handleProductView = (productId) => {
      const newRecentlyViewed = [...recentlyViewed];
      // If the product is already in the list, remove it first
      const index = newRecentlyViewed.indexOf(productId);
      if (index !== -1) {
        newRecentlyViewed.splice(index, 1);
      }
      // Add the product to the beginning of the list
      newRecentlyViewed.unshift(productId);
      // Keep only the 5 most recently viewed products
      const truncatedRecentlyViewed = newRecentlyViewed.slice(0, 10);
      setRecentlyViewed(truncatedRecentlyViewed);
      // Store the recently viewed products in local storage
      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(truncatedRecentlyViewed)
      );
    };
    handleProductView(productId);
  }, [productId]);
  return (
    <Wrapper>
      <Main>
        <BreadCrumb />
        <Content>
          <ProductContainer>
            <Product />
            <Footer />
          </ProductContainer>
        </Content>
      </Main>
    </Wrapper>
  );
}

ProductPage.propTypes = {};

export default ProductPage;
