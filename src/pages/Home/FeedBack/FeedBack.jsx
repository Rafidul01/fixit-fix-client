import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
const FeedBack = () => {
 
  return (
    <div className="z-0 container mx-auto border border-[#74C138] rounded-2xl mt-16 font-poppins">
        <div>
        <h1 className="text-center font-bold text-2xl  mt-8 ">
          Feedbacks 
        </h1>
        <p className="text-center opacity-80 mt-2 mb-16 mx-auto max-w-96">
        Discover what our customers have to say about their experiences with Fixit-Fix. Read real testimonials from satisfied clients who have entrusted us with their tech repair needs. 
        </p>
        </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#74C138",
          "--swiper-pagination-color": "#74C138",
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex  flex-col md:flex-row justify-center items-center">
            <div className="bg-gradient-to-b   p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/R2JKfqx/foto-sushi-6anudmp-ILw4-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">John Doe</h1>
                    <p className="text-sm text-center " > &quot; I have used Fixit-fix multiple times for various electronics repairs, and they always exceed my expectations. Professional service, fair prices, and they stand behind their work. Highly recommended!`&quot;  </p>
                  </div>
              </div>
              
            </div>
            <div className="bg-gradient-to-b   p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/HXjW76z/luis-villasmil-Z4rqv-Rp-Rj38-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">Kevin H.</h1>
                    <p className="text-sm text-center " > &quot; I have used FixiLab for both personal and business electronics repairs, and they have consistently delivered excellent results. Their professionalism and expertise make them my first choice for tech repairs.&quot;  </p>
                  </div>
              </div>
              
            </div>
            <div className="bg-gradient-to-b   p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/M1hfnFd/sarah-brown-t-Td-C88-6a-I-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">Jennifer K</h1>
                    <p className="text-sm text-center " > &quot;I had a positive experience with FixiLab from start to finish. Their website was easy to navigate, scheduling a repair was simple, and the repair itself was completed quickly. I highly recommend them to anyone in need of tech repairs. &quot;  </p>
                  </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex flex-col md:flex-row bg-center justify-center items-center">
            <div className="bg-gradient-to-b   p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/m61rcFd/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">Aman T.</h1>
                    <p className="text-sm text-center " > &quot; I recently had my camera repaired by Fixit-Fix, and I am impressed with the quality of their work. They communicated well throughout the process and returned my camera in excellent condition. Thank you!&quot;  </p>
                  </div>
              </div>
              
            </div>
            <div className="  p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/qnxrTGy/leio-mclaren-L2d-Tmh-Qzx4-Q-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">David T.</h1>
                    <p className="text-sm text-center " > &quot; I am so grateful for Fixit-Fix&apos;s service. They saved me from having to buy a new laptop by repairing mine at a fraction of the cost. Friendly staff, great communication, and they truly care about their customers. &quot;  </p>
                  </div>
              </div>
              
            </div>
            <div className="bg-gradient-to-b   p-4   my-10    w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-[#74C138] ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/pZQT9Pf/ben-den-engelsen-YUu9-UAc-OKZ4-unsplash.jpg" />
                  </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">Mark D.</h1>
                    <p className="text-sm text-center " > &quot;I have used Fixit-Lab for both personal and business electronics repairs, and they have consistently delivered excellent results. Their professionalism and expertise make them my first choice for tech repairs&quot;  </p>
                  </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default FeedBack;
