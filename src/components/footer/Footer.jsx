import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <div className="copyright">
            &copy;Dynamic_QRs
        </div>
        <div className="powered_by">
            Developed By: Vinay Singh Chauhan
        </div>
        <Link className="link_style" to="/terms"><div className="footer_item">Terms and Conditions</div></Link>
        <Link className="link_style" to="/privacy"><div className="footer_item">Privacy Policy</div></Link>
        <Link className="link_style" to="/user/erase"><div className="footer_item">Erase Your Data</div></Link>
    </footer>
  )
}

export default Footer