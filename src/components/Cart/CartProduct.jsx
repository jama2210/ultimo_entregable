import React from 'react';
import './style/cartProduct.css';

const CartProduct = ({product}) => {

  console.log(product)

  return (
    <article className='cart_product'>
      <header className='details'>
        <h3 className='brand'>{product.brand}</h3>
        <h3 className='title'>{product.title}</h3>
      <div className='quantity'>{product.productsInCart.quantity}</div>
      </header>
      <button className='btn_del'>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <div className='total'>
        <p>Unit Price:</p>
        <span>{product.price}</span>
      </div>
    </article>
  )
}

export default CartProduct
