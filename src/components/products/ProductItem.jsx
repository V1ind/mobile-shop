import React, { useEffect, useState } from "react";
import "../styles.css/index.css";
import { addToBag } from "../../store/action-creator/action";
import { useDispatch, useSelector } from "react-redux";
import { bagProductCountByIdSelector } from "../../store/selectors/bag";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const bagProductCount = useSelector(bagProductCountByIdSelector(product.id));
  const regex = /^[1-9]\d*$/;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const changeCount = ({ target: { value } }) => {
    if (regex.test(value) && value <= product.quantity - bagProductCount) {
      setCount(+value);
    }
  };

  const addToBagHandler = () => {
    dispatch(addToBag({ product, count: count }));
  };

  useEffect(() => {
    setCount(1);
  }, [bagProductCount]);

  return (
    <li key={product.id}>
      <div className="product-name">{product.name} </div>
      <div className="product-price">${product.price}</div>

      <div> <input type="number" onChange={changeCount} value={count} /></div>
      <img src={product.image} alt={product.name} />
      <button
        disabled={product.quantity - bagProductCount === 0}
        onClick={addToBagHandler}
      >
        Add to Bag
      </button>

      <Link className="info-button" to={`/products/${product.id}`}>Details</Link>

    </li>
  );
};

export default ProductItem;
