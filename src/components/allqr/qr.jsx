import React, { useContext, useEffect, useState } from "react";
import "./qr.css";
import Qrline from "../qrline/Qrline";
import QRContext from "../../../context/allqrcontext";
import useAuth from "../../../hooks/useAuth";
import LoadingComponent from './../loadingComponent/LoadingComponent'
const QR = () => {
  const {auth,setAuth}=useAuth()
  const [loading, setLoading] = useState(true);
  const context = useContext(QRContext);
  useEffect(() => {
    setLoading(true)
    getQRs(auth,setAuth);
    setLoading(false)
  }, []);
  const {qrs,getQRs}=context

  if (loading) {
    return <LoadingComponent/>
  } else
    return (
      <div className="allqr_main">
        {qrs.map((e) => {
          return <Qrline key={e._id} uuid={e.uuid} link={e.link} redirectLink={e.redirectLink} qrtype={e.type} />;
        })}
      </div>
    );
};

export default QR;
