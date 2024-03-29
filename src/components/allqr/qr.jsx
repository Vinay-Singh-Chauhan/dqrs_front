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
  const {qrs,getQRs}=context
  useEffect(() => {
    setLoading(true)
    getQRs(auth,setAuth);
    setLoading(false)
  }, []);
  // console.log(qrs)
  if (loading) {
    return <LoadingComponent/>
  } else
    return (
      <div className="allqr_main">
        {qrs.length==0 && <div className="payment_main">
        <div className='payment_center_msg'>Generate a QR code to view here</div>
    </div>}
        {qrs.map((e) => {
          return <Qrline key={e._id} uuid={e.uuid} link={e.link} redirectLink={e.redirectLink} qrtype={e.type} />;
        })}
      </div>
    );
};

export default QR;
