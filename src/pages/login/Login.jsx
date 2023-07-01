import React, { useState } from 'react'
const api="http://127.0.0.1:5000/api/auth/login"
const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handleLogIn=async()=>{
      const data={email:email,password:pass}
         let response = await fetch(api, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
        //   setQrs(res)
        // setQrs(response)
        response=await response.json()
        // console.log(response.token)
        if(response.success)
        localStorage.setItem('token',response.token);
        else
        alert(response.msg)
    }
  return (
    <div className="login_main">
        <div className="qrform_form">
        <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="E-mail"
          className="qrform_input qrform_link"
        ></input>
        <input
          value={pass}
          onChange={(e)=>{setPass(e.target.value)}}
          placeholder="Password"
          type='password'
          className="qrform_input qrform_link"
        ></input>
        
        <div onClick={()=>{handleLogIn()}} className="qrform_submit">
          Log In
        </div>
      </div>
      <div className="login_image"></div>
    </div>
  )
}

export default Login