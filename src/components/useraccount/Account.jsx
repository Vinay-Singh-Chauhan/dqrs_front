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
    <main className='account_main'>
        <div className="account_menu_bar">
            <div name='account_account' onClick={(e)=>setActiveTab('account')} className="account_menu_item account_user"><i className="fa-regular fa-user"></i></div>
            <div name ='qr' onClick={(e)=>setActiveTab('qr')} className="account_menu_item account_qrs"><i className="fa-solid fa-qrcode"></i></div>
            <div name='pay' onClick={(e)=>setActiveTab('pay')} className="account_menu_item account_plan"><i className="fa-solid fa-money-check-dollar"></i></div>
        </div>
        {/* <User /> */}
        {activeTab=='account' && <User/>}
        {activeTab=='qr' && <QR/>}
    </main>
  )
}

export default Account