import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path:"/",
            element: <Home />
        },
        {
          path:"/register",
          element: <Register />
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/addService",
          element: <AddService />
        }
    ]
  },
]);

export default router;