import React, { useContext, useEffect, useState } from "react";
import "./qr.css";
import Qrline from "../qrline/Qrline";
import QRContext from "../../../context/allqrcontext";
import useAuth from "../../../hooks/useAuth";
const api = "http://127.0.0.1:5000/api/qr";
const QR = () => {
  const {auth,setAuth}=useAuth()
  // const [qrs, setQrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(QRContext);
  // console.log(context)
  // const {auth}=useAuth()
  useEffect(() => {
    getQRs(auth,setAuth);
    setLoading(false)
  }, []);
  // const [qrs, setqrs] = useState([])
  const {qrs,getQRs}=context

  if (loading) {
    return <div className="">loading</div>;
  } else
    return (
      <div className="allqr_main">
        {qrs.map((e) => {
          return <Qrline key={e._id} uuid={e.uuid} link={e.link} />;
        })}
      </div>
    );
};

export default QR;
