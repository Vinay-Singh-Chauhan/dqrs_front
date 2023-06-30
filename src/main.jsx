import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import './index.css'
import Footer from './components/footer/Footer.jsx'
import Qrform from './components/qrform/qrform.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Account from './components/useraccount/Account.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
    <Account/>
    
    </div>
    <Footer />
  </React.StrictMode>,
)
