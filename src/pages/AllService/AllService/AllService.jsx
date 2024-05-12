import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllService = () => {
  const { isPending , data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/services");
      return res.data; 
    },
  });

  if (isPending) { 
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 gap-4"> 
        {
          services?.map((service) => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default AllService;
