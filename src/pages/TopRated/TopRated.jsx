import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RatingCard from "./RatingCard";
import { Helmet } from "react-helmet";
import { ClimbingBoxLoader } from "react-spinners";

const TopRated = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending, data: services = [] } = useQuery({
    queryKey: ["topRated"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services?sort=rating`);
      return res.data;
    },
  });

  if (isPending) {
    return <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
        <Helmet>
        <title>Top Rated | Fixi-Fix</title>
      </Helmet>
    <ClimbingBoxLoader color="#74c138" />
</div>
  }

  console.log(services);
  return (
    <div className="min-h-[calc(100vh-260.8px)] ">
      <div className="container mx-auto mb-16">
        <h1 className="text-center font-bold text-2xl mt-20 mb-16">
          Top Rated Services
        </h1>
        <div className="grid grid-cols-1  gap-5">
          {services.map((service, index) => (
            <RatingCard key={index} service={service} />
          ))}
        </div>
        {/* <h1>{services[1].rating}</h1> */}
      </div>
    </div>
  );
};

export default TopRated;
