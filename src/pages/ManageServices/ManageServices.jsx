import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import ManageCard from "./ManageCard/ManageCard";

const ManageServices = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { isPending, data: services  } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/service/manage/${user?.email}`);
          return res.data;
        },
      });

    if(isPending){
        return <div>Loading...</div>
    }
  return (
    <div className="font-roboto grid grid-cols-1 gap-5 mt-20">
      {
        services ? services.map((service) => <ManageCard key={service._id} service={service} />) :
        <div>No service found</div>}
    </div>
  );
};

export default ManageServices;
