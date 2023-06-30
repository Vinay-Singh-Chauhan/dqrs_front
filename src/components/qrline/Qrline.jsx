import React from 'react'
import './qrline.css'
const Qrline = ({link}) => {
  return (
    <div  className="line">
        <div className="link">{link}</div>
        <div className="sub_menu">
            <div className="edit"><i class="fa-solid fa-pen-to-square"></i></div>
        <div className="see_qr">See QR</div>
        <div className="delete"><i class="fa-sharp fa-solid fa-trash"></i></div>
        </div>
        
    </div>
  )
}

export default Qrline