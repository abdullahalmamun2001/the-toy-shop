import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "/register",
    element:<Register></Register>
  },
  {
    path: "/login",
    element:<Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);