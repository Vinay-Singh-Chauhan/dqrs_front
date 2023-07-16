import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/input/input";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import regexExps from "../../../regex";
import './signup.css'
import { useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API+"api/auth/signup";
const EMAIL_REGEX = regexExps.EMAIL_REGEX;
  const PWD_REGEX =
    regexExps.PWD_REGEX;
  const USER_REGEX = regexExps.USER_REGEX;
const Signup = () => {
  const [loading,setLoading]=useState(false)
  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
const navigate=useNavigate()
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  useEffect(() => {
    const res = USER_REGEX.test(name);
    setValidName(res);
  }, [name]);
  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
    setValidEmail(res);
  }, [email]);

  useEffect(() => {
    const res = PWD_REGEX.test(pwd);
    setValidPwd(res);
    
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [name, pwd,email]);
  
  
  const handleSubmit = async () => {
    // setLoading(true)\
    const v0 = USER_REGEX.test(name);
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    // console.log(v0)
    // console.log(v1)
    // console.log(v2)
    // console.log(email)
    if (!v0 || !v1 || !v2) {
      setErrMsg("Invalid Entry");
      // setLoading(false);
      setName("");
      setEmail("")
      setPwd("");
      return;
    }
    setLoading(true)
    try {
      const data = { email: email, password: pwd, name: name };
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
        .then((response) => {
          if (!response.ok) {
            throw new Error(response);
          }
          navigate('/signin')
          setName("");
      setEmail("")
      setPwd("");
        })
        .catch((response) => {
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
            setName("");
      setEmail("")
      setPwd("");
          }
        });

      setName("");
      setEmail("")
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else {
        setErrMsg("login falied");
      }
      errRef.current.focus();
    }
    setName("");
      setEmail("")
      setPwd("");
    setLoading(false)
  };
  if(loading){
    return <LoadingComponent/>
  }else
  return (
    <div className="signup_main">
      <p
        ref={errRef}
        aria-live={"assertive"}
        className={errMsg ? "errorMsg" : "offscreen"}
      >
        {errMsg}
      </p>
      <div className="qrform_form">
      <Input
            label={"Name"}
            input_name={"name"}
            type={"text"}
            input_ref={nameRef}
            setValue={setName}
            placeholder_text={"Name"}
            validValue={validName}
            setValueFocus={setNameFocus}
            valueFocus={nameFocus}
            value={name}
            uidtext={
              "4 to 24 Characters must begin with a letter letters ,numbers underscores and hyphens allowed."
            }
          />
          <Input
            label={"Email"}
            input_name={"email"}
            type={"email"}
            // input_ref={emailRef}
            setValue={setEmail}
            placeholder_text={"E-mail"}
            validValue={validEmail}
            setValueFocus={setEmailFocus}
            valueFocus={emailFocus}
            value={email}
            uidtext={
              "Enter a valid Email"
            }
          />
        <Input
            label={"Passord"}
            input_name={"password"}
            type={"password"}
            setValue={setPwd}
            placeholder_text={"A Strong Password"}
            validValue={validPwd}
            setValueFocus={setPwdFocus}
            valueFocus={pwdFocus}
            value={pwd}
            uidtext={
              "5 to 24 with at least one number one small letter one capital letter and one special character."
            }/>
        

        <div
          onClick={() => {
            handleSubmit();
          }}
          className="qrform_submit"
        >
          Sign Up
        </div>
      </div>
      <div className="signup_image"></div>
    </div>
  );
};

export default Signup;
