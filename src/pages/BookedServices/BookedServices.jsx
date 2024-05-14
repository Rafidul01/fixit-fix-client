import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/images/AddServiceBack.jpg";
const BookedServices = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { isPending, data: services } = useQuery({
    queryKey: ["bookedServices"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/service/booked/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if(services.length === 0){
    return <div className="text-center pt-60 font-bold text-xl min-h-[calc(100vh-260.8px)] ">You do not have any service booked!</div>    
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
                    {
                        services ?
                    services.map((service) => (
                      <>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <th>
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={service.img}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </th>
                            <td>
                              <div className="flex items-center gap-3">
                                <div>
                                  <div className="font-bold">{service.name}</div>
                                  <div className="text-sm opacity-50">
                                    United States
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                               {service.date }
                            </td>
                            {
                                service.status === "pending" && <td className="text-red-500" >{service.status}</td>
                            }
                            {
                                service.status === "working" && <td className="text-yellow-500" >{service.status}</td>
                            }
                            {
                                service.status === "completed" && <td className="text-green-500" >{service.status}</td>
                            }
                            
                            
                          </tr>
                        </tbody>
                      </> 
                    
                    )) :
                    <h1>No Data</h1>
                    }
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

export default BookedServices;
