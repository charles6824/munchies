import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {


  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date("2024-02-23T00:00:00") - now;

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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${require("../assets/bg-hero2.jpg")})`,
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${require("../assets/hero-bg.jpg")})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        aspectRatio: "16/9"
      }}
      className="w-[100%] topp overflow-hidden  p-[2rem] md:p-[5.5rem] flex  items-start justify-between flex-col  "
    >
      <h1 className="text-white  font-[800] text-[60px] md:text-[105px] leading-none md:leading-[7vw] font-poppins   shadow-black drop-shadow-2xl">
      Studio <br />Audience
      </h1>

      <div className="flex md:flex-row flex-col md:gap-[40vw] gap:2 w-[100%] pb-4">
        <p className="new text-white text-[22px] font-poppins">
        Join Us For A Deliciously Thought-Provoking Experience
        </p>
        <Link to="https://www.quicket.co.za/events/249716-munchies-and-thoughts-live-recording-lunch/?ref=algolia-search#/" className="new-btn rounded-[3vw] bg-[#F6D95C] text-black w-[70vw] text-center md:w-[15vw] font-poppins md
        :py-[0.5vw] py-[2vw]">
         BUY TICKET NOW
        </Link>
      </div>

      <div className="flex gap-[3vw] md:gap-[1vw] font-poppins pb-3">
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

      <div className="d-flex gap-[3vw] w-[100vw] uppercase mt-[1vw]">
        <Link to="https://www.youtube.com/@munchiesandthoughts9222" className=" border-[1px] border-white rounded-[2vw] bg-transparent text-center text-white md:w-[12vw] w-[43vw] py-[0.8vw]">
          VIEW CHANNEL
        </Link>
        <Link to="https://www.quicket.co.za/events/249716-munchies-and-thoughts-live-recording-lunch/?ref=algolia-search#/" className="text-center border-[1px] border-white rounded-[2vw] bg-transparent text-white md:w-[12vw] w-[42vw] py-[0.8vw] uppercase">
          View Ticket
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
