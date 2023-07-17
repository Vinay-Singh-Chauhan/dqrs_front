const api=import.meta.env.VITE_API+'/refresh'
const useRefreshToken = () => {
    // const {setAuth}=useAuth();
    const refresh=async(setAuth)=>{
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
          response=await response.json()

          setAuth(prev=>{
            // console.log(JSON.stringify(prev))
            return {...prev,accessToken:response.accessToken}
          })
        return response.accessToken
    }
  return refresh
}
export default useRefreshToken