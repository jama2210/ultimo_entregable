import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrderProducts,
  decendingOrderProducts,
} from "../../store/slices/products.slice";
import './styles/toOrderProducts.css'

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrderProducts());
  };

  const handleDecending = () => {
    dispatch(decendingOrderProducts());
  };

  return (
    <div className="order_container">
      <button className="order_btn" onClick={handleAscending}>Asc. Order</button>
      <button className="order_btn" onClick={handleDecending}>Des. Order</button>
    </div>
  );
};

export default ToOrderProducts;
