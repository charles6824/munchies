import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Header from "./Header";



const Navbar = () => {

    const [show, setShow] = useState(false)

  const url = ["Events", "Shop", "Q&A", "Foundation", "About"];
  return (
    <div className={`relative ${show ? 'h-[100vh] overflow-hidden ' : 'h-fit'}`}>
<Header onclick={()=> setShow(!show)}/>
        
      {/* Desktop navbar */}
      <nav className="md:flex items-center justify-between px-[4vw] py-[1vw] hidden ">
        <Link to={"/"}>
          <img
            src={require("../assets/Navlogo.jpg")}
            alt=""
            width={"100%"}
            className="w-[12vw]"
          />
        </Link>

        <ul className="font-poppins font-[350] text-[1.3vw] flex gap-[3vw] mt-[4vw] ">
          {url.map((link) => (
            <li className=" hover:underline hover:transition-underline hover:duration-300">
              <Link>{link}</Link>
            </li>
          ))}
        </ul>

        <div className="flex text-[1.8vw] gap-[2vw] ">
          <IoSearchOutline className="hover:scale-[1.2] transition-all cursor-pointer" />
          <FaRegCircleUser className="hover:scale-[1.2] transition-all cursor-pointer" />
          <CiShoppingCart className="hover:scale-[1.2] transition-all cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Navbar */}

      <nav className={`flex-col items-center justify-center px-[4vw] text-center md:hidden w-full space-y-[8vw]  absolute  bg-white transition-all duration-500 ${show ? 'right-0 z-50' : 'right-[100%]'}`}>
        <Link to={"/"}>
          <img
            src={require("../assets/Navlogo.jpg")}
            alt=""
            width={"100%"}
            className="w-[45vw] mx-auto"
          />
        </Link>

        <ul className="font-poppins font-[350] text-[6vw] flex-col justify-center text-center  space-y-[6vw] mt-[4vw] ">
          {url.map((link) => (
            <li className=" hover:underline hover:transition-underline hover:duration-300">
              <Link>{link}</Link>
            </li>
          ))}
        </ul>

        <div className="flex text-[7vw] gap-[9vw] justify-center ">
          <IoSearchOutline className="hover:scale-[1.2] transition-all cursor-pointer" />
          <FaRegCircleUser className="hover:scale-[1.2] transition-all cursor-pointer" />
          <CiShoppingCart className="hover:scale-[1.2] transition-all cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
