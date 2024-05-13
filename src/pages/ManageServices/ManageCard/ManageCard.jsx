import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const ManageCard = ({ service,services, setServices }) => {
    const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    price,
    description,
    img,
    area,
    userEmail,
    userName,
    userImage,
    views,
    booked,
  } = service;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/service/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
                setServices(services.filter((x) => service._id !== x._id));
              Swal.fire({
                title: "Deleted!",
                text: "Your Service has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl font-poppins relative">
      <figure className="lg:w-1/3">
        <img src={img} alt="Album" className="h-full w-full" />
      </figure>
      <div className="notice w-16 h-6 rounded-r-3xl absolute top-5 left-0 bg-[#74C138] flex items-center justify-center gap-1 text-white">
        <FiShoppingCart /> {booked}
      </div>
      <div className="notice w-16 h-6 rounded-r-3xl absolute top-12 left-0 bg-[#3891c1] flex items-center justify-center gap-1 text-white">
        <FaEye /> {views}
      </div>
      <div className="card-body lg:w-2/3">
        <h2 className="font-bold text-xl text-center">{name}</h2>
        <p className="text-center text-xs md:text-sm opacity-80 ">
          {description}
        </p>
        <hr className="border-[#74C138]" />
        <h1 className="text-base">
          {" "}
          <span className="font-bold ">
            <CiLocationOn className="inline h-6 w-5 text-[#3891c1]" />
            Service Area :
          </span>{" "}
          {area}{" "}
        </h1>
        <h1 className="text-base">
          {" "}
          <span className="font-bold">
            <TbCoinTaka className="inline h-6 w-5 text-[#3891c1]" />
            Service Price :
          </span>{" "}
          {price}{" "}
        </h1>
        <hr className="border-[#74C138]" />
        <h1 className="text-center font-bold text-xl">Service Provider</h1>
        <div className="flex items-center gap-3 flex-col md:flex-row mt-4  ">
          <div className="avatar">
            <div className=" w-24 rounded-3xl ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
              <img src={userImage} />
            </div>
          </div>
          <div>
            <h1 className="text-base">
              <span className="font-bold ">
                <CgProfile className="inline h-6 w-5 text-[#3891c1]" /> Provider
                :
              </span>{" "}
              {userName}
            </h1>
            <p className="">
              {" "}
              <span className="font-bold ">
                <MdEmail className="inline h-6 w-5 text-[#3891c1]" /> Email:
              </span>{" "}
              {userEmail}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2 gap-1">
          <Link
            
            className="btn w-1/2  bg-transparent border-[#74C138] text-[#74C138] hover:text-white hover:bg-[#74C138]"
          >
            Edit
          </Link>
          <Link
            onClick={() => handleDelete(_id)}
            className="btn w-1/2 bg-transparent border-[#74C138] text-[#74C138] hover:text-white hover:bg-[#74C138]"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

ManageCard.propTypes = {
  service: PropTypes.object,
  setServices: PropTypes.func,
  services: PropTypes.array,
};
export default ManageCard;
