import bgImg from "../../../assets/images/AddServiceBack.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import { DiBackbone } from "react-icons/di";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const EditService = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { isPending, data: service } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center  items-center min-h-[calc(100vh-260.8px)]">
        <Helmet>
          <title> Edit Service | Fixi-Fix</title>
        </Helmet>
        <ClimbingBoxLoader color="#74c138" />
      </div>
    );
  }
  const { _id, name, price, description, img, area } = service;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("serviceName");
    const price = form.get("servicePrice");
    const area = form.get("serviceArea");
    const description = form.get("serviceDescription");
    const img = form.get("sImageURL");
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userImage = user?.photoURL;
    const service = {
      name,
      price,
      description,
      img,
      area,
      userEmail,
      userName,
      userImage,
    };
    console.log(service);
    axiosSecure.put(`/service/${_id}`, service).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "UpdatedSuccessfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div className="font-roboto ">
      <Helmet>
        <title>Edit Service {user?.displayName} | Fixi-Fix</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200 "
        style={{
          backgroundImage: `linear-gradient(180deg, black, transparent), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[75px] md:mt-[80px] lg:mt-[80px] mb-8">
          <div className="card shrink-0 w-[300px] md:w-[700px] lg:w-[900px] h-full shadow-2xl backdrop-blur-sm bg-white/20 mx-auto">
            <form className="card-body" onSubmit={handleSubmit}>
              {/* row 1 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Service Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    placeholder={name}
                    className="input input-bordered "
                    defaultValue={name}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Service Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sImageURL"
                    placeholder={img}
                    className="input input-bordered"
                    defaultValue={img}
                  />
                </div>
              </div>
              {/* row 2 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Service Area
                    </span>
                  </label>
                  <select
                    className="select select-bordered"
                    name="serviceArea"
                    defaultValue={area}
                  >
                    <option disabled>{area}</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                    <option>Sylhet</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Service Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="servicePrice"
                    placeholder={price}
                    className="input input-bordered"
                    defaultValue={price}
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Provider Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="providerName"
                    placeholder="Provider Name"
                    className="input input-bordered "
                    defaultValue={user?.displayName || ""}
                    disabled
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Provider Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="Provider Email"
                    placeholder="Provider Email"
                    className="input input-bordered"
                    defaultValue={user?.email || ""}
                    disabled
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Service Description
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder={description}
                    name="serviceDescription"
                    defaultValue={description}
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn border border-[#74C138] bg-black bg-opacity-60 hover:bg-[#74C138]  hover:text-white text-[#74C138]">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
