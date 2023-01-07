import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <p className='footer_title'>@Academlo 2023</p>
            <div className='links'>
                <a href="#" className="link"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" className="link"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" className="link"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer