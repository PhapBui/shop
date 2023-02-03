import Header from "components/Common/Header/Header.jsx";
import HomePage from "Layouts/HomePage.js";
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
      </Routes>
    </div>
  );
}

export default App;
