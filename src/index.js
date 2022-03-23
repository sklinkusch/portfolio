import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import App from "./Components/App";
import AppProvider from "./Context/AppProvider";
import { ThemeProvider } from "@theme-ui/core";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>,
  </ThemeProvider>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
