import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import ManageCard from "./ManageCard/ManageCard";
import { ClimbingBoxLoader } from "react-spinners";

const ManageServices = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [services, setServices] = useState([]);

    const { isPending,  } = useQuery({
        queryKey: ['manageservices'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/service/manage/${user?.email}`);
          setServices(res.data);
          return res.data;
        },
      });

    if(isPending){
        return <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
        <ClimbingBoxLoader color="#74c138" />
    </div>
    }
  return (
    <div className="font-roboto grid grid-cols-1 gap-5 mt-20">
        <h1 className="text-3xl font-bold text-center mx-4
        ">Manage Your Services</h1>
      {
        services ? services.map((service) => <ManageCard key={service._id} service={service} services={services} setServices={setServices}/>) :
        <div>No service found</div>}
    </div>
  );
};

export default ManageServices;
