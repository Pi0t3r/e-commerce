import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./scenes/login";
import SignUp from "./scenes/Signup";
import Forgot from "./scenes/forgot";
import Man from "./scenes/Man";
import Woman from "./scenes/Woman";
import Settings from "./scenes/Settings";
import Account from "./scenes/Account"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/Man",
    element: <Man />,
  },
  {
    path: "/Woman",
    element: <Woman />,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
