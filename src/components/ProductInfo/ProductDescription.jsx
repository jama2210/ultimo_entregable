
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import SliderImg from './SliderImg'
import './style/productDescription.css'

const ProductDescription = ({product}) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  
  const handleMinus = () => {
    if(counter - 1 > 0){
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleCart = () => {
    
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: counter,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => {
        const URLPatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
        const prevQuantity = cart.filter((e) => e.id === product.id)[0]
          .productsInCart.quantity;
        const data = {
          id: product.id,
          newQuantity: prevQuantity + counter,
        };
        if (err.response.status === 400) {
          axios
            .patch(URLPatch, data, getConfig())
            .then((res) => {
              console.log(res.data);
              dispatch(getUserCart());
            })
            .catch((err) => console.log(err));
        }
      });
  };

  return (
    <article className='product_des'>
      <div className='col'>
        <SliderImg listImgs={product?.productImgs } />
      </div>
      <div className='col'>
        <div className='product_info'>
      <h2 className='brand'>{product?.title}</h2>
      <div className="product_data">
      <p className='product_description'>{product?.description}</p>
      <div className='product_options'>
        <div className='flex'>
      <section className='pricee'>
        <span className='label'>Price</span>
        <h3 className='amount'>{product?.price}</h3>
      </section>
      <section className='quantity'>
        <span className='label'>Quantity</span>
        <div className='flex'>
          <div className='btnn' onClick={handleMinus}>-</div>
          <div className='value'>{counter}</div>
          <div className='btnn' onClick={handlePlus}>+</div>
        </div>
      </section>
        </div>
      <button onClick={handleCart} className='add_btn'>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>
      </div>
      </div>
    </article>
  )
}

export default ProductDescription
