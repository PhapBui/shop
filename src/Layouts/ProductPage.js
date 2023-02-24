/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, styled } from "@mui/material";
import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "app/hooks.js";
import BreadCrumb from "components/Common/BreadCrumb";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import { Product } from "features/products/pages/Product";
import {
  searchActions,
  selectQuickSearch,
} from "features/products/pages/Search/searchSlice.js";
import {
  productActions,
  selectProductById,
} from "features/products/productsSlice.js";
import getProductId from "hooks/getProductId.js";

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

  const [spid, setSpid] = useState(null);
  const [sellerId, setSellerId] = useState();
  const [categoryId, setCategoryId] = useState("");

  const location = useLocation();
  const dispatch = useAppDispatch();

  //get productId from path
  const productId = useMemo(() => getProductId(location), [location]);

  const quickSearchDatas = useAppSelector(selectQuickSearch);
  const productData = useAppSelector(selectProductById);

  // get spid from from path
  useEffect(() => {
    const params = queryString.parse(location.search);
    setSpid(params.spid);
  }, [location.search, categoryId]);

  //dispatch getClientImages by sellerId
  useEffect(() => {
    if (sellerId) {
      dispatch(productActions.fetchSellerInfo(sellerId));
    }
  }, [dispatch, sellerId]);
  //dispatch getSellerInfo by sellerId
  useEffect(() => {
    const params = {
      product_id: productId,
      include: "comments",
      page: "1",
      limit: "-1",
      top: "true",
      spid: spid,
      seller_id: sellerId,
    };
    if (sellerId || productId || spid) {
      dispatch(productActions.fetchClientReviewImages(params));
    }
  }, [dispatch, sellerId, productId, spid]);

  //dispath getQuickSearch
  useEffect(() => {
    if (categoryId)
      dispatch(
        searchActions.fetchQuickSearch({
          page_name: "ProductPage",
          category_id: categoryId,
        })
      );
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (productId) {
      dispatch(productActions.fetchProductById(productId));
    }
  }, [dispatch, productId]);

  // Get sellerId,categoryId by Product
  useEffect(() => {
    setSellerId(productData.current_seller?.id);
    setCategoryId(productData.categories?.id);
    document.title = productData?.name || "Tiki Shop";
  }, [productData]);

  // ProductViewedRecently
  useEffect(() => {
    const handleProductView = (productId) => {
      const newRecentlyViewed = [...recentlyViewed];
      const index = newRecentlyViewed.indexOf(productId);
      if (index !== -1) {
        newRecentlyViewed.splice(index, 1);
      }
      newRecentlyViewed.unshift(productId);
      const truncatedRecentlyViewed = newRecentlyViewed.slice(0, 10);
      setRecentlyViewed(truncatedRecentlyViewed);
      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(truncatedRecentlyViewed)
      );
    };
    handleProductView(productId);
  }, [productId]);
  return (
    <Wrapper>
      <Header quickSearchDatas={quickSearchDatas} />
      <Main>
        <BreadCrumb />
        <Content>
          <ProductContainer>
            <Product
              sellerId={sellerId}
              productId={productId}
              spid={spid}
            />
            <Footer />
          </ProductContainer>
        </Content>
      </Main>
    </Wrapper>
  );
}

ProductPage.propTypes = {};

export default ProductPage;
