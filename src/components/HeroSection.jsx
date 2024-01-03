import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/pexels-max-rahubovskiy-7018400.jpg")})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-[100%] h-[80vh] overflow-hidden  p-[2rem] md:p-[5.5rem] flex  items-start justify-between flex-col  "
    >
      <h1 className="text-white  font-[800] text-[70px] md:text-[105px] leading-none md:leading-[7vw] font-poppins   shadow-black drop-shadow-2xl">
        Live <br /> Audience
      </h1>

      <div className="flex md:flex-row flex-col md:gap-[40vw] gap:2 w-[100%]">
        <p className="text-white text-[22px] font-poppins">
          Munchies and Thoughts Podcast
        </p>
        <button className="  rounded-[1vw] bg-[#F6D95C] text-black w-[27vw] md:w-[10vw] font-poppins md
        :py-[0.8vw] py-[2vw]">
         BUY TICKET
        </button>
      </div>

      <div className="flex gap-[3vw] md:gap-[1vw] font-poppins ">
        <div className="bg-[#4378F5] text-white flex flex-col items-center w-[25vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className=" text-[25px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            130
          </h1>
          <p className="md:text-[20px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            days
          </p>
        </div>
        <div className="bg-[#4378F5] flex flex-col items-center text-white w-[25vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className="text-[25px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            23
          </h1>
          <p className="md:text-[20px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            hours
          </p>
        </div>
        <div className="bg-[#4378F5] text-white w-[25vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className="text-[25px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            30
          </h1>
          <p className="md:text-[20px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            minutes
          </p>
        </div>
      </div>

      <div className="space-x-[3vw] uppercase mt-[1.5vw]">
        <button className=" border-[1px] border-white rounded-[2vw] bg-transparent text-white md:w-[13vw] w-[40vw] py-[0.8vw]">
          VIEW VIDEO
        </button>
        <button className=" border-[1px] border-white rounded-[2vw] bg-transparent text-white md:w-[13vw] w-[40vw] py-[0.8vw] uppercase">
          View Ticket options
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
