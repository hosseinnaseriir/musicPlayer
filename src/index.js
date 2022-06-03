import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./contexts/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
