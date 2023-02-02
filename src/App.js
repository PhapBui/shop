import Header from "components/Common/Header/Header.jsx";
import HomePage from "Layouts/HomePage.js";
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
      </Routes>
    </div>
  );
}

export default App;
