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

import Layout from "./Components/Layout/Layout";
import AddToy from "./Components/AddToy/AddToy";
import MyToys from "./Components/MyToys/MyToys";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import UpdateToy from "./Components/Update/UpdateToy";
import AuthProvider from "./Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/toy')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'/updateToy/:id',
        element:<UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`http://localhost:5000/myToys/${params.id}`)
        // loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);