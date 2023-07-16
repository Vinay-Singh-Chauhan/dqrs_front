import React, { useEffect, useState } from 'react'
// import './forgotpassword.css'
import LoadingComponent from './../loadingComponent/LoadingComponent'
// import { useParams } from 'react-router-dom'
const ForgotPassword = () => {
    // const params=useParams()
    // const val_api="http://127.0.0.1:5000/reset/validate/"+ params.email+'/'+params.token
    const api="http://127.0.0.1:5000/reset/get"
    // const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const sendLink=async()=>{
        await fetch(api, {
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
            
    }
    
return(

      <div className='update_pass_main'>
    <div className='forgot_head'>Enter Registered Email: </div>
    <input
        value={email}
        onChange={e=>setEmail(e.target.value)}
        type='email'
        placeholder={'Email'}
        className="user_input user_link"
        ></input>
    <div onClick={()=>{sendLink()}} className="user_submit">
        Get Link
    </div>
        
</div>)
    


}

export default ForgotPassword