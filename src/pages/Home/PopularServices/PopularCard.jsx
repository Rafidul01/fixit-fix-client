import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const PopularCard = ({service}) => {
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
    return (
<div className="card  bg-base-100 shadow-xl font-poppins relative border border-[#74C138]">
      <figure className="">
        <img src={img} alt="Album" className=" h-[200px] md:h-[300px] lg:h-[400px] w-full" />
      </figure>
      <div className="notice w-16 h-6 rounded-r-3xl absolute top-5 left-0 bg-[#74C138] flex items-center justify-center gap-1 text-white">
        <FiShoppingCart /> {booked}
      </div>
      <div className="notice w-16 h-6 rounded-r-3xl absolute top-12 left-0 bg-[#3891c1] flex items-center justify-center gap-1 text-white">
        <FaEye /> {views}
      </div>
      <div className="card-body ">
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
            <h1 className="text-base"><span className="font-bold ">
            <CgProfile className="inline h-6 w-5 text-[#3891c1]" />
            {" "}Provider :
          </span> {userName}</h1>
            <p className=""> <span className="font-bold ">
            <MdEmail className="inline h-6 w-5 text-[#3891c1]" />
            {" "}Email:
          </span>{" "}{userEmail}</p>
          </div>
        </div>
        <div className="card-actions justify-end mt-2">
          <Link to={`/service/${_id}`} className="btn w-full bg-transparent border-[#74C138] text-[#74C138] hover:text-white hover:bg-[#74C138]">View Detail</Link>
        </div>
      </div>
    </div>
    );
};

PopularCard.propTypes = {
  service: PropTypes.object,
};

export default PopularCard;