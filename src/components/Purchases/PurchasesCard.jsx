import React from 'react'
import './style/purchasesCard.css'

const PurchasesCard = ({ purchase }) => {

    console.log(purchase);

    const datePurchase = new Date(purchase.createdAt)

  return (
      <article className='purchase_item'>
          <div className='purchase_header'>
            <b>{ datePurchase.toLocaleDateString()}</b>        
            </div>
              <ul className='purchase_list'>
                  {purchase.cart.products.map(prod => (
                      <li className='product_item' key={prod.id}><h4 className='name'>
                           {prod.title}
                      </h4>
                          <span className='quantity'><div className="box">{prod.productsInCart.quantity}</div></span>
                          <span className='price'>
                             ${prod.price}
                          </span>
                          
                  </li>
              ))}
              </ul>
   </article>
  )
}

export default PurchasesCard