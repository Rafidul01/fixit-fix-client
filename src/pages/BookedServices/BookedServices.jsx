import { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/images/AddServiceBack.jpg";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
const BookedServices = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [reatingCount, setRatingCount] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { isPending, data: services } = useQuery({
    queryKey: ["bookedServices"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/service/booked/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <div className='flex justify-center  items-center min-h-[calc(100vh-260.8px)]'>
        <Helmet>
        <title>Booked Service | Fixi-Fix</title>
      </Helmet>
    <ClimbingBoxLoader color="#74c138" />
</div>
  }
  if(services.length === 0){
    return <div className="text-center pt-60 font-bold text-xl min-h-[calc(100vh-260.8px)] ">You do not have any service booked!</div>    
  }


  const handleRating = (id, rating) => {

    
    
    // axiosSecure.get(`/services/${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setRatingCount(res.data?.ratingCount + 1);
    //     setRatingValue(res.data?.rating + rating);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
     
    // console.log(reatingCount, ratingValue);
    console.log(rating);
    const avRating = ratingValue/reatingCount;
    setRatingValue(0);
    setRatingCount(0);
    axiosSecure.patch(`/service/ratings/${id}?rating=${rating}&avRating=${avRating}`)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank You For Your Feedback',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <Helmet>
        <title>Booked Service | Fixi-Fix</title>
      </Helmet>
      <div className="font-roboto ">

        <div
          className="hero min-h-screen bg-base-200 "
          style={{
            backgroundImage: `linear-gradient(180deg, black, transparent), url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-[75px] md:mt-[80px] lg:mt-[80px] mb-10">
            <div className="card shrink-0 w-[300px] md:w-[700px] lg:w-[900px] h-full shadow-2xl backdrop-blur-sm bg-white/80 mx-auto">
              <div className="card-body">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="text-black">
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                       
                      </tr>
                    </thead>
                    {
                        services ?
                    services.map((service) => (
                      <>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <th>
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={service.img}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </th>
                            <td>
                              <div className="flex items-center gap-3">
                                <div>
                                  <div className="font-bold">{service.name}</div>
                                  <div className="text-sm opacity-50">
                                    {service.area}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                               {service.date }
                            </td>
                            {
                                service.status === "pending" && <td className="text-red-500" >{service.status}</td>
                            }
                            {
                                service.status === "working" && <td className="text-yellow-500" >{service.status}</td>
                            }
                            {
                                service.status === "completed" && <td className="text-green-500" >{service.status}</td>
                            }
                            
                            <td>
                            {
                                
                                service.status === "completed" && <Rating
                                onChange={(e) => handleRating(service.serviceId,e)}
                                placeholderRating={1}
                                emptySymbol={<FaStar className="text-black"></FaStar>}
                                placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
                                fullSymbol={<FaStar className="text-yellow-600"></FaStar>}
                          />
                            }
                            
                            </td>
                            
                          </tr>
                        </tbody>
                      </> 
                    
                    )) :
                    <h1>No Data</h1>
                    }
                    {/* foot */}
                    <tfoot>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                      
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedServices;
