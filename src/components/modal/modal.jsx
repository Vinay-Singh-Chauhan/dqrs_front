import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
import QRCode from "qrcode";
import Dropdown from '../dropdown/DropDown';

const Modal = ({ isShowing, hide,downloadQR,size,options,onChangeSize }) => isShowing ? ReactDOM.createPortal(
    
  <React.Fragment>
    
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="see_qr_main">
<div className="see_qr_qr_code" id={'qr_code'} onClick={downloadQR}>
        <img style={{ cursor: "pointer" }}  id="modal_canvas"></img>
        {/* <p id={'see_qr_here_msg'}>Select Size</p> */}
      </div>
<div className="size_input">
          <Dropdown
            placeHolder={'Select Size'}

            isMulti={false}
            isSearchable={false}
            options={[...options]}
            onChange={onChangeSize}
          />
        </div>
    </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;