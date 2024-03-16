import { useDispatch } from "react-redux";
import { removeFromBag } from "../../store/action-creator/action";
import { useState } from "react";
import { Link } from "react-router-dom";

const BagProduct = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const regex = /^[1-9]\d*$/;
  const changeCount = ({ target: { value } }) => {
    if (regex.test(value) && value <= item.count) {
      setCount(+value);
    }
  };

  return (
    <li key={item.id}>
      <div className="product-name">{item.name} </div>
      <div className="product-price">${item.price}</div>
      <div>{item.count}</div>
      <img src={item.image} alt={item.name} />

      <input type="number" value={count} onChange={changeCount} />
      <button
        className="remove-button"
        onClick={() => dispatch(removeFromBag({ id: item.id, count }))}
      >
        Remove from Bag
      </button>
      <button className="info-button">
        <Link to={`/products/${item.id}`}>INFO</Link>
      </button>
    </li>
  );
};

export default BagProduct;
