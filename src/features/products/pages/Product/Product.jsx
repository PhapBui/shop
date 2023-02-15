import axios from "axios";
import { useEffect, useState } from "react";
import BuyXGetY from "./components/BuyXGetY/BuyXGetY.jsx";
import Discover from "./components/Discover/Discover.jsx";
import ProductInfos from "./components/ProductDetails/ProductDetails.jsx";
import ProductMain from "./components/ProductMain/ProductMain.jsx";
import RecentlyViewProducts from "./components/RecentlyViewProducts/RecentlyViewProducts.jsx";
import Review from "./components/Review/Review.jsx";
import SimilarProducts from "./components/SimilarProducts/SimilarProducts.jsx";

function Product() {
  const [dataRight, setDataRight] = useState([]);
  const [dataLeft, setDataLeft] = useState([]);

  useEffect(() => {
    const queryData = {
      proId: 169375199,
      spId: 169375205,
      seller_id: 196090,
    };
    const fetchDataProduct = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/v2/products/${queryData.proId}?platform=web&spid=${queryData.spId}`
        );

        const clientImgs = await axios.get(
          `https://tiki.vn/api/v2/reviews?product_id=${queryData.proId}&include=comments&page=1&limit=-1&top=true&spid=${queryData.spId}&seller_id=${queryData.seller_id}`
        );
        // https://tiki.vn/api/v2/products/198641664?platform=web&spid=198641666
        const coupon = await axios.get(
          `https://api.tiki.vn/raiden/v2/asa/seller/coupon?platform=desktop&pid=${queryData.spId}&seller_id=${queryData.seller_id}`
        );

        const shipping = await axios.get(
          `https://tiki.vn/api/v2/products/widget/delivery_info/${queryData.spId}?platform=web&pdp=v2`
        );
        const seller = await axios.get(
          `https://tiki.vn/api/shopping/v2/widgets/seller?seller_id=${queryData.seller_id}`
        );
        const client = [];
        clientImgs.data.reduce((a, b) => {
          client.push(b.images);
          return client;
        });
        if (res) {
          document.title = res.data?.name;
          setDataLeft((prev) => ({
            ...prev,
            thumbnail: res.data?.thumbnail_url,
            images: res.data?.images,
            clientImages: [...client],
          }));
          setDataRight((prev) => ({
            ...prev,
            header: {
              brand: res.data?.brand,
              name: res.data?.name,
              quantity_sold: res.data?.quantity_sold,
              review_count: res.data?.review_count,
              rating_average: res.data?.rating_average,
            },
            price: {
              price: res.data?.price,
              originalPrice: res.data?.original_price,
              discount_rate: res.data?.discount_rate,
              astra: res.data?.asa_cashback_widget,
            },
            coupon: {
              text: coupon.data.coupon_qty,
              labels: coupon.data.coupon_label,
            },
            ship: shipping.data,
            configOpt: {
              size: res.data?.configurable_options,
              product: res.data?.configurable_products,
            },
            addon: {
              title: res.data?.add_on_title,
              data: res.data?.add_on,
            },
            seller: {
              current: seller?.data?.data?.seller,
              other: res.data?.other_sellers,
            },
            warranty_info: res.data?.warranty_info,
            benefits: res.data?.benefits,
          }));
        }
      } catch (error) {
        console.log("Failed to fetch DataProduct: ", error);
      }
    };
    fetchDataProduct();
  }, []);

  return (
    <>
      <ProductMain
        dataRight={dataRight}
        dataLeft={dataLeft}
      />
      <BuyXGetY />
      <SimilarProducts />
      <ProductInfos />
      <Review />
      <Discover />
      <RecentlyViewProducts />
    </>
  );
}

export default Product;
