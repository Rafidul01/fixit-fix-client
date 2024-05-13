import { useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/images/AddServiceBack.jpg";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data: service } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });
  if (isPending) {
    return <div>Loading...</div>;
  }
  const {
    _id,
    name,
    price,
    img,
    userEmail,
    userName,
  } = service;
  console.log(service);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const date = form.get("date");
    const deviceDescription = form.get("deviceDescription");
    const bookedService = {
      serviceId: _id,
      date,
      deviceDescription,
      img,
      name,
      price,
      providerEmail: userEmail,
      providerName: userName,
      purchaseName : user?.displayName,
      purchaseEmail : user?.email,
      purchaseImage : user?.photoURL,
      status: "pending",
    };  
    console.log(bookedService);
    axiosSecure.post("/booked", bookedService)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Booked Successfully!", 
            icon: "success",
            confirmButtonText: "OK",
          });
        //   e.target.reset();
        }
      });
  };    
  
  return (  
    <div className="font-roboto ">
      <div
        className="hero min-h-screen bg-base-200 "
        style={{
          backgroundImage: `linear-gradient(180deg, black, transparent), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[75px] md:mt-[80px] lg:mt-[80px">
          <div className="card shrink-0 w-[300px] md:w-[700px] lg:w-[900px] h-full shadow-2xl backdrop-blur-sm bg-white/20 mx-auto">
            <form
              className="card-body"
              onSubmit={handleSubmit}
            >
              <div className=" ">
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl w-full h-40 md:h-64 lg:h-96"
                />
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300 ">
                     Service ID
                    </span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                    className="input input-bordered "
                    defaultValue={id}
                    disabled
                  />
                </div>
              </div>
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
                    placeholder="Service Name"
                    className="input input-bordered "
                    defaultValue={name}
                    disabled
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
                    disabled
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
                    defaultValue={userName}
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
                    name="providerEmail"
                    placeholder="Provider Email"
                    className="input input-bordered"
                    defaultValue={userEmail}
                    disabled
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="purchaseName"
                    placeholder="Provider Name"
                    className="input input-bordered "
                    defaultValue={user.displayName}
                    disabled
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="purchaseEmail"
                    placeholder="Provider Email"
                    className="input input-bordered"
                    defaultValue={user.email}
                    disabled
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Provider Name"
                    className="input input-bordered "
                    defaultValue={price}
                    disabled
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Provider Email"
                    className="input input-bordered"
                    required
                    
                  />
                </div>
              </div>
              {/* row 4 */}
              <div className="flex justify-between gap-2 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-300">
                      Broken Device Description
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="description"
                    name="deviceDescription"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn border border-[#74C138] bg-black bg-opacity-60 hover:bg-[#74C138]  hover:text-white text-[#74C138]">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Booking;
