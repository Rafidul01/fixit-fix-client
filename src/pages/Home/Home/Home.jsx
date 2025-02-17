import Banner from "../Banner/Banner";
import PopularService from "../PopularServices/PopularService";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ClimbingBoxLoader } from "react-spinners";
import FeedBack from "../FeedBack/FeedBack";
import WhatWeDo from "../../WhatWeDo/WhatWeDo";
import FAQs from "../FAQ/FAQs";
import { Helmet } from "react-helmet";

const Home = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data: popularServices = [] } = useQuery({
    queryKey: ["popularServices"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/services?sort=booked`);
      return res.data;
    },
  });
  if (isPending) {
    return (
      <div className="flex justify-center  items-center min-h-[calc(100vh-260.8px)]">
        <ClimbingBoxLoader color="#74c138" />
      </div>
    );
  }
  return (
    <div className="">
      <Helmet>
        <title>Home | Fixi-Fix</title>
      </Helmet>
      <Banner></Banner>
      <PopularService popularServices={popularServices}></PopularService>
      <FeedBack></FeedBack>
      <WhatWeDo></WhatWeDo>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
