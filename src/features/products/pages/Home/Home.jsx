// @ts-nocheck
import { Box, styled } from "@mui/material";
import Banner from "features/products/components/Banner";
import HomeBrand from "features/products/components/HomeBrands/HomeBrands.jsx";
import HomeCamp from "features/products/components/HomeCamp/HomeCamp.jsx";
import HomeCollection from "features/products/components/HomeCollection/HomeCollection.jsx";
import HomeDeal from "features/products/components/HomeDeals/HomeDeals.jsx";
import HomeInfiniteContent from "features/products/components/HomeInfiniteContent/HomeInfiniteContent.jsx";
import { useEffect, useState } from "react";

const HomeBox = styled(Box)(({ theme }) => ({}));
function Home(props) {
  const [title, setTitle] = useState("");
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(
      "https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_widget_banner_premium"
    )
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.data[0]?.title);
        // setBrands((prev) => [...prev, ...res.data[0].banners]);
        setBrands(res.data[0]?.banners);
      });
  }, []);
  return (
    <HomeBox>
      <Banner />
      <HomeBrand
        title={title}
        brands={brands}
      />
      <HomeDeal />
      <HomeCamp />
      <HomeCollection />
      <HomeInfiniteContent />
    </HomeBox>
  );
}

Home.propTypes = {};

export default Home;
