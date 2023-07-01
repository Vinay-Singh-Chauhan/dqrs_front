import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import './index.css'
import Footer from './components/footer/Footer.jsx'

import Qrform from './components/qrform/qrform.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Account from './components/useraccount/Account.jsx'
import About from './pages/about/About.jsx'
import Pricing from './pages/pricing/pricing.jsx'
import Signup from './pages/signup/signup.jsx'
import Login from './pages/login/Login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
    <Account/>
    {/* <Qrform/> */}
    {/* <Homepage/> */}
    {/* <About/> */}
    {/* <Pricing/> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    </div>
    <Footer />
  </React.StrictMode>,
)
