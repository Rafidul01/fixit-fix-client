import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import ManageCard from "./ManageCard/ManageCard";

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
        return <div>Loading...</div>
    }
  return (
    <div className="font-roboto grid grid-cols-1 gap-5 mt-20">
      {
        services ? services.map((service) => <ManageCard key={service._id} service={service} services={services} setServices={setServices}/>) :
        <div>No service found</div>}
    </div>
  );
};

export default ManageServices;
