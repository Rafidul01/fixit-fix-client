import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(user);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");

    console.log(e.target.checked);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Loged out Successful!");
        axiosSecure.post("/logout", { user_email: user.email })
          .then()
      })
      .catch(() => {
        toast.success("Logout failed");
      });
  };

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
      <li onMouseEnter={handleDashboardHover}>
        <details open={isDashboardOpen}>
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
      className={`fixed top-0 right-0 left-0  bg-base-100 z-50 ${
        scrolled
          ? "transition delay-100  backdrop-blur-sm bg-white/5 border-b rounded-b-2xl border-opacity-30 border-[#74C138]"
          : "bg-transparent"
      }`}
    >
      <div className={"container mx-auto navbar"}>
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
              className="text-gray-500 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
              {user ? (
            <>
              <Link
                onClick={handleLogOut}
                className="btn  bg-[#74C138] text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem] "
              >
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn  bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
              >
                LogIn
              </Link>
              <Link
                to="/register"
                className="btn  bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
              >
                Register
              </Link>
            </>
          )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-lg md:text-3xl text-start p-0 font-lato  font-normal"
          >
            <img src={logo} alt="" className="h-10" />
            <h1 className="text-gray-500">
              <span className="text-[#74C138]">Fixit-</span>Fix
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" text-gray-500 font-bold menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end space-x-1">
          {user ? (
            <>
              <div
                className="avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-6 md:w-8 mr-2 md:mr-4 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2 ">
                  <img src={user.photoURL} />
                </div>
              </div>
              <Link
                onClick={handleLogOut}
                className="btn  bg-[#74C138] text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem] hidden md:flex"
              >
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
              >
                LogIn
              </Link>
              <Link
                to="/register"
                className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
              >
                Register
              </Link>
            </>
          )}

<label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
            className="theme-controller "
            
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8 md:w-10 md:h-10 text-[#74C138]  "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-8 h-8 md:w-10 md:h-10  text-[#74C138] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

          {/* <Link
            to="/login"
            className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
          >
            LogIn
          </Link>
          <Link
            to="/register"
            className="btn hidden md:flex bg-[#74C138]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
          >
            Register
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
