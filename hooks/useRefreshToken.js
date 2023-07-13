import useAuth from './useAuth'
const api='http://localhost:5000/refresh'
const useRefreshToken = () => {
    const {setAuth}=useAuth;
    const refresh=async()=>{
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
          response=await response.json()
          console.log(response)

          setAuth(prev=>{
            console.log(JSON.stringify(prev))
            return {...prev,accessToken:response.accessToken}
          })
        return response.accessToken
    }
  return refresh
}
export default useRefreshToken