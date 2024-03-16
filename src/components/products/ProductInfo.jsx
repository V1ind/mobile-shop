import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productId } = useParams();
  console.log("productId:", productId);

  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/products/${productId}`
        );
        console.log("Product Data:", res.data);
        setProduct(res.data);

        if (res.data.color && res.data.color.length > 0) {
          setSelectedColor(res.data.color[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>
        Color:
        <select value={selectedColor} onChange={handleColorChange}>
          {product.color.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductInfo;
