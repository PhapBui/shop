// @ts-nocheck
import { Box, styled } from "@mui/material";
import Banner from "features/products/components/Banner";
import HomeBrand from "features/products/components/HomeBrands/HomeBrands.jsx";
import HomeCamp from "features/products/components/HomeCamp/HomeCamp.jsx";
import HomeCollection from "features/products/components/HomeCollection/HomeCollection.jsx";
import HomeDeal from "features/products/components/HomeDeals/HomeDeals.jsx";
import HomeInfiniteContent from "features/products/components/HomeInfiniteContent/HomeInfiniteContent.jsx";

const HomeBox = styled(Box)(({ theme }) => ({}));
function Home(props) {
  return (
    <HomeBox>
      <Banner />
      <HomeBrand />
      <HomeDeal />
      <HomeCamp />
      <HomeCollection />
      <HomeInfiniteContent />
    </HomeBox>
  );
}

Home.propTypes = {};

export default Home;
