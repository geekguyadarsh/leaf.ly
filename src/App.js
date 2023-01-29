import React from "react";
import { isAuthenticated } from "./helper/authAPICalls";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Collection />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/orders" exact element={<Orders />} />
        <Route path="/product" exact element={<ProductInfo />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          exact
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
