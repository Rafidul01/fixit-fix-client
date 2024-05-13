import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const AllService = () => {
  const { isPending, data: services } = useQuery({
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
      <h1 className="text-4xl font-bold text-center mb-4">All Services</h1>
      <div  className="flex gap-4 justify-center items-center mb-8" >
        {/* filter */}
        <div>
          <select
            className="select select-bordered"
            name="serviceArea"
            required
            defaultValue="Filter"
          >
            <option disabled>Filter</option>
            <option>Most Booked</option>
            <option>Most Viewed</option>
          </select>
        </div>

        {/* search */}
        <div >
          <form action="" className="flex ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs rounded-r-none border-r-0"
            />
            <button className="btn rounded-l-none bg-[#74C138] text-white hover:text-[#74C138] hover:bg-transparent">Search</button>
          </form>
        </div>

        {/* reset */}
        <div>
          <Link className="btn ">Reset</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllService;
