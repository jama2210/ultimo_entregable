import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'


const Header = () => {
  return (
      
          <nav className='nav'>
            <div className='nav_title'><Link to='/'><strong>e-commerce</strong></Link></div>
          <ul className='nav_items'>
                  <li className='item_icon'><Link to='/login'><i class="fa-regular fa-user"></i></Link></li>
          <li className='item_icon'><Link to='/purchases'><i class="fa-solid fa-box-archive"></i></Link></li>
          <li className='item_icon'><Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link></li>
          </ul>
      </nav>
     
  )
}

export default Header