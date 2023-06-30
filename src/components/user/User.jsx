import React, { useState } from 'react'
import './user.css'
const User = () => {
    const [email, setemail] = useState('chauhamsvinay@gmail.com')
  return (
    <div className="main">
        <div className="email">
        <div className='label'>Change Email: </div>
        <input
        //   value={link}
        //   onChange={onChangeInput}
          placeholder={email}
          className="input link"
        ></input>
        </div>
        <div className="email">
        <div className='label'>Change Password: </div>
        <input
        //   value={link}
        //   onChange={}
        type='password'
          placeholder={'New Password'}
          className="input link"
        ></input>
        </div>
        <div className="email">
        <div className='label'>Enter Current Password: </div>
        <input
        //   value={link}
        //   onChange={onChangeInput}
        type='password'
          placeholder={email}
          className="input link"
        ></input>
        </div>
        <div onClick={()=>{}} className="submit">
          Update
        </div>
    </div>
  )
}

export default User