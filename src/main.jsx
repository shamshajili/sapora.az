import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LanguageProvider>
  </BrowserRouter>,
);
