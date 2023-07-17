import React, { useEffect, useState } from 'react'
import './user.css'
import useLogOut from '../../../hooks/useLogOut'
const api=import.meta.env.VITE_API+"/reset/get"
import LoadingComponent from '../loadingComponent/LoadingComponent'
import MessageModal from '../MessageModal.jsx/MessageModal'
import useMessageModal from '../MessageModal.jsx/useMessageModal'
const User = ({useremail,name}) => {
  const {isShowing, toggle,setMessage,message} = useMessageModal();
  const [loading, setLoading] = useState(true)
  const [email, setemail] = useState(useremail)
  useEffect(()=>{
    useremail &&
    setLoading(false)
  },[])
    const logOut=useLogOut()
  const sendLink=async()=>{
    setLoading(true)
    try{

    
    let response=await fetch(api, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({email:email}), // body data type must match "Content-Type" header
    })
    if(response.status==200){
      setMessage('Password reset link sent successfully to the email address');
      toggle()
    }else{
      setMessage('Some Error Occured');
      toggle()
    }
  }catch(error){
    setMessage(error.message);
      toggle()
  }
  setLoading(false)
}
    
if(loading){
  return <LoadingComponent/>
}else
  return (
    <div className="user_main">
        <div className="user_email">
        <div className='user_label'>Provided Email: </div>
        <span className='user_span'
        >{useremail}</span>
        </div>
        <div className="user_email">
        <div className='user_label'>Name: </div>
        <span className='user_span'
        >{name}</span>
        </div>
        
        <div onClick={()=>{sendLink()}} className="user_submit">
          Change Password
        </div>
        <div onClick={()=>{
          logOut()
          
        }} className="user_submit">
          Logout
        </div>
        <MessageModal
        isShowing={isShowing}
        hide={toggle}
        message={message}
      />
    </div>
  )
}

export default User