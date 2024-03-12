import "../components/styles.css/index.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/products/ProductItem.jsx";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
