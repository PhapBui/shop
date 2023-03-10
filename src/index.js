import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ScrollToTop from "components/Custom/ScrollToTop/ScrollToTop.jsx";
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
       *{
          margin:0;
          padding:0;
        },
        html{
          font-size:0.625rem;
          background-color: #efefef;
        },
        body{
          font-size:1.6rem;
        },
       .slick-track{
        display:flex;
       },
       ul,li{
        list-style-type:none;
       },
       a{
        text-decoration:none;
       },
       .MuiButtonBase-root{
        text-transform:unset;
       },

      `,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
