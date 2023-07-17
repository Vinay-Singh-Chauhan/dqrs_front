import React, { useState } from "react";
import QRContext from "./allqrcontext";
import useInterceptorFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";
const api=import.meta.env.VITE_API+"api/qr/"
const QRState= (props)=>{
    const [qrs, setqrs] = useState([])
    // const {auth,setAuth}=useAuth()
    const getQRs = async (auth,setAuth) => {
        let response = await useInterceptorFetch(api, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // authorization: token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        },auth,setAuth);
        //   setQrs(res)
        // setQrs(response)
        // console.log(response)
        response = await response.json();
        setqrs(response);
        return response;
      };
    const deleteLink=async(uuid,auth,setAuth)=>{
        let response = await useInterceptorFetch(api+uuid, {
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
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        },auth,setAuth);
        //   setQrs(res)
        // setQrs(response)
        response = await response.json();
        // console.log(response)
        return response;
      }
    const updateLink = async (uuid,newLink,type,auth,setAuth) => {
        const data={link:newLink,type:type}
        let response = await useInterceptorFetch(api+uuid, {
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
        },auth,setAuth);
        //   setQrs(res)
        // setQrs(response)
        response = await response.json();
        // console.log(response)
        return response;
      };
    
    return (
        <QRContext.Provider value={{qrs,getQRs,deleteLink,updateLink}}>
            {props.children}
        </QRContext.Provider>
    )
}
export default QRState;