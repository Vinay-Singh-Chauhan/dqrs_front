import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Qrform from "./components/qrform/qrform.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Account from "./components/useraccount/Account.jsx";
import About from "./pages/about/About.jsx";
import Pricing from "./pages/pricing/pricing.jsx";
import Signup from "./pages/signup/signup.jsx";
import Login from "./pages/login/Login.jsx";
import QRState from "../context/allqrstate";
import RequireAuth from './components/requireAuth/RequireAuth.jsx'
import { AuthProvider } from "./../context/authContext.jsx";
import PersistentLogin from "./components/persistentLogin/PersistentLogin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PersistentLogin/>,
    children:[
      {
        path:"/",
        element:<App/>,
        children: [
          {
            path:"/user",
            element:<PersistentLogin/>,
            children:[
              {
                path:"/user",
                element:<RequireAuth/>,
                children:[
                  {
                    path: "/user/account",
                    element: <Account />,
                  },
                  {
                    path: "/user/genqr",
                    element: <Qrform />,
                  },
                ]
                
              }
            ]
          },
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/pricing",
            element: <Pricing />,
          },
          {
            path: "/signin",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
          
        ],
      }
    ]
    
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QRState>
        <RouterProvider router={router} />
      </QRState>
    </AuthProvider>
  </React.StrictMode>
);
