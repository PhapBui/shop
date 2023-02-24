import { useAppDispatch } from "app/hooks.js";
import { productActions } from "features/products/productsSlice.js";
import { memo, useEffect } from "react";
import BuyXGetY from "./components/BuyXGetY/BuyXGetY.jsx";
// import DiscountMatch from "./components/DiscountMatch/DiscountMatch.jsx";
import Discover from "./components/Discover/Discover.jsx";
import ProductInfos from "./components/ProductDetails/ProductDetails.jsx";
import ProductMain from "./components/ProductMain/ProductMain.jsx";
import RecentlyViewProducts from "./components/RecentlyViewProducts/RecentlyViewProducts.jsx";
import Review from "./components/Review/Review.jsx";
import SimilarProducts from "./components/SimilarProducts/SimilarProducts.jsx";

function Product({ sellerId, productId, spid }) {
  const dispatch = useAppDispatch();

  //Dispatch getProductCombo
  //Dispatch discount match
  //discoverData
  useEffect(() => {
    if (sellerId && productId) {
      dispatch(
        productActions.fetchProductCombo({
          product_id: productId,
          seller_id: sellerId,
        })
      );
      dispatch(
        productActions.fetchProductComboDiscount({
          product_id: productId,
          seller_id: sellerId,
        })
      );
      dispatch(
        productActions.fetchProductDiscover({
          product_id: productId,
          seller_id: sellerId,
        })
      );
    }
  }, [dispatch, sellerId, productId]);

  //Dispatch get review list
  useEffect(() => {
    const params = {
      limit: 5,
      include: "comments,contribute_info,attribute_vote_summary",
      sort: "score|desc,id|desc,stars|all",
      page: 1,
      spid: spid,
      product_id: productId,
      seller_id: sellerId,
    };
    if (sellerId && productId)
      dispatch(productActions.fetchProducReviewList(params));
  }, [dispatch, sellerId, productId, spid]);

  //Similar Product
  //Recently
  useEffect(() => {
    if (productId) {
      dispatch(productActions.fetchProductSimilar(productId));
      dispatch(productActions.fetchProductRecentlyViewed(productId));
    }
  }, [dispatch, productId]);

  return (
    <>
      <ProductMain />
      <BuyXGetY />
      {/* <DiscountMatch /> */}
      <SimilarProducts />
      <ProductInfos />
      <Review />
      <Discover />
      <RecentlyViewProducts />
    </>
  );
}

export default memo(Product);
