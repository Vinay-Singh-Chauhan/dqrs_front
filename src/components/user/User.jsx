import React, { useState } from 'react'
import './user.css'
import useLogOut from '../../../hooks/useLogOut'
const api="http://127.0.0.1:5000/reset/get"
const User = ({useremail,name}) => {
  const sendLink=async()=>{
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
    if(response.status===200){
      
      console.log(response)
}
    else {
      // console.log(response)
    }
}
    const [email, setemail] = useState(useremail)
    const logOut=useLogOut()
  return (
    <div className="user_main">
        <div className="user_email">
        <div className='user_label'>Provided Email: </div>
        <span className='user_span'
        >{email}</span>
        </div>
        <div className="user_email">
        <div className='user_label'>Name: </div>
        <span className='user_span'
        >{name}</span>
        </div>
        {/* <div className="user_email">
        <div className='user_label'>Enter Current Password: </div>
        <input
        //   value={link}
        //   onChange={onChangeInput}
        type='password'
          placeholder={'Current Password'}
          className="user_input user_link"
        ></input>
        </div> */}
        <div onClick={()=>{sendLink()}} className="user_submit">
          Change Password
        </div>
        <div onClick={()=>{
          logOut()
          
        }} className="user_submit">
          Logout
        </div>
    </div>
  )
}

export default User