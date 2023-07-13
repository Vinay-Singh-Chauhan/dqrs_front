import { useEffect, useState } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useFetchApi = () => {
  const { fetch: originalFetch } = window;

  window.fetch = async (...args) => {
    let [resource, config] = args;
    // request interceptor starts
    // resource = 'https://jsonplaceholder.typicode.com/todos/2';
    // request interceptor ends
    let response = await originalFetch(resource, config);

    // response interceptor
    console.log(response)
    const json = () =>
      response
        .clone()
        .json()
        .then((data) => ({ ...data, title: `Intercepted: ${data.title}` }));

    response.json = json;
    console.log(response);
    return response;
  };
};

export default useFetchApi;
