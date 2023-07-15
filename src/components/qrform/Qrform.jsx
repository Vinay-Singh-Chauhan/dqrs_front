import React, { useEffect, useState } from "react";
import Dropdown from "../dropdown/DropDown";
import QRCode from "qrcode";
import "./qrform.css";
import useInterceptorFetch from "../../../hooks/useFetch";
import useAuth from "../../../hooks/useAuth";
const api="http://127.0.0.1:5000/api/qr"
const Qrform = () => {

  const [link, setLink] = useState("");
  const [size, setSize] = useState("small");
  const [imgurl, setImgurl] = useState("");
  const [type, setType] = useState('link')
  const [generate, setGenerate] = useState(false)
  const {auth,setAuth}=useAuth()
  useEffect(()=>{
    if(generate){
      var div= document.getElementById("here_msg");
      div.innerHTML="Click on QR to Download it."
      // div.append()
      // div.setAttribute('display','none')
      // div.setAttribute('vi/')
    // div.innerHTML="<p>Your QR will appear here</p>"
    }
    // else{
    //   p=document.createElement('p')
    //   p.innerHTML='Click on QR to Dwonload it.'
    //   div.append()
    // }
    
    // img.src = "qr_here.png";
  },[generate])
  const options = [
    { value: "100", label: "100X100" },
    { value: "200", label: "200X200" },
    { value: "300", label: "300X300" },
    { value: "400", label: "400X400" },
    { value: "500", label: "500X500" },
    { value: "600", label: "600X600" },
    { value: "700", label: "700X700" },
  ];

  const onChangeInput = (e) => {
    setLink(e.target.value);
  };
  const onChangeSize = (e) => {
    setSize(e.value);
  };
  const onSubmit = async() => {
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
    let response=await addLink();
    console.log(response)
    // response=await response.json()
    QRCode.toDataURL(response.link, opts, function (error, url) {
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
  const addLink=async()=>{
  const data={link:link,type:type}
  // let token =localStorage.getItem('token')
  const response = await useInterceptorFetch(api, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'authorization':token
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  },auth,setAuth);
  let ParsedResponse=await response.json();
  return ParsedResponse // parses JSON response into native JavaScript objects
}


  
  return (
    <main className="qrform_main">
      <div className="qrform_qr_code" id={'qr_code'} onClick={imgurl.length>0?downloadQR:()=>{}}>
        <img style={{ cursor: "pointer" }}  id="canvas"></img>
        <p id={'here_msg'}>Your QR will appear here</p>
      </div>
      <div className="qrform_form">
        <input
          value={link}
          onChange={onChangeInput}
          placeholder="Your link here"
          className="qrform_input qrform_link"
        ></input>
        <div className="qrform_size_input">
          <Dropdown
            placeHolder={"Size"}
            isMulti={false}
            isSearchable={false}
            options={[...options]}
            onChange={onChangeSize}
          />
        </div>
        <div className="qrform_choose_type">Type: 
          <label onClick={()=>setType("link")} className={"qrform_type_input_label"} htmlFor="type-link">
          <input defaultChecked={true} className={"qrform_type_input"} type="radio" name="type" id="type-link"  />
            Link
          </label>
          <label onClick={()=>setType("text")} className={"qrform_type_input_label"} htmlFor="type-text">
          <input className={"qrform_type_input"} type="radio" name="type" id="type-text"  />
            Text/Message
          </label>
        </div>
        <div onClick={onSubmit} className="qrform_submit">
          Generate Dynamic QR
        </div>
      </div>
    </main>
  );
};

export default Qrform;
