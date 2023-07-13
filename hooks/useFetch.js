import { useEffect, useState } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useInterceptorFetch = async (api, config,auth,setAuth) => {
  // const {auth}=useAuth()
  const refresh = useRefreshToken();
  console.log(config)
  if (!config.headers["Authorization"]) {
    console.log("found yuo");
    // console.log(auth)
    config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
    console.log(config)
  }
  try {
    let response = await fetch(api, config);
    if (response.status === 403 && !config?.prevSent) {
      console.log("refreshing")
      // console.log(config)
      // generateToken
      const newAccessToken = await refresh(setAuth);
      // console.log(newAccessToken)
      config.prevSent = true;
      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      response= await fetch(api, config);
      // console.log(response)
    } else if(!response.ok){
      // console.log("not ok")///
      return response;
    }
    console.log("in unterceptor")
    console.log(response)
    return response;
  } catch {
    (err) => {
      Promise.reject(err);
      return err;
    };
  }
};

export default useInterceptorFetch;
