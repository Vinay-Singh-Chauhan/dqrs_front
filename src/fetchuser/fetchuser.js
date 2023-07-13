
import useInterceptorFetch from "../../hooks/useFetch";
const fetchUser=async(auth,setAuth)=>{
  const api='http://127.0.0.1:5000/api/auth/'
  console.log("in fetch user req")
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
            console.log(response)
            response=await response.json()
          // console.log(response.token)
          return response
      }
export default fetchUser