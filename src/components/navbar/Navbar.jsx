import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className="brand_name">
        Dynamic_QRs
        </div>
       <ul className='navbar'>

        
        <li className='nav_item'>
          Home
        </li>
        <li className='nav_item'>
          About
        </li>
        <li className='nav_item'>
          Pricing
        </li>
        <li className='nav_item'>
          SignIn
        </li>
        </ul> 
        <div className="get_started">
        Get Started
        </div>
    </nav>
  )
}

export default Navbar