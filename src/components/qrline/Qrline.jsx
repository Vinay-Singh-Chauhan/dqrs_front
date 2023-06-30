import React from 'react'
import './qrline.css'
const Qrline = ({link}) => {
  return (
    <div  className="qrline_line">
        <div className="qrline_link">{link}</div>
        <div className="qrline_sub_menu">
            <div className="qrline_edit"><i className="fa-solid fa-pen-to-square"></i></div>
        <div className="qrline_see_qr">See QR</div>
        <div className="qrline_delete"><i className="qrline_i fa-sharp fa-solid fa-trash"></i></div>
        </div>
        
    </div>
  )
}

export default Qrline