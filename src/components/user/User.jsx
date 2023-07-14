import React, { useState } from 'react'
import './user.css'
import useLogOut from '../../../hooks/useLogOut'
const User = ({useremail}) => {
    const [email, setemail] = useState(useremail)
    const logOut=useLogOut()
  return (
    <div className="user_main">
        <div className="user_email">
        <div className='user_label'>Change Email: </div>
        <input
        defaultValue={email}
          // value={email}
          // onChange={onChangeInput}
          // placeholder={email}
          className="user_input user_link"
        ></input>
        </div>
        <div className="user_email">
        <div className='user_label'>Change Password: </div>
        <input
        //   value={link}
        //   onChange={}
        type='password'
          placeholder={'New Password'}
          className="user_input user_link"
        ></input>
        </div>
        <div className="user_email">
        <div className='user_label'>Enter Current Password: </div>
        <input
        //   value={link}
        //   onChange={onChangeInput}
        type='password'
          placeholder={'Current Password'}
          className="user_input user_link"
        ></input>
        </div>
        <div onClick={()=>{}} className="user_submit">
          Update
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