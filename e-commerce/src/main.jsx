import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./scenes/login";
import SignUp from "./scenes/Signup";
import Forgot from "./scenes/forgot";
import Man from "./scenes/Man";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
