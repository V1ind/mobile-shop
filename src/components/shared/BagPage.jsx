import "../styles.css/index.css";
import React from "react";
import { useSelector } from "react-redux";

import { bagSelector } from "../../store/selectors/bag";
import BagProduct from "./BagProduct.jsx";

const BagPage = () => {
  const bag = useSelector(bagSelector);

  return (
    <div>
      <ul>
        {bag.map((item) => (
          <BagProduct item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BagPage;
