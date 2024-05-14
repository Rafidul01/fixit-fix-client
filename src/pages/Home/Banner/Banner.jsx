import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
  const bannerText = (
    <div>
      <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto ">
            <span className="text-[#74C138] text-3xl md:text-5xl">Fixit-</span><span className="text-3xl md:text-5xl">Fix</span> <br />
            <span className="md:text-3xl">We Repair <Typewriter
            words={['Smartphone !', 'Laptop !', 'Camera !', 'Tablet !', 'TV !', 'Everything You Break !']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span>
      </h1>
      
    </div>
  );

//   
// 
// 
// 
// 
  return (
    <div className="z-0">
      <Swiper
        style={{
          "--swiper-navigation-color": "#74C138",
          "--swiper-pagination-color": "#74C138",
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/CBqFHp0/amin-hasani-k-Sacao6-ETQw-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center   bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-b  from-gray-900 p-4   w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/CnTK5Xk/blaz-erzetic-g5f0-BJq-FRs-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-b from-gray-900 p-4   w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/nbVfsvG/jeshoots-com-s-MKUYIasy-DM-unsplash-1.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-b from-gray-900 p-4   w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/8xvbps1/thisisengineering-Ip-TPp-a-Pb-YE-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-b from-gray-900 p-4   w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/7gPxjYN/thisisengineering-32-Ppag-Sze-Gs-unsplash-1.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-b from-gray-900 p-4   w-full h-full flex justify-center items-center">
                {bannerText}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;