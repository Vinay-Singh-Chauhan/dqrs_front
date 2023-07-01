import React, { useEffect, useState } from 'react'
import './account.css'
import User from '../user/User'
import QR from '../allqr/qr'
import Payments from '../payments/payments'
import fetchUser from '../../fetchuser/fetchuser'

const Account = () => {
    const [activeTab, setActiveTab] = useState('account')
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    useEffect(() => {
      getUser()
    }, [loading])
    const getUser=async()=>{
  let response=await fetchUser()
  // console.log(user)
  if(!response.success){
    // window.location='/auth/signup'
    // router.push('/')
    // return
  }else{
    
    setUser(response.user)
  }
  setLoading(false)
}
    
    // const onChangeTab=(e)=>{
    //   console.log(e.target.name)
    //     setActiveTab(e.target.name)
    // }
 if(loading){
  return <div className="">loading</div>
 }else
  return (
    
    <main className='account_main'>
        <div className="account_menu_bar">
            <div name='account_account' onClick={(e)=>setActiveTab('account')} className="account_menu_item account_user"><i className="fa-regular fa-user"></i></div>
            <div name ='qr' onClick={(e)=>setActiveTab('qr')} className="account_menu_item account_qrs"><i className="fa-solid fa-qrcode"></i></div>
            <div name='pay' onClick={(e)=>setActiveTab('pay')} className="account_menu_item account_plan"><i className="fa-solid fa-money-check-dollar"></i></div>
        </div>
        {/* <User /> */}
        {activeTab=='account' && <User useremail={user.email}/>}
        {activeTab=='qr' && <QR useremail={user.email} />}
        {activeTab=='pay' && <Payments/>}
    </main>
  )
}

export default Account