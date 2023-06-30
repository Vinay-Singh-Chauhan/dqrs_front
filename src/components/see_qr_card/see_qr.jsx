import React from 'react'
import './see_qr.css'
import Dropdown from '../dropdown/DropDown';
const see_qr = ({link}) => {
    // const [link, setLink] = useState(link);
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
    
    const onSubmit = () => {
        var opts = {
          errorCorrectionLevel: "H",
          type: "image/jpeg",
          quality: 0.3,
          height:size,
          width:size,
          margin: 1,
          color: {
            dark: "#000",
            light: "#fff",
          },
        };
        // var canvas = document.getElementById("canvas");
        // addLink()/
        QRCode.toDataURL(link, opts, function (error, url) {
          if (error) console.error(error);
    
          var img = document.getElementById("canvas");
          img.src = url;
          // img.style={"height":size+'px',"width":size+'px'}
          // img.setAttribute('style',)
          setImgurl(url);
    
          // console.log("success!");
        });
        setGenerate(true)
      };
      const downloadQR = () => {
        // const url = imgurl.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = imgurl;
    
        link.setAttribute("download", "qr.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      };
      const onChangeSize = (e) => {
        setSize(e.value);
        onSubmit()
      };
  return (
    <div className="main">
<div className="qr_code" id={'qr_code'} onClick={downloadQR}>
        <img style={{ cursor: "pointer" }}  id="canvas"></img>
        <p id={'here_msg'}>Your QR will appear here</p>
      </div>
<div className="size_input">
          <Dropdown
            placeHolder={size}
            isMulti={false}
            isSearchable={false}
            options={[...options]}
            onChange={onChangeSize}
          />
        </div>
    </div>
  )
}

export default see_qr