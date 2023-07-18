import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Qrform from "./components/qrform/Qrform.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Account from "./components/useraccount/Account.jsx";
import About from "./pages/about/About.jsx";
import Pricing from "./pages/pricing/pricing.jsx";
import Signup from "./pages/signup/signup.jsx";
import Login from "./pages/login/Login.jsx";
import QRState from "../context/allqrstate";
import RequireAuth from "./components/requireAuth/RequireAuth.jsx";
import { AuthProvider } from "./../context/authContext.jsx";
import PersistentLogin from "./components/persistentLogin/PersistentLogin.jsx";
import ErrorComponent from "./components/errorComponent/ErrorComponent.jsx";
import UpdatePassword from "./components/updatePassword/UpdatePassword.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import EraseData from "./components/EraseData/EraseData.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Terms from "./components/Terms/Terms.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PersistentLogin />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/privacy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/terms",
            element: <Terms />,
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
          {
            path: "/forgotpass",
            element: <ForgotPassword />,
          },
          {
            path:"/reset/:email/:token",
            element:<UpdatePassword/>
          },
          {
            path: "/user",
            element: <RequireAuth />,

            children: [
              {
                path: "/user",
                element: <Account />,
              },
              {
                path: "/user/account",
                element: <Account />,
              },
              {
                path: "/user/genqr",
                element: <Qrform />,
              },
              {
                path: "/user/erase",
                element: <EraseData />,
              },
            ],
          },
          
        ],
      },
    ],
    errorElement:<ErrorComponent/>
  },
  {
    path:"*",
    element:<ErrorComponent/>
  }
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
