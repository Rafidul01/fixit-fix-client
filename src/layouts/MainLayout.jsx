import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;