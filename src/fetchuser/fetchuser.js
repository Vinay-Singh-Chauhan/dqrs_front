const fetchUser=async()=>{
    const api='http://127.0.0.1:5000/api/auth/'
        const token=localStorage.getItem('token')
        if(!token){
          const response={success:false}
            return response;
        }
           let response = await fetch(api, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json",
                "authorization":token
              },
              redirect: "follow", 
              referrerPolicy: "no-referrer",
            });
          response=await response.json()
          // console.log(response)
          // console.log(response.token)
          return response
      }
export default fetchUser