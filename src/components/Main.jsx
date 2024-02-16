import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { FaAngleRight, FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Event1 from "../assets/event1.png";
import Event2 from "../assets/event2.png";
import Event3 from "../assets/event3.png";
import About from "../assets/bg-hero.jpg";

import Me1 from "../assets/me1.jpg";
import Me2 from "../assets/me2.jpg";
import Me3 from "../assets/me3.png";
import Contact from "../assets/IMG_7492.jpg";
import Foundation from "../assets/img-sec.jpg";

import {
	FaInstagram,
	FaYoutube,
	FaX,
	FaFacebook,
	FaLinkedin,
	FaClock,
	FaMessage,
	FaPhone,
	FaLocationArrow,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Main = () => {
	const [videos, setVideos] = useState([]);
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [question, setQuestion] = useState("");
	const [submitting, setSubmitting] = useState(false);

	function HandleLink() {
		console.log("clicked");
	}

	const HandleQuestion = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		if (!name || !mobile || !question) {
			setSubmitting(false);
			toast.error("All fields are required", {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else {
			try {
				axios
					.post(
						"https://munchies-backend.onrender.com/api/messages",
						{ name, mobile, question },
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
					.then((response) => {
						console.log(response);
						setName("");
						setMobile("");
						setQuestion("");
						setSubmitting(false);
						toast.success("Question sent successfully", {
							position: toast.POSITION.TOP_RIGHT,
						});
					});

				// Form submitted successfully
			} catch (error) {
				console.error("Error submitting form:", error.message);
			}
		}
	};

	useEffect(() => {
		// Replace 'YOUR_API_KEY' with the actual API key you obtained
		const apiKey = "AIzaSyC2gf_C4vEkZ5O6DtQu-IhzriAfagrTNgQ";
		// const channelId = 'UCfxZYWIPT4smobvmxt8mR0w'; // Replace with your YouTube channel ID
		const channelId = "UChtdb-jA4XUzWSmiJJ5PtfQ"; // Replace with your YouTube channel ID

		// Make a request to the YouTube Data API
		axios
			.get(`https://www.googleapis.com/youtube/v3/search`, {
				params: {
					part: "snippet",
					channelId: channelId,
					key: apiKey,
					maxResults: 4,
					order: "date",
				},
			})
			.then((response) => {
				// Extract video IDs from the search results
				const videoIds = response.data.items
					.map((video) => video.id.videoId)
					.join(",");

				// Make a second API call to get detailed information for each video
				axios
					.get(`https://www.googleapis.com/youtube/v3/videos`, {
						params: {
							part: "snippet,statistics,contentDetails",
							id: videoIds,
							key: apiKey,
						},
					})
					.then((detailsResponse) => {
						// Combine the search results with the detailed information
						const videosWithDetails = response.data.items.map(
							(searchResult) => {
								const videoId = searchResult.id.videoId;
								const videoDetails = detailsResponse.data.items.find(
									(detail) => detail.id === videoId
								);

								// Extract the desired information from 'videoDetails'
								const views = videoDetails.statistics.viewCount;
								const likes = videoDetails.statistics.likeCount;
								const comments = videoDetails.statistics.commentCount;
								const duration = videoDetails.contentDetails.duration;
								const publishedAt = new Date(searchResult.snippet.publishedAt);
								const currentDate = new Date();
								const timeSincePublished = currentDate - publishedAt;
								const daysSincePublished = Math.floor(
									timeSincePublished / (1000 * 60 * 60 * 24)
								);

								return {
									...searchResult,
									views,
									likes,
									comments,
									duration,
									daysSincePublished,
								};
							}
						);

						// Now 'videosWithDetails' contains the combined information for each video
						console.log("Videos with Details:", videosWithDetails);
						setVideos(videosWithDetails);
					})
					.catch((error) => {
						console.error(
							"Error fetching video details from YouTube API",
							error
						);
					});
			})
			.catch((error) => {
				console.error("Error fetching data from YouTube API", error);
			});
	}, []);
	return (
		<>
			<main>
				<ToastContainer />
				<section className="event py-5" id="events">
					<div className="container">
						<div className="flex flex-row justify-between pb-4">
							<div className="left text-secondary">
								<h2 className="pb-2">Upcoming Events</h2>
								<h5>Experience a Fusion of Traditions and Lifestyles</h5>
							</div>
							<div className="right flex flex-row">
								<h4 className="uppercase">
									See all <FaAngleRight className="test" />{" "}
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="">
									<img src={Event1} alt="" width="100%" />
									<div className="card-body">
										<h3>Munchies & Thoughts | Live Recording Lunch</h3>
										<p className="pb-3 pt-1">Sun 17th March | Rooihuiskraal</p>
										<h3>From R400.00</h3>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="">
									<img src={Event2} alt="" width="100%" />
									<div className="card-body">
										<h3>Africa Month</h3>
										<br />
										<p className="pb-3 pt-1">Mon 27th May | Gauteng</p>
										<h3>From R250.00</h3>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="">
									<img src={Event3} alt="" width="100%" />
									<div className="card-body">
										<h3>Cultural Heritage</h3>
										<br />
										<p className="pb-3 pt-1">Sun 22nd Sept | Gauteng</p>
										<h3>From R450.00</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="give-away py-[2rem] bg-[#4378F5]">
					<div className="container">
						<div className="flex justify-between">
							<h3 className="text-white mt-2 ">
								Take part in our giveaway and win a free ticket
							</h3>
							<Link
								to={""}
								className="shop rounded-[1vw] bg-[#F6D95C] text-black font-poppins py-[0.7vw] px-[1.7vw] uppercase d-none d-md-block"
							>
								shop gift
							</Link>
						</div>
					</div>
				</section>
				<section className="about bg-[#0f295b] py-5">
					<div className="container py-4">
						<div className="row">
							<div className="col-md-6 rel" style={{ position: "relative" }}>
								<img src={About} alt="" width="100%" />
								{/* <img src={ThumbNail} alt=""  className=" transition-all cursor-pointer text-red-500 bg-[#fff]" style={{position: 'absolute', top: '50%', right: '50%', zIndex: '999'}}/> */}
								<IoLogoYoutube
									className="scale-[5] md:scale-[7] transition-all cursor-pointer text-red-500"
									style={{
										position: "absolute",
										top: "50%",
										right: "50%",
										zIndex: "999",
									}}
									onClick={HandleLink}
								/>
								<div
									className="bg-[#fff]"
									style={{
										position: "absolute",
										top: "46%",
										right: "46%",
										zIndex: "99",
										background: "#fff",
										height: "46px",
										width: "50px",
									}}
								></div>
							</div>
							<div className="col-md-1"></div>
							<div className="col-md-5 mt-3 mt-md-0">
								<h2>
									About the Show <br /> and the Host
								</h2>
								<p>
									The Munchies and Thoughts YouTube Channel Show Hosted by Chef
									Phathanani Mbatha is a cooking show that combines passionate
									cooking with meaningful conversations with influential
									individuals from various industries.
								</p>
								<p>
									The show aims to discuss societal challenges over tasteful
									munchies while also sharing educational thoughts. Through the
									show, they are granted an opportunity to share their wisdom
									and challenges with the world.
								</p>
								<div className="pt-[3rem]">
									<Link
										to={"https://www.youtube.com/@munchiesandthoughts9222"}
										className="btn-podcast rounded-[1vw] py-[0.7vw] px-[2vw] uppercase"
									>
										watch podcast
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="trend py-5">
					<div className="container">
						<div className="flex flex-row justify-between pb-4">
							<div className="left text-secondary">
								<h2 className="pb-2">Trending Guests</h2>
								<h5>A tasteful munchies and educational sharing of thoughts</h5>
							</div>
							<div className="right flex flex-row">
								<h4 className="uppercase">
									See all <FaAngleRight className="test" />{" "}
								</h4>
							</div>
						</div>
						<div className="row trend-row pt-4">
							{videos.map((video) => (
								<div
									className="col-md-3 text-center my-2"
									key={video.id.videoId}
								>
									<div className="pix2">
										<img
											src={`${video.snippet.thumbnails.high.url}`}
											alt=""
											className=""
											style={{
												width: "200px", // Set your desired width
												height: "200px", // Set your desired height
												objectFit: "cover",
												clipPath: "inset(15% 10% 15% 10%)",
												borderRadius: "50%", // Crop the center 50% of the image
											}}
										/>
									</div>
									<div className="card-body">
										<h2>{video.snippet.title.substring(16)}</h2>
										<div className="flex justify-center gap-[3vw] text-secondary">
											<span>{video.views} views</span>
											<span>{video.daysSincePublished} days ago</span>
										</div>
										<h4>{video.likes} Likes</h4>
										<Link
											to={`https://www.youtube.com/embed/${video.id.videoId}`}
											className="btn btn-watch"
											target="_blank"
										>
											Watch video
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="host py-5 bg-[#0f295b]">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-md-4">
								<div class="flex h-[400px] gap-[2vw] pb-4 md:pb-0">
									<img src={Me2} alt="" width="100%" />
								</div>
							</div>
							<div className="col-md-1"></div>
							<div className="col-md-5 relative text-left">
								<h2 className="title">'On My Own'</h2>
								<h5>Chef Phathanani Mbatha</h5>
								<p>
									Discover the remarkable narrative of our host, Phathanani
									Mbatha, in his compelling book, 'On My Own.' Born from humble
									beginnings in rural Kwazulu-Natal, Phathanani's story is a
									testament to the transformative power of passion and
									perseverance.
								</p>
								<p id="p">
									‘On My Own' serves as a source of inspiration for those
									aspiring to overcome obstacles and pursue their dreams.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="give-away py-[2rem] bg-[#4378F5]">
					<div className="container">
						<div className="text-center md:flex justify-between">
							<h3 className="text-white mt-2 sm:mb-4 md:mb-0">
								'On My Own' by Phathanani Mbatha
							</h3>
							<Link
								to={"#"}
								className="shop rounded-[2vw] bg-[#F6D95C] text-black font-poppins md:py-[0.7vw] md:px-[2.5vw] uppercase"
							>
								Get Your Copy Today!
							</Link>
						</div>
					</div>
				</section>
				<section className="contact py-5" id="questions">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-5">
								<h1 className="">Feed Your Curiosity</h1>
								<h5 className="cur-text1">
									Got burning questions or curious thoughts? We're all ears!{" "}
								</h5>
								<p>
									You can submit your munchies and thoughts Q & A questions here
								</p>
							</div>
							<div className="col-md-1"></div>
							<div className="col-md-6">
								{/* <h2>Ask Anything</h2> */}
								<p className="text1 text-secondary">
									No question is too big or too small. Whether it's about
									spirituality, relationships, or just life in general, we want
									to hear from you{" "}
								</p>

								<form action="" className="form-controls">
									<div className="col-12 mb-3">
										<label htmlFor="">First Name</label>
										<input
											type="text"
											placeholder="Enter your first name"
											className="form-control"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="col-12 mb-3">
										<label htmlFor="">Phone Number</label>
										<input
											type="tel"
											placeholder="Enter your Phone number"
											className="form-control"
											value={mobile}
											onChange={(e) => setMobile(e.target.value)}
										/>
									</div>

									<div className="col-12 mb-3">
										<label htmlFor="">Question</label>
										<textarea
											className="form-control"
											placeholder="Enter Question..."
											rows="5"
											value={question}
											onChange={(e) => setQuestion(e.target.value)}
										></textarea>
									</div>

									{submitting ? (
										<button
											className="rounded-[1vw] bg-[#4378F5] text-white font-poppins py-[0.7vw] px-[1.7vw] uppercase float-right cursor-pointer"
											type="submit"
											disabled
										>
											<FaSpinner className="fa-spin" /> Sending...
										</button>
									) : (
										<button
											className="rounded-[1vw] bg-[#4378F5] text-white font-poppins py-[0.7vw] px-[1.7vw] uppercase float-right cursor-pointer"
											type="submit"
											onClick={HandleQuestion}
										>
											Submit your question
										</button>
									)}
								</form>
							</div>
						</div>
					</div>
				</section>
				<section className="foundation py-5 bg-[#0f295b]" id="foundation">
					<div className="container">
						<div className="row justify-center">
							<div className="col-md-6 order-2 order-md-1">
								<h2>Munchies & Thoughts Foundation</h2>
								<div className="md:w-[85%]">
									<p>
										Founded by Chef Phathanani Mbatha, driven by a vision to
										create positive change in the lives of young girls.
										Established in 2012 and registered with the Department of
										Social Development, the foundation has been actively
										operating ever since. <br />
										Our main goal is to create opportunities for underprivileged
										girls by offering necessities such as toiletries, school
										shoes, school bags, bedding, career guidance, and
										mentorship. <br />
										Join us on this transformative journey. Your support,
										whether big or small, makes a meaningful impact.
									</p>
									<p className="text">
										The organization was established 9 years ago with the help
										of my friends and family I manage to help over 500 girls.
									</p>
									<div className="">
										<input
											type="email"
											placeholder="Email"
											className="form-control mb-2"
										/>
										<button className="rounded-[5vw] md:rounded-[1vw] bg-[#F6D95C] text-black font-poppins py-[2vw] md:py-[0.7vw] px-[1.7vw] uppercase form-control">
											MAKE A DONATION
										</button>
									</div>
								</div>
							</div>
							<div className="col-md-1"></div>
							<div className="col-md-4 image text-white mt-3 mt-md-5 order-1 order-md-2">
								<div className="pix mt-md-5">
									<img src={Foundation} alt="" width="100%" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="contacts py-3">
					<div className="container md:text-center">
						{/* <h2 className="title uppercase">Contact Us</h2> */}
						<div className="row justify-center py-3 text-[#4378f5]">
							<div className=" col-12 col-md-3 my-2">
								<FaMessage className="md:mx-auto my-3 sm:text-[20px] md:text-[32px]" />
								<h4>Email</h4>
								<p className="md:pt-4 whitespace-wrap">
									<Link to="mailto:hello@munchiesandthoughts.co.za">
										live@munchiesandthoughts.co.za
									</Link>
								</p>
							</div>
							<div className="col-md-2 my-2">
								<FaPhone className="md:mx-auto my-3 sm:text-[20px] md:text-[32px]" />
								<h4>Phone</h4>
								<p className="md:pt-4">(+27) 815-246 791</p>
							</div>
							<div className="col-md-2 my-2">
								<FaClock className="md:mx-auto my-3 sm:text-[20px] md:text-[32px]" />
								<h4>Business Hours</h4>
								<p className="md:pt-4"> Mon -Fri, 8:00 - 4:30 pm </p>
							</div>
							<div className="col-12 col-md-2 my-2">
								<FaLocationArrow className="md:mx-auto my-3 sm:text-[20px] md:text-[32px]" />
								<h4>Address</h4>
								<p className="md:pt-4">Centurion, Gauteng South Africa, 1021</p>
							</div>
						</div>
						{/* <div className="socials flex flex-row gap-[2vw] justify-center pt-4">
						<Link to="https://www.instagram.com/munchies_thoughts/">
							<FaInstagram size={30} />
						</Link>
						<Link to="https://twitter.com/munchies_za">
							<FaX size={30} />
						</Link>
						<Link to="https://web.facebook.com/Munchiesandthought/">
							<FaFacebook size={30} />
						</Link>
						<Link to="https://www.youtube.com/@munchiesandthoughts9222">
							<FaYoutube size={30} />
						</Link>
					</div> */}
					</div>
				</section>
			</main>
		</>
	);
};

export default Main;
