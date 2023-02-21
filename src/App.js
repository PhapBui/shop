import Header from "components/Common/Header/Header.jsx";
import Register from "features/auth/index.jsx";
import CategoryPage from "Layouts/CategoryPage.js";
import HomePage from "Layouts/HomePage.js";
import ProductPage from "Layouts/ProductPage.js";
import SearchPage from "Layouts/SearchPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      // style={{ backgroundColor: "#efefef" }}
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/search"
          element={<SearchPage />}
        ></Route>
        <Route
          path="/:cateSlug/:cateName"
          element={<CategoryPage />}
        ></Route>
        <Route
          path="/san-pham/:productSlug"
          element={<ProductPage />}
        ></Route>
        <Route
          path="/register"
          element={<Register />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
