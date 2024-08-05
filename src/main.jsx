import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="758500021538-7tm7mv4tas3ouma9bb0uau1ia209al78.apps.googleusercontent.com">
    <React.StrictMode>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
