import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({onclick}) => {

  return (
    <div className="bg-[#4378F5] py-[4vw] md:py-[1vw] relative text-center flex flex-col md:flex-row  justify-center items-center gap-[1vw] text-[12px] md:text-[1vw] font-poppins">
      <marquee className="text-white font-bold uppercase ">
        {" "}
        <Link to="#">Grand Prize: Free ticket to our next Munchies and Thoughts event | Spread the culinary joy challenge with 10 friends on Instagram, winner will be announced 5 days before the event{" "}</Link>
        
      </marquee>
      {/* <button className="uppercase text-black bg-white px-[2.2rem] py-[0.5rem] font-black rounded-3xl">
        SHOP Gifts
      </button> */}
      <br /><br />

      <div className="absolute right-3 top-[5vh] md:hidden">
        <AiOutlineBars className="text-[1.5rem] cursor-pointer text-white " onClick={onclick} />
        {/* <AiOutlineClose className="text-[1.5rem] cursor-pointer " /> */}
      </div>
    </div>
  );
};

export default Header;
