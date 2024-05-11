import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDashboardHover = () => {
    setIsDashboardOpen(true);
  };

  const handleDashboardLeave = () => {
    setIsDashboardOpen(false);
  };
  const Links = (
    <>
      <li className="hover:text-[#74C138] ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border bg-transparent border-[#74C138] text-[#74C138] font-bold "
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li onMouseEnter={handleDashboardHover}
         >
        <details  open={isDashboardOpen}  >
          <summary className="hover:text-[#74C138] ">Dashboard</summary>
          <ul className="p-2 w-40" onMouseLeave={handleDashboardLeave}>
            <li className="hover:text-[#74C138] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border bg-transparent border-[#74C138] text-[#74C138] font-bold "
                    : ""
                }
                to="/addService"
              >
                Add Service
              </NavLink>
            </li>
            <li className="hover:text-[#74C138] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border bg-transparent border-[#74C138] text-[#74C138] font-bold "
                    : ""
                }
                to="/manageService"
              >
                Manage Service
              </NavLink>
            </li>
            <li className="hover:text-[#74C138] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border bg-transparent border-[#74C138] text-[#74C138] font-bold "
                    : ""
                }
                to="/bookedServices"
              >
                Booked Services
              </NavLink>
            </li>
            <li className="hover:text-[#74C138] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border bg-transparent border-[#74C138] text-[#74C138] font-bold "
                    : ""
                }
                to="/serviceToDo"
              >
                Service To Do
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div
      className={`fixed top-0 navbar bg-base-100 ${
        scrolled ? "transition delay-100  bg-black bg-opacity-10 " : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-lg md:text-3xl text-start p-0 font-lato  font-normal"
        >
          <img src={logo} alt="" className="h-10" />
          <h1>
            <span className="text-[#74C138]">Fixit-</span>Fix
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end space-x-1">
        <Link to='/login' className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]">LogIn</Link>
        <Link to='/register' className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
