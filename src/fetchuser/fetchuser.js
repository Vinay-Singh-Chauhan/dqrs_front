
import useInterceptorFetch from "../../hooks/useFetch";
const fetchUser=async(auth,setAuth)=>{
  const api=import.meta.env.VITE_API+'api/auth/'
           let response = await useInterceptorFetch(api, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "include", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json"
              },
              redirect: "follow", 
              referrerPolicy: "no-referrer",
            },auth,setAuth);
            response=await response.json()
          return response
      }
export default fetchUser