import { Stack, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import BreadCrumb from "components/Common/BreadCrumb";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header.jsx";
// import Header from "components/Common/Header/Header.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import SearchSidebar from "features/products/pages/Search/components/Sidebar/SearchSidebar.jsx";
import Search from "features/products/pages/Search/Search.jsx";
import {
  searchActions,
  selectKey,
  selectQuickSearch,
  selectSearchParams,
} from "features/products/pages/Search/searchSlice.js";
import queryString from "query-string";
import { useEffect } from "react";
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
  width: "calc(100% - 254px)",
  overflow: "hidden",
}));
function SearchPage() {
  // const [params, setParams] = useState({});

  const dispatch = useAppDispatch();

  const location = useLocation();

  const pageName = useAppSelector(selectSearchParams).page_name;
  const quickSearchDatas = useAppSelector(selectQuickSearch);
  const key = useAppSelector(selectKey);

  useEffect(() => {
    const params = queryString.parse(location.search);
    dispatch(searchActions.setKey(params.q));
    // setParams({
    //   q: params.q,
    //   page_name: pageName,
    //   category_id: params.category_id,
    // });
    return () => {};
  }, [location.search, pageName, dispatch]);

  useEffect(() => {
    // dispatch(searchActions.fetchQuickSearch(params));
    if (key) {
      dispatch(searchActions.fetchSearchProductList(key));
    }
  }, [dispatch, key]);

  return (
    <Wrapper>
      <Header quickSearchDatas={quickSearchDatas} />
      <Main>
        <BreadCrumb />
        <Content>
          <SearchSidebar />
          <ProductContainer>
            <Search />
            <Footer />
          </ProductContainer>
        </Content>
      </Main>
    </Wrapper>
  );
}

SearchPage.propTypes = {};

export default SearchPage;
