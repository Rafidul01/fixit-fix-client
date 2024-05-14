import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
