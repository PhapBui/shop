import { Stack, styled } from "@mui/material";
import BreadCrumb from "components/Common/BreadCrumb";
import Footer from "components/Common/Footer";
// import Header from "components/Common/Header/Header.jsx";
import Sidebar from "components/Common/Sidebar/Sidebar.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import Search from "features/products/pages/Search/Search.jsx";
import { useEffect, useState } from "react";

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
function CategoryPage() {
  const [dataSideBar, setDataSideBar] = useState([]);

  useEffect(() => {
    fetch(
      `https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh`
    )
      .then((res) => res.json())
      .then((res) => {
        const service = res.filters.filter((a) => a.type === "service");
        const back = res.filters
          .filter((a) => a.type !== "service")
          .reduce((a, b) => {
            a[b["query_name"]] = b;
            return a;
          }, []);
        const obService = {
          display_name: "Dịch vụ",
          values: service,
          collaps: 5,
        };
        setDataSideBar(() => Object.assign(back, { services: obService }));
      });
    return () => {};
  }, []);
  return (
    <Wrapper>
      <Main>
        <BreadCrumb />
        <h1>Cate Page</h1>
        <Content>
          <Sidebar
            data={dataSideBar}
            page={"search"}
          />
          <ProductContainer>
            <Search />
            <Footer />
          </ProductContainer>
        </Content>
      </Main>
    </Wrapper>
  );
}

CategoryPage.propTypes = {};

export default CategoryPage;
