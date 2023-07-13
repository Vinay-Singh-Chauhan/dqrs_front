import React, {  useEffect, useRef, useState } from 'react'
import Input from './../../components/input/input'
import useAuth from './../../../hooks/useAuth'
import {useLocation,useNavigate,Link} from 'react-router-dom'
const api="http://127.0.0.1:5000/api/auth/login"
const Login = () => {
  const {setAuth}=useAuth()
   
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwd, setPwd] = useState("");


  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);
const navigate=useNavigate();
const location=useLocation();
const from =location.state?.from?.pathname||'/'
    const handleLogIn=async()=>{
      const data={email:email,password:pwd}
      // console.log(data)
      try{
      fetch(api, {
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
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
        .then(async(response) => {
          // console.log(response);
          if (!response.ok) {
            // console.log('found you')
            throw new Error(response.status);
          }
           response=await response.json();
          console.log(response.accessToken)
          setAuth({
            accessToken:response.accessToken
          })
        //   // console.log("found you")
        setPwd('');
        setEmail('');
        navigate(from,{replace:true});

        //   setSuccess(true);
        })
        .catch((response) => {
          console.log(response?.message)
          if (!response?.message ) {
            setErrMsg("No server response");
          }else
          if (response?.message === '400') {
            setErrMsg("Missing fields");
          } else if (response?.message == '401') {
            setErrMsg("unauthorized");
          } else if (response?.message == '409') {
            setErrMsg("conflict");
          } else {
            setErrMsg("login falied");
          }
        //   setPwd('');
        // setEmail('')
        });
        
    } catch (err) {
      // console.log(err)
      if (!err?.response) {
        setErrMsg("No server response");
      }  else {
        setErrMsg("login falied");
      }
      errRef.current.focus();
      console.log(err);
    }
  };
  return (
  
    <div className="login_main">
      <p
        ref={errRef}
        aria-live={"assertive"}
        className={errMsg ? "errorMsg" : "offscreen"}
      >
        {errMsg}
      </p>
        <div className="qrform_form">
        <Input
            label={"Email"}
            input_name={"email"}
            type={"email"}
            input_ref={emailRef}
            setValue={setEmail}
            placeholder_text={"Email"}
            validValue={true}
            setValueFocus={setEmailFocus}
            valueFocus={emailFocus}
            value={email}
            uidtext={
              ""
            }
          />
      
      <Input
            label={"Passord"}
            input_name={"password"}
            type={"password"}
            setValue={setPwd}
            placeholder_text={"Password"}
            validValue={true}
            setValueFocus={()=>{}}
            valueFocus={false}
            value={pwd}
            uidtext={
              ""
            }
          />
        
        <div onClick={()=>{handleLogIn()}} className="qrform_submit">
          Log In
        </div>
      </div>
      <div className="login_image"></div>
    </div>
  )
}

export default Login