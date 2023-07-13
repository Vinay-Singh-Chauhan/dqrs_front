import React, { useContext, useEffect, useState } from "react";
import "./qr.css";
import Qrline from "../qrline/Qrline";
import QRContext from "../../../context/allqrcontext";
import useAuth from "../../../hooks/useAuth";
const api = "http://127.0.0.1:5000/api/qr";
const QR = () => {
  // const [qrs, setQrs] = useState([]);
  const context = useContext(QRContext);
  const {qrs,getQRs}=context
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const {auth}=useAuth()
    getQRs(auth.token);
    setLoading(false)
  }, []);


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
