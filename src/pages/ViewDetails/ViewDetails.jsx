import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const ViewDetails = () => {
  const [views, setViews] = useState(0);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: service } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      setViews(parseInt(res.data.views) + 1);
      return res.data;
    },
  });
  useEffect(() => {
    axiosSecure
      .patch(`/service/${id}?views=${views}`)
      .then((res) => console.log(res.data));
  }, [views, id, axiosSecure]);
  if (isPending) {
    return <div>Loading...</div>;
  }

  console.log(service);
  const {
    userImage,
    name,
    area,
    price,
    description,
    img,
    userEmail,
    userName,
  } = service;

  return (
    <div className="mt-20 font-roboto">
      <div className="">
        <h1 className="text-3xl text-center mb-8">
          Welcome to {service?.name} Service
        </h1>
      </div>

      {/* <h1 className="text-3xl text-center mb-4">Provider Info</h1> */}

      {/* <div className="flex flex-col justify-center items-center gap-10 hidden ">
        <div className="avatar">
          <div className="w-60 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
            <img src={userImage} />
          </div>
        </div>
        <div>
          <h1 className="text-base">
            <span className="font-bold ">
              <CgProfile className="inline h-6 w-5 text-[#3891c1]" /> Provider :
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
      </div> */}

      <div className="container mx-auto ">
        <div className=" h-[300px] md:h-[400px] lg:h-[550px]">
          <img
            src={img}
            alt=""
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] rounded-2xl border-2 border-[#74C138]"
          />
        </div>

        <div className="border rounded-2xl border-[#74C138] mt-8">
          <div className="card-body ">
            <h2 className="font-bold text-2xl text-center">{name}</h2>
            <p className="text-center text-xs md:text-sm opacity-80 mb-4">
              {description}
            </p>
            <hr className="border-[#74C138]" />
            <h1 className="text-base text-center mt-2">
              {" "}
              <span className="font-bold ">
                <CiLocationOn className="inline h-6 w-5 text-[#3891c1]" />
                Service Area :
              </span>{" "}
              {area}{" "}
            </h1>
            <h1 className="text-base text-center mb-2">
              {" "}
              <span className="font-bold">
                <TbCoinTaka className="inline h-6 w-5 text-[#3891c1]" />
                Service Price :
              </span>{" "}
              {price}{" "}
            </h1>
            <hr className="border-[#74C138]" />
            <h1 className="text-center font-bold text-xl">Service Provider</h1>
            <div className="flex flex-col justify-center items-center gap-10  ">
        <div className="avatar">
          <div className="w-60 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2 mt-8">
            <img src={userImage} />
          </div>
        </div>
        <div>
          <h1 className="text-base">
            <span className="font-bold ">
              <CgProfile className="inline h-6 w-5 text-[#3891c1]" /> Provider :
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
            <div className="card-actions justify-end mt-2">
              <Link
                // to={`/service/${_id}`}
                className="btn w-full bg-transparent border-[#74C138] text-[#74C138] hover:text-white hover:bg-[#74C138]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
