import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Header from "./Header";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);

	let url = [
		{ name: "Events", link: "#events" },
		{ name: "Send Questions", link: "#questions" },
		{ name: "Merchandise", link: "#" },
		{ name: "Foundation", link: "#foundation" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			console.log("object", scrollPosition);
			setShow2(scrollPosition > 150);
			console.log(show2);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [show2]);


	return (
		<div
			className={`relative ${show ? "h-[100vh] overflow-hidden " : "h-fit"}`}
		>
			<Header
				onclick={() => setShow(!show)}
				className={show2 ? "hidden" : "block"}
			/>

			{/* Desktop navbar */}
			<nav
				className={
					show2
						? `sticky top-0 z-50 md:flex items-center justify-between px-[4vw] py-[0vw]`
						: `md:flex items-center justify-between px-[4vw] py-[0vw] hidden`
				}
			>
				<Link to={"/"}>
					<img
						src={require("../assets/Navlogo.jpg")}
						alt=""
						width={"100%"}
						className="w-[12vw]"
					/>
				</Link>

				<ul className="font-poppins font-[350] text-[1.3vw] flex gap-[3vw] mt-[0vw] ">
					{url &&
						url.map((item, i) => (
							<li key={i} className="hover:text-[#4378F5] hover:duration-300">
								<Link smooth to={item.link}>{item.name}</Link>
							</li>
						))}
				</ul>

				<div className="flex text-[1.8vw] gap-[2vw] ">
					<IoLogoYoutube className="hover:scale-[1.2] transition-all cursor-pointer text-red-500" />
					<FaRegCircleUser className="hover:scale-[1.2] transition-all cursor-pointer" />
					<CiShoppingCart className="hover:scale-[1.2] transition-all cursor-pointer" />
				</div>
			</nav>

			{/* Mobile Navbar */}

			<nav
				className={`flex-col items-center justify-center px-[4vw] text-center md:hidden w-full space-y-[8vw]  absolute  bg-white transition-all duration-500 ${
					show ? "right-0 z-50" : "right-[100%]"
				}`}
			>
				<Link to={"/"}>
					<img
						src={require("../assets/Navlogo.jpg")}
						alt=""
						width={"100%"}
						className="w-[45vw] mx-auto"
					/>
				</Link>

				<ul className="font-poppins font-[350] text-[6vw] flex-col justify-center text-center  space-y-[6vw] mt-[4vw] ">
        {url &&
						url.map((item, i) => (
							<li key={i} className=" hover:underline hover:transition-underline hover:duration-300">
								<Link smooth to={item.link} >{item.name}</Link>
							</li>
						))}
				</ul>

				<div className="flex text-[7vw] gap-[9vw] justify-center ">
					<IoLogoYoutube className="hover:scale-[1.2] transition-all cursor-pointer text-red-500" />
					<FaRegCircleUser className="hover:scale-[1.2] transition-all cursor-pointer" />
					<CiShoppingCart className="hover:scale-[1.2] transition-all cursor-pointer" />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
