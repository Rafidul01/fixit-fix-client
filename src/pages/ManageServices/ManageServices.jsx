import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import ManageCard from "./ManageCard/ManageCard";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const ManageServices = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [services, setServices] = useState([]);

    const { isPending} = useQuery({
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

    if(services.length === 0){
        return <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
        You din not add any service yet!
    </div>
    }
  return (
    <div className="font-roboto grid grid-cols-1 gap-5 mt-20 mb-8">
        <Helmet>
        <title>Register | Fixi-Fix</title>
      </Helmet>
        <h1 className="text-3xl font-bold text-center mx-4
        ">Manage Your Services</h1>
      {
        services ? services.map((service) => <ManageCard key={service._id} service={service} services={services} setServices={setServices}/>) :
        <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
            You din not add any service yet!
        </div>}
    </div>
  );
};

export default ManageServices;
