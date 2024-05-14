import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/images/AddServiceBack.jpg";
import ToDo from "./ToDo";

const ServiceToDo = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { isPending, data: services } = useQuery({
    queryKey: ["bookedServices"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/service/toDo/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if(services.length === 0){
    return <div className="text-center pt-60 font-bold text-xl min-h-[calc(100vh-260.8px)]">You do not have any service to do!</div>    
  }

  return (
    <div>
      <div className="font-roboto ">

        <div
          className="hero min-h-screen bg-base-200 "
          style={{
            backgroundImage: `linear-gradient(180deg, black, transparent), url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-[75px] md:mt-[80px] lg:mt-[80px] mb-10">
            <div className="card shrink-0 w-[300px] md:w-[700px] lg:w-[900px] h-full shadow-2xl backdrop-blur-sm bg-white/80 mx-auto">
              <div className="card-body">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="text-black">
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    {services ? (
                      services.map((service) => (
                        <ToDo key={service._id} service={service}  />
                      ))
                    ) : (
                      <div>No service found</div>
                    )}
                    {/* foot */}
                    <tfoot>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceToDo;
