import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App";
import AppProvider from "./Context/AppProvider";
import { ThemeProvider } from "@theme-ui/core";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
