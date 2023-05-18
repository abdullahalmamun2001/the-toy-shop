import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";


import AuthProvider from "./Provider/AuthProvider";
import Navber from "./Components/Navber/Navber";
import Layout from "./Components/Layout/Layout";
import App from "./App";

// import Layout from "./Components/Layout/Layout";
// import Navber from "./Components/Navber/Navber";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);