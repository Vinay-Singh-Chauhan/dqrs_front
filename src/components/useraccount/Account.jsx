import React, { useState } from 'react'
import './account.css'
import User from '../user/User'
import QR from '../allqr/qr'
const Account = () => {
    const [activeTab, setActiveTab] = useState('account')
    // const onChangeTab=(e)=>{
    //   console.log(e.target.name)
    //     setActiveTab(e.target.name)
    // }
  return (
    <main>
        <div className="menu_bar">
            <div name='account' onClick={(e)=>setActiveTab('account')} className="menu_item user"><i className="fa-regular fa-user"></i></div>
            <div name ='qr' onClick={(e)=>setActiveTab('qr')} className="menu_item qrs"><i className="fa-solid fa-qrcode"></i></div>
            <div name='pay' onClick={(e)=>setActiveTab('pay')} className="menu_item plan"><i className="fa-solid fa-money-check-dollar"></i></div>
        </div>
        {/* <User /> */}
        {activeTab=='account' && <User/>}
        {activeTab=='qr' && <QR/>}
    </main>
  )
}

export default Account