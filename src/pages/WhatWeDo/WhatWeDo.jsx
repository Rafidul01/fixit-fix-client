const WhatWeDo = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl mt-16 mb-4 ">
          what we do ?
        </h1>

      <div className="relative">
        <img
          src="https://i.ibb.co/MBjxgvP/imgbin-laptop-macbook-pro-computer-repair-technician-png.png"
          alt=""
        />
        <div className="absolute top-[73px] left-[73px] lg:top-60 lg:left-60 md:top-44 md:left-44 ">
          <h1 className="text-[0.43rem] md:text-base lg:text-xl max-w-[150px] md:max-w-[350px] lg:max-w-[450px] font-bold">
            At <span className="text-[#74C138]">Fixit-</span>Fix, we specialize in providing expert repair services for
            a wide range of electronic devices. Our skilled technicians are
            equipped to handle repairs for smartphones, laptops, tablets,
            desktop computers, TVs, gaming consoles, cameras, audio equipment,
            and more. Whether you are dealing with a cracked screen, a
            malfunctioning device, or software issues, we have got you covered.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
