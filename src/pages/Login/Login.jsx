import { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
        toast.success("Login Successful!")
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
        toast.error("login failed..")
      });
    // console.log(name,email,photo,password);
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : '/');
      })
      .catch(()=>{
        toast.error("login failed..")

      });
  };
  const handelSeePass = () => {
    setEye(!eye);
  };
  return (
    <div className="hero min-h-screen font-poppins mt-[68px] z-10">
      <div className="flex flex-col md:flex-row-reverse border-2 md:rounded-2xl border-[#74C138]  ">
        <div className="text-center lg:text-left w-full md:w-[1/2] min-h-64  bg-[url('https://i.ibb.co/wQc3BmY/undraw-Access-account-re-8spm-2.png')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 ">
          <div className="backdrop-blur-sm bg-white/5 w-full h-64 md:h-full  ">
            <div className="text-center md:h-full h-64 flex justify-center items-center flex-col ">
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                LogIn Here!
              </h1>
              <div className="py-6  text-black opacity-80  space-y-4">
                <p>Back With A New Broken Device To Repair !?</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card shrink-0 w-full md:w-1/2 bg-base-100 rounded-l-none rounded-r-none rounded-2xl md:rounded-l-2xl"
        >
          <div className="card-body">
            <form
            onSubmit={handleLogin}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <Link
                  onClick={handelSeePass}
                  className="text-2xl absolute right-3 top-[48px]"
                >
                  {eye ? <FaRegEye /> : <FaRegEyeSlash />}
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#74C138] text-white">Login</button>
              </div>
            </form>
            <div>
              <div>
                <div className="mt-6 text-center ">
                  <div className="mb-4 flex gap-3 justify-center items-center">
                    <hr className=" w-14 md:w-20 lg:w-40" />
                    <h1 className="font-bold">Login With</h1>
                    <hr className=" w-14 md:w-20 lg:w-40" />
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={handleGoogleLogIn}
                      className="btn bg-[#74C138] hover:bg-[#416228] text-white"
                    >
                      <FaGoogle />
                      Google
                    </button>
                    <button
                      //   onClick={handleGithubLogin}
                      className="btn bg-[#74C138] hover:bg-[#416228] text-white"
                    >
                      <FaGithub></FaGithub> Github
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-center font-roboto text-lg">
                  New to Sweet Stay? Please{" "}
                  <Link
                    to="/register"
                    className="font-bold text-[#74C138] hover:text-[#416228]"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
