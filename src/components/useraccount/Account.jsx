import React, { useEffect, useState } from "react";
import "./account.css";
import User from "../user/User";
import QR from "../allqr/qr";
import Payments from "../payments/payments";
import useAuth from "../../../hooks/useAuth";
import fetchUser from "../../fetchuser/fetchuser";

const Account = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const {auth,setAuth} =useAuth()
  // const token=auth.accessToken;
  useEffect(() => {
    // console.log(token)
    getUser();
    
  }, [loading]);
  const getUser = async () => {
    // console.log("found you")
    let response = await fetchUser(auth,setAuth);
    setUser(response.email)
    setLoading(false);
    console.log(response);
  };

  // const onChangeTab=(e)=>{
  //   console.log(e.target.name)
  //     setActiveTab(e.target.name)
  // }
  if (loading) {
    return <div className="">loading</div>;
  } else
    return (
      <main className="account_main">
        <div className="account_menu_bar">
          <div
            name="account_account"
            onClick={(e) => setActiveTab("account")}
            className="account_menu_item account_user"
          >
            <i className="fa-regular fa-user"></i>
          </div>
          <div
            name="qr"
            onClick={(e) => setActiveTab("qr")}
            className="account_menu_item account_qrs"
          >
            <i className="fa-solid fa-qrcode"></i>
          </div>
          <div
            name="pay"
            onClick={(e) => setActiveTab("pay")}
            className="account_menu_item account_plan"
          >
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
        </div>
        {/* <User /> */}
        {activeTab == "account" && <User useremail={user} />}
        {activeTab == "qr" && <QR />}
        {activeTab == "pay" && <Payments auth={auth} />}
      </main>
    );
};

export default Account;
