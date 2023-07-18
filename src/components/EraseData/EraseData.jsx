
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import React, { useEffect, useRef, useState } from "react";
import Input from "./../../components/input/input";
import useAuth from "./../../../hooks/useAuth";
import './erasedata.css'
import { useLocation, useNavigate, Link } from "react-router-dom";
import useInterceptorFetch from "../../../hooks/useFetch";
const api = import.meta.env.VITE_API+"/api/auth/erase";
const EraseData = () => {
    const [loading, setLoading] = useState(false);
    const { auth,setAuth } = useAuth();
  
    const emailRef = useRef();
    const errRef = useRef();
  
    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [pwd, setPwd] = useState("");
  
    const [errMsg, setErrMsg] = useState("");
  
    useEffect(() => {
      emailRef.current.focus();
    }, []);
    useEffect(() => {
      setErrMsg("");
    }, [email, pwd]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleErase = async () => {
      setLoading(true);
      try {
        useInterceptorFetch(api, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   body: JSON.stringify(data), // body data type must match "Content-Type" header
        },auth,setAuth)
          .then(async (response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            // response = await response.json();
            setAuth({});
            setPwd("");
            setEmail("");
            setLoading(false)
            navigate(from, { replace: true });
  
            //   setSuccess(true);
          })
          .catch((response) => {
            if (!response?.message) {
              setErrMsg("No server response");
            } else if (response?.message === "400") {
              setErrMsg("Missing fields");
            } else if (response?.message == "401") {
              setErrMsg("unauthorized");
            } else if (response?.message == "409") {
              setErrMsg("conflict");
            } else {
              setErrMsg("Delete falied");
            }
            //   setPwd('');
            // setEmail('')
            setLoading(false)
          });
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No server response");
        } else {
          setErrMsg("login falied");
        }
        errRef.current.focus();
      }
      // SsetLoading(false);
  
    };
    
    return (
      <div className="erase_main">
        {loading && <LoadingComponent/>}
        
        <div className="erase_form qrform_form login_form"><p
          ref={errRef}
          aria-live={"assertive"}
          className={errMsg ? "errorMsg" : "offscreen"}
        >
          {errMsg}
        </p>
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
            uidtext={""}
          />
  
          <Input
            label={"Passord"}
            input_name={"password"}
            type={"password"}
            setValue={setPwd}
            placeholder_text={"Password"}
            validValue={true}
            setValueFocus={() => {}}
            valueFocus={false}
            value={pwd}
            uidtext={""}
          />
  
          <div
            onClick={() => {
              // setLoading(true)
              // console.log("S")
              handleErase();
            }}
            className="qrform_submit"
          >
            Erase Data
          </div>
          
            <div className="erase_warning">This Action is Irreversible. All your data and account information will become inaccessible.</div>
          
        </div>
      </div>
    );
}

export default EraseData