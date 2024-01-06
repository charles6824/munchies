import {useState, useEffect} from "react";

const HeroSection = () => {


  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date("2024-01-23T00:00:00") - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${require("../assets/hero-bg.jpg")})`,
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${require("../assets/hero-bg.jpg")})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        aspectRatio: "16/9"
      }}
      className="w-[100%] h-[100vh] overflow-hidden  p-[2rem] md:p-[5.5rem] flex  items-start justify-between flex-col  "
    >
      <h1 className="text-white  font-[800] text-[60px] md:text-[105px] leading-none md:leading-[7vw] font-poppins   shadow-black drop-shadow-2xl">
        Live <br /> Audience
      </h1>

      <div className="flex md:flex-row flex-col md:gap-[40vw] gap:2 w-[100%]">
        <p className="text-white text-[22px] font-poppins">
          Munchies and Thoughts Podcast
        </p>
        <button className="  rounded-[1vw] bg-[#F6D95C] text-black w-[27vw] md:w-[15vw] font-poppins md
        :py-[0.5vw] py-[2vw]">
         BUY TICKET
        </button>
      </div>

      <div className="flex gap-[3vw] md:gap-[1vw] font-poppins ">
        <div className="bg-[#4378F5] text-white flex flex-col items-center w-[20vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className=" text-[20px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            {timeLeft.days}
          </h1>
          <p className="md:text-[18px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            days
          </p>
        </div>
        <div className="bg-[#4378F5] flex flex-col items-center text-white w-[20vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className="text-[20px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            {timeLeft.hours}
          </h1>
          <p className="md:text-[18px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            hours
          </p>
        </div>
        <div className="bg-[#4378F5] text-white w-[20vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className="text-[20px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            {timeLeft.minutes}
          </h1>
          <p className="md:text-[18px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            minutes
          </p>
        </div>
        <div className="bg-[#4378F5] text-white w-[20vw] md:w-[12vw] leading-tight rounded-[1.5vw] text-center uppercase py-[0.2vw] shadow-black drop-shadow-xl">
          <h1 className="text-[20px] md:text-[45px] font-[800] drop-shadow-xl stroke-black  shadow-black">
            {timeLeft.seconds}
          </h1>
          <p className="md:text-[18px] text-[15px] font-[500] drop-shadow-xl stroke-black  shadow-black">
            seconds
          </p>
        </div>
      </div>

      <div className="space-x-[3vw] uppercase mt-[1.5vw]">
        <button className=" border-[1px] border-white rounded-[2vw] bg-transparent text-white md:w-[13vw] w-[40vw] py-[0.8vw]">
          VIEW VIDEO
        </button>
        <button className=" border-[1px] border-white rounded-[2vw] bg-transparent text-white md:w-[13vw] w-[40vw] py-[0.8vw] uppercase">
          View Ticket
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
