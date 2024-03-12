import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Product ID:", productId); //  for Debuging
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/products/${productId}`
        );
        console.log("Product Data:", res.data); // for Debuging
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ background: "black" }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductInfo;
