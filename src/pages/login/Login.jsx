import React, { useEffect, useRef, useState } from "react";
import Input from "./../../components/input/input";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./login.css";
import user from './user.png'
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
const api = import.meta.env.VITE_API+"/api/auth/login";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();

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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user/account";
  const handleLogIn = async () => {
    setLoading(true);
    const data = { email: email, password: pwd };
    try {
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
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          response = await response.json();
          setAuth({
            accessToken: response.accessToken,
          });
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
            setErrMsg("login falied");
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
    <div className="login_main">
      {loading && <LoadingComponent/>}
      
      <div className="qrform_form login_form"><p
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
            handleLogIn();
          }}
          className="qrform_submit"
        >
          Sign In
        </div>
        <Link to="/forgotpass">
          <div className="login_forgot_password">Forgot password</div>
        </Link>
      </div>
      <div className="login_image">
        <img className="login_image" src={user} alt="decoration image" />
      </div>
    </div>
  );
};

export default Login;
