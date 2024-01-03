import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Header = ({onclick}) => {

  return (
    <div className="bg-[#4378F5] py-[2vw] relative text-center flex flex-col md:flex-row  justify-center items-center gap-[1vw] text-[12px] md:text-[1vw] font-poppins">
      <h1 className="text-white font-bold uppercase ">
        {" "}
        Exclusive Night Out! Gift Pack + Wine = FREE Event!{" "}
      </h1>
      <button className="uppercase text-black bg-white px-[2.2rem] py-[0.5rem] font-black rounded-3xl">
        SHOP Gifts
      </button>

      <div className="absolute right-3 top-[5vh] md:hidden">
        <AiOutlineBars className="text-[1.5rem] cursor-pointer text-white " onClick={onclick} />
        {/* <AiOutlineClose className="text-[1.5rem] cursor-pointer " /> */}
      </div>
    </div>
  );
};

export default Header;
