import { useContext } from "react";
import bgImg from "../../assets/images/AddServiceBack.jpg";
import { AuthContext } from "../../provider/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddService = () => {
    const {user} = useContext(AuthContext);
    // const axiosSecure = useAxiosSecure();
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
    const views = "0";
    const booked = 0;
    const service = { name, price, description, img, area, userEmail, userName, userImage, views, booked };
    axios.post("https://fixit-fix-server.vercel.app/service", service)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'Service Added Successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        e.target.reset();
      }
    });
  };
  return (
    <div className="font-roboto ">
      <Helmet>
        <title>Add Service | Fixi-Fix</title>
      </Helmet>
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
                    placeholder="Service Name"
                    className="input input-bordered "
                    required
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
                    placeholder="Service Image URL"
                    className="input input-bordered"
                    required
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
                    required
                    defaultValue="Select Service Area"
                  >
                    <option disabled>Select Service Area</option>
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
                    placeholder="Service Price"
                    className="input input-bordered"
                    required
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
                    placeholder="description"
                    name="serviceDescription"
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

export default AddService;
