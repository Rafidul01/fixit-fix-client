import PropTypes from "prop-types";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
const PopularService = ({ popularServices }) => {
  console.log(popularServices);

  return (
    <div>
      <dir>
        <h1 className="text-center font-bold text-2xl mt-16 ">
          Popular Service
        </h1>
        <p className="text-center opacity-80 mt-2 mb-16">
          We provide best services for you! , Here is our most popular services
          based on there bookings!
        </p>
      </dir>

      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {popularServices.slice(0, 6).map((service) => (
            <PopularCard key={service._id} service={service} />
          ))}
        </div>
        <Link to="/allServices" className="btn w-full bg-transparent mt-8 border-[#74C138] hover:text-white text-[#74C138] hover:bg-[#74C138]"> View All </Link>
      </div>
    </div>
  );
};

PopularService.propTypes = {
  popularServices: PropTypes.array,
};
export default PopularService;
