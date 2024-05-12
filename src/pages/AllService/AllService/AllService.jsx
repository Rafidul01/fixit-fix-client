import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    <div className="container mx-auto">
      <div>
        <h1>{services ? services.length : 0}</h1> 
      </div>
    </div>
  );
};

export default AllService;
