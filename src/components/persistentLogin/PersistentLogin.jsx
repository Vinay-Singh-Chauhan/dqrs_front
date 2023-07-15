import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'
import useRefreshToken from './../../../hooks/useRefreshToken'
import useAuth from '../../../hooks/useAuth'
import LoadingComponent from '../loadingComponent/LoadingComponent'

const PersistentLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh=useRefreshToken();
    const {auth,setAuth} =useAuth()
    useEffect(() => {
      const verifyRefreshToken=async()=>{
        try{
            await refresh(setAuth);
        }
        catch(err){
            // console.error(err)
        }finally{
            setIsLoading(false);
        }
      }
      !auth?.accessToken?verifyRefreshToken():setIsLoading(false);
    }, [])
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    
  return (
    <>
    {isLoading ?<LoadingComponent/>:<Outlet/>}
    </>
  )
}

export default PersistentLogin