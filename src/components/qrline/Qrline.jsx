import React, { useState } from 'react'
import './qrline.css'
import Modal from '../modal/modal'
import useModal from '../modal/useModal'
import QRCode from "qrcode";
const Qrline = ({link}) => {
  const {isShowing, toggle} = useModal();
  const [size, setSize] = useState("100X100");
  const [imgurl, setImgurl] = useState("");
    const options = [
        { value: "100", label: "100X100" },
        { value: "200", label: "200X200" },
        { value: "300", label: "300X300" },
        { value: "400", label: "400X400" },
        { value: "500", label: "500X500" },
        { value: "600", label: "600X600" },
        { value: "700", label: "700X700" },
      ];
      const downloadQR = () => {
        const link = document.createElement("a");
        link.href = imgurl;
        link.setAttribute("download", "qr.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      };
      const onChangeSize = (e) => {
        // setSize(e.value);
        var opts = {
          errorCorrectionLevel: "H",
          type: "image/jpeg",
          quality: 0.3,
          height:e.value,
          width:e.value,
          margin: 1,
          color: {
            dark: "#000",
            light: "#fff",
          },
        };
        QRCode.toDataURL(link, opts, function (error, url) {
          if (error) console.error(error);
    
          var img =document.getElementById("modal_canvas");
          img.src = url;
          setImgurl(url);
        });
      };
  return (
    <div  className="qrline_line">
        <div className="qrline_link">{link}</div>
        <div className="qrline_sub_menu">
            <div className="qrline_edit"><i className="fa-solid fa-pen-to-square"></i></div>
        <div onClick={toggle} className="qrline_see_qr">See QR</div>
        <Modal
        isShowing={isShowing}
        hide={toggle}
        size={size}
        downloadQR={downloadQR}
        options={options}
        onChangeSize={onChangeSize}
      />
        <div className="qrline_delete"><i className="qrline_i fa-sharp fa-solid fa-trash"></i></div>
        </div>
        
    </div>
  )
}

export default Qrline