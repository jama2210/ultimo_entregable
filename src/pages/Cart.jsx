import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import getConfig from "../utils/getConfig";
import { getUserCart, setCartGlobal } from "../store/slices/cart.slice";
import './styles/cart.css'


const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  console.log(cartProducts);
  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => {
        dispatch(setCartGlobal(null));
      });
  };

  return (
    <div className="cart_container">

    <section className="cart">
      <h2 className="cart__h2"></h2>
      <div className="cart__cartProduct">
        {cartProducts?.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <section className="cart_section">
        <span className="section_total">
          <span>Total:</span>
          <p className="section_price">
            &#36;
            {cartProducts
              ? cartProducts.reduce(
                (acc, cv) => cv.price * cv.productsInCart.quantity + acc,
                0
                )
                : 0}
          </p>
        </span>
        <button className="cart_btn" onClick={handleCheckout}>
          Checkout
        </button>
      </section>
    </section>
                </div>
  );
};

export default Cart;
