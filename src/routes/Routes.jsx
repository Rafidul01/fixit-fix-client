import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import AllService from "../pages/AllService/AllService/AllService";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";
import ManageServices from "../pages/ManageServices/ManageServices";

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
        },
        {
          path:"/allServices",
          element: <AllService/>
        },
        {
          path:"/service/:id",
          element: <ViewDetails/>
        },
        {
          path:"/service/booking/:id",
          element: <PrivateRoute><Booking/></PrivateRoute>
        },
        {
          path:"/manageService",
          element: <PrivateRoute><ManageServices/></PrivateRoute>
        }
    ]
  },
]);

export default router;