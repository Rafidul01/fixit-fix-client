// import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const AllService = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/services?sort=${filter}&search=${search}`)
      .then((res) => {
        setServices(res.data);
        setIsPending(false);
      });
  }, [filter, axiosSecure, search]);

  // const { isPending, data: services } = useQuery({
  //   queryKey: ["services"],
  //   queryFn: async (filter) => {
  //     const res = await axiosSecure.get(`/services?sort=${filter}`);
  //     return res.data;
  //   },
  // });

  if (isPending) {
    return <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
      <Helmet>
        <title>All Services | Fixi-Fix</title>
      </Helmet>
    <ClimbingBoxLoader color="#74c138" />
</div>;
  }

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "Most Viewed") {
      setFilter("views");
    }
    if (value === "Most Booked") {
      setFilter("booked");
    }
  };
  const handleReset = () => {
    setFilter(null);
    setSearch("");
    
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const search = form.get("search");
    setSearch(search);
    console.log(search);
    
  };
  return (
    <div className="container mx-auto mt-20 mb-8">
      <Helmet>
        <title>All Services | Fixi-Fix</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-4">All Services</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-center items-center mb-8">
        {/* filter */}
        <div className="flex gap-4 justify-between items-center">
          <select
            className="select select-bordered"
            name="serviceArea"
            required
            defaultValue={filter ? filter : "Filter"}
            onChange={handleFilter}
          >
            <option disabled>Filter</option>
            <option>Most Booked</option>
          </select>

          {/* reset */}
        <div className="block md:hidden">
          <Link onClick={handleReset} className="btn ">
            Reset
          </Link>
        </div>
        </div>

        {/* search */}
        <div>
          <form action="" className="flex " onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              name="search"

              className="input input-bordered w-full max-w-xs rounded-r-none border-r-0"
            />
            <button className="btn rounded-l-none bg-[#74C138] text-white hover:text-[#74C138] hover:bg-transparent">
              Search
            </button>
          </form>
        </div>

        {/* reset */}
        <div className="hidden md:block">
          <Link onClick={handleReset} className="btn ">
            Reset
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {
        services?.length === 0 ? (
          <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
            <h1> No service found </h1>
      </div>
        ) :
        services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))
        
        }

      </div>
    </div>
  );
};

export default AllService;
