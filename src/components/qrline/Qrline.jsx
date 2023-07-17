import React, { useContext, useEffect, useRef, useState } from "react";
import "./qrline.css";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import QRCode from "qrcode";
import Editable from "../editable/Editable";
import QRContext from "../../../context/allqrcontext";
import useAuth from "../../../hooks/useAuth";
import LoadingComponent from "../loadingComponent/LoadingComponent";
const Qrline = ({ link, uuid ,qrtype}) => {
  const inputRef = useRef();
  const context = useContext(QRContext);
  const { deleteLink, updateLink, getQRs } = context;
  const [loading, setLoading] = useState(false);
  const [newLink, setNewLink] = useState(link);
  const { isShowing, toggle } = useModal();
  const [size, setSize] = useState("100X100");
  const [imgurl, setImgurl] = useState("");
  const [editing, setEditing] = useState(false);
  const [type, setType] = useState(qrtype)
  const { auth, setAuth } = useAuth();
  useEffect(() => {}, [editing]);

  const handleDelete = async () => {
    setLoading(true);
    await deleteLink(uuid, auth, setAuth);
    getQRs(auth, setAuth);
    setLoading(false);
  };
  const editLink = async (e) => {
    // setLoading(true)
    console.log(type)
    if (editing == false) {
      // inputRef.current.focus()
      e.target.classList.remove("fa-pen-to-square");
      e.target.classList.add("fa-check");
      setEditing(!editing);
    } else {
      setLoading(true);
      var inp = document.getElementById("link_input");
      // console.log(inp.value);
      setNewLink(inp.value);
      // setType()
      await updateLink(uuid, newLink,type, auth, setAuth);
      e.target.classList.remove("fa-check");
      e.target.classList.add("fa-pen-to-square");
      setEditing(!editing);
      setLoading(false);
    }
  };
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
    setLoading(true)
    const link = document.createElement("a");
    link.href = imgurl;
    link.setAttribute("download", "qr.png"); //or any other extension
    document.body.appendChild(link);
    link.click();
    setLoading(false)
  };
  const onChangeSize = (e) => {
    // setSize(e.value);
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      height: e.value,
      width: e.value,
      margin: 1,
      color: {
        dark: "#000",
        light: "#fff",
      },
    };
    QRCode.toDataURL(link, opts, function (error, url) {
      if (error) console.error(error);

      var img = document.getElementById("modal_canvas");
      img.src = url;
      setImgurl(url);
    });
  };
  if(loading){
    return <LoadingComponent/>
  }else
  return (
    <div className="qrline_line">
      <div className="qrline_link">
        {/* {!loading?link: */}
        <Editable
          text={newLink}
          placeholder="Enter Link"
          // childRef={inputRef}
          type="input"
          isEditing={editing}
          setEditing={setEditing}
          disabled={editing}
        >
          <input
            // disabled={true}
            id="link_input"
            className="editable_input"
            ref={inputRef}
            type="text"
            name="task"
            placeholder="Enter Link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
        </Editable>
        <div className="qrline_change_types qrform_choose_type">
          <label  onClick={()=>setType("link")} className={"qrform_type_input_label"} htmlFor="type-link">
          <input defaultChecked={type==='link'?true:false} checked={type==='link'?true:false} disabled={!editing} className={"qrform_type_input"} type="radio" name="type" id="type-link"  />
            Link
          </label>
          <label  onClick={()=>setType("text")} className={"qrform_type_input_label"} htmlFor="type-text">
          <input checked={type==='link'?true:false} defaultChecked={type==='text'} disabled={!editing} className={"qrform_type_input"} type="radio" name="type" id="type-text"  />
            Text/Message
          </label>
        </div>
      </div>
      <div className="qrline_sub_menu">
        <div className="qrline_edit">
          <i
            onClick={(e) => {
              editLink(e);
            }}
            className="fa-solid fa-pen-to-square"
          ></i>
        </div>
        <div onClick={toggle} className="qrline_see_qr">
          See QR
        </div>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          size={size}
          downloadQR={downloadQR}
          options={options}
          onChangeSize={onChangeSize}
        />
        <div
          onClick={() => {
            handleDelete();
          }}
          className="qrline_delete"
        >
          <i className="qrline_i fa-sharp fa-solid fa-trash"></i>
        </div>
        
        
      </div>
    </div>
  );
};

export default Qrline;
