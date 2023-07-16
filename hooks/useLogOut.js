import React from 'react'
import useAuth from './useAuth'
const useLogOut = () => {
    const api=import.meta.env.VITE_API+'/api/auth/logout'
    const {setAuth}=useAuth();
    const logOut=async()=>{
        try{
            let response = await fetch(api, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "include", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow", 
                referrerPolicy: "no-referrer",
            });
            // console.log(response)
            setAuth({});
            //   response=await response.json()
        }catch(err){
            // console.log(err);
        }
    }
  return logOut
}

export default useLogOut