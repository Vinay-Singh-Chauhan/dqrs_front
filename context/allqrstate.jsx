import React, { useState } from "react";
import QRContext from "./allqrcontext";
// const host='http://127.0.0.1:5000/api/qr/10333dbc-fa6b-476f-8948-c78e97ae83e0';
const api="http://127.0.0.1:5000/api/qr/"
const QRState= (props)=>{
    const [qrs, setqrs] = useState([])
    const getQRs = async (token) => {
        // const data={email:useremail}
        let response = await fetch(api, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        //   setQrs(res)
        // setQrs(response)
        response = await response.json();
        // console.log(response)
        setqrs(response);
        return response;
      };
    const deleteLink=async(token,uuid)=>{
        let response = await fetch(api+uuid, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        //   setQrs(res)
        // setQrs(response)
        response = await response.json();
        // console.log(response)
        return response;
      }
    const updateLink = async (token,uuid,newLink) => {
        const data={link:newLink}
        let response = await fetch(api+uuid, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
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