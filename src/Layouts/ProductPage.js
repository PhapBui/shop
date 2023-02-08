import { Stack, styled } from "@mui/material";
import BreadCrumb from "components/Common/BreadCrumb";
import Footer from "components/Common/Footer";
// import Header from "components/Common/Header/Header.jsx";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import { Product } from "features/products/pages/Product";

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
function ProductPage() {
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
