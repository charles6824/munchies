import React from "react";
import Foot1 from "../assets/foot1 (1).png";
import Foot2 from "../assets/foot1 (2).png";
import Foot3 from "../assets/foot1 (3).png";

const Footer = () => {
	return (
		<>
			<section className="footer py-4 bg-[#4378f5]">
				<div className="container">
					<div className="flex justify-center items-center text-center">
						<div className="w-25">
							<div className="pix">
								<img src={Foot3} alt="" width="100%" />
							</div>
						</div>
						<div className="w-25">
							<div className="pix">
								<img src={Foot1} alt="" width="100%" />
							</div>
						</div>
						<div className="w-25">
							<div className="pix">
								<img src={Foot2} alt="" width="100%" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
