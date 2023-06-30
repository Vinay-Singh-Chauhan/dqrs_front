import React, { useEffect, useState } from 'react'
import './qr.css'
import Qrline from '../qrline/Qrline'
const api="http://127.0.0.1:5000/api/qr"

const QR = () => {

    const [qrs, setQrs] = useState([]
    )
    const [loading, setLoading] = useState(true)
    const getQRs=async()=>{
        const data={email:"chauhansvinay@gmail.com"}
         let response = await fetch(api, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              "authorization":"chauhansvinay@gmail.com"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
        //   setQrs(res)
        // setQrs(response)
        response=await response.json()
        // console.log(response)
        setQrs(response)
          return response;
    }
    useEffect(() => {
       
    getQRs()
    setLoading(false)
      
    }, [])
    
  return (
    <div className="allqr_main">
       { qrs.map((e)=>{
        return <Qrline key={e._id} link={e.link}/>
       })}
    </div>
  )
}

export default QR