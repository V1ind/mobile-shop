import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import Bag from "./pages/Bag";
import ProductPage from "./pages/ProductPage";
import UserProfile from "./pages/UserProfile";
import NotFound from "./components/error/NotFound";
import ProductInfo from "./components/products/ProductInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="bag" element={<Bag />} />

          <Route path="products" element={<ProductPage />}>
            <Route path=":productId" element={<ProductInfo />} />
          </Route>

          <Route path="user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
