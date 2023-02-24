import { Stack, styled } from "@mui/material";
import Footer from "components/Common/Footer";
import Home from "features/products/pages/Home";
// import Header from "components/Common/Header/Header.jsx";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import Header from "components/Common/Header/Header.jsx";
import Sidebar from "components/Common/Sidebar/Sidebar.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import {
  productActions,
  selectSidebarMenuConfig,
} from "features/products/productsSlice.js";
import { useEffect } from "react";
import {
  searchActions,
  selectQuickSearch,
} from "features/products/pages/Search/searchSlice.js";

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
  paddingTop: "16px",
  webkitBoxPack: "justify",
}));
const ProductContainer = styled(Stack)(({ theme }) => ({
  width: "calc(100% - 254px)",
}));
function HomePage() {
  const dispatch = useAppDispatch();
  const sidebarMenuConfig = useAppSelector(selectSidebarMenuConfig);

  useEffect(() => {
    dispatch(productActions.fetchProductsList());
  }, [dispatch]);

  const quickSearchDatas = useAppSelector(selectQuickSearch);

  useEffect(() => {
    dispatch(searchActions.fetchQuickSearch());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header quickSearchDatas={quickSearchDatas} />
      <Main>
        <Content>
          <Sidebar
            data={sidebarMenuConfig}
            page={"home"}
          />
          <ProductContainer>
            <Home />
            <Footer />
          </ProductContainer>
        </Content>
      </Main>
    </Wrapper>
  );
}

HomePage.propTypes = {};

export default HomePage;
