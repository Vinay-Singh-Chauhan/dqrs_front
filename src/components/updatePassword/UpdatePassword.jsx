import React, { useEffect, useState } from 'react'
import './updatepassword.css'
import LoadingComponent from './../loadingComponent/LoadingComponent'
import { useParams } from 'react-router-dom'
import MessageModal from '../MessageModal.jsx/MessageModal'
import useMessageModal from '../MessageModal.jsx/useMessageModal'
const UpdatePassword = () => {
    const params=useParams()
    const val_api=import.meta.env.VITE_API+"/reset/validate/"+ params.email+'/'+params.token
    const update_api=import.meta.env.VITE_API+"/reset"
    const [loading, setLoading] = useState(true)
    const [validated, setValidated] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {isShowing, toggle,setMessage,message} = useMessageModal();
    useEffect(() => {
      validate()
        setLoading(false)
      return () => {
        setEmail('');
      }
    }, [])
    const validate=async()=>{
        let response=await fetch(val_api,{
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'authorization':token
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }})
        if(response.status==200){
        response=await response.json();
            setEmail(response.email);
            setValidated(true)
    }
        else {
            setValidated(false)
        }
    }
    const updatepassword=async()=>{
      setLoading(true)
      try{

      
        let response=await fetch(update_api, {
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
            body: JSON.stringify({email:email,password:password}), // body data type must match "Content-Type" header
          })
          if(response.status==204){
            setMessage('Password updated successfully');
            toggle()
          }else{
            setMessage('Password was not updated ');
            toggle()
          }
        }catch(error){
          setMessage(error.message);
            toggle()
        }
        setLoading(false)
            
    }
    if(

        loading
    ){
        return <LoadingComponent/>
    }else{

          if(validated) {return(

      <div className='update_pass_main'>
    <div className=''>Change Password: </div>
    <input
        value={password}
        onChange={e=>setPassword(e.target.value)}
        type='password'
        placeholder={'New Password'}
        className="user_input user_link"
        ></input>
    <div onClick={()=>{updatepassword()}} className="user_submit">
        Update
    </div>
    <MessageModal
        isShowing={isShowing}
        hide={toggle}
        message={message}
      />
        
</div>)}
else{
    return (
        <div className='update_pass_main'>
            <div>Unauthorised</div>
</div>
    )

}
    }


}

export default UpdatePassword