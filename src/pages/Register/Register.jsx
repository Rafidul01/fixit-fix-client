import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [eye, setEye] = useState(false);
  const handelSeePass = () => {
    setEye(!eye);
  };
  return (
    <div className="hero min-h-screen font-poppins mt-[68px] z-10">
      <div className="flex flex-col md:flex-row-reverse  border-2 md:rounded-2xl border-[#74c138] w-full ">
        <div className="text-center lg:text-left w-full md:w-[1/2] min-h-64  bg-[url('https://i.ibb.co/wQc3BmY/undraw-Access-account-re-8spm-2.png')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 ">
          <div className="backdrop-blur-sm bg-white/5 w-full h-64 md:h-full  ">
            <div className="text-center md:h-full h-64 flex justify-center items-center flex-col ">
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                Register now!
              </h1>
              <div className="py-6  text-black opacity-80  space-y-4">
                <p>Your journey to exceptional real estate experiences starts here!</p>
              </div>
            </div>
          </div>
        </div>
        {/* onSubmit={handleRegister} */}
        <div
          className="card shrink-0 w-full md:w-1/2    bg-base-100 rounded-l-none rounded-r-none rounded-2xl md:rounded-l-2xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
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
            <p>
              <span className="font-bold">Note : </span>
              <small className="text-black opacity-80">
                Your password must be at least{" "}
                <span className="text-[#74C138]">6 characters</span> and
                includes{" "}
                <span className="text-[#74C138]">
                  an Uppercase and a Lowercase
                </span>{" "}
                character.
              </small>
            </p>
            <div className="form-control mt-6">
              <button className="btn bg-[#74C138]  text-white">Register</button>
            </div>

            <p className="text-center font-roboto text-lg">
              Already Registered to Sweet Stay? Please{" "}
              <Link
                to="/login"
                className="font-bold text-[#74C138] hover:text-[#405c2b]"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
