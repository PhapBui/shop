import { styled } from "@mui/material";
// import Header from "components/Common/Header/Header.jsx";

const Wrapper = styled("main")(({ theme }) => ({
  backgroundColor: "rgb(245, 245, 250)",
}));

function CategoryPage() {
  return (
    <Wrapper>
      <h1>Category Page</h1>
    </Wrapper>
  );
}

CategoryPage.propTypes = {};

export default CategoryPage;
