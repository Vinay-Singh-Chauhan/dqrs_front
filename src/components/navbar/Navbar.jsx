import React, { useState ,useEffect} from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './navbar.css'
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
  const {auth}=useAuth()
  const [loggedIn, setLoggedIn] = useState(auth?.accessToken?true:false)
  return (
    <nav>
        <div className="brand_name">
        <Link  className='link_style' to={'/'}>Dynamic_QRs</Link>
        </div>
       <ul className='navbar'>

        
        <li className='nav_item'>
          <Link  className='link_style' to={"/"}>Home</Link>
        </li>
        <li className='nav_item'>
          <Link  className='link_style' to={"/about"}>About</Link>
        </li>
        <li className='nav_item'>
          <Link  className='link_style' to={"/pricing"}>Pricing</Link>
        </li>
        <li className='nav_item'>
          <Link  className='link_style' to={loggedIn?'/account':"/signin"}>{loggedIn?"Account":"SignIn"}</Link>
        </li>
        </ul> 
        <div className="get_started">
        <Link  className='link_style' to={loggedIn?'/genqr':"/signup"}>{loggedIn?'New QR':"Get Started"}</Link>
        </div>
    </nav>
  )
}

export default Navbar