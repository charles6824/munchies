import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Event1 from "../assets/event1.jpeg";
import Event2 from "../assets/event2.jpeg";
import About from "../assets/about-img.jpg";
import Test1 from "../assets/test1.png";
import Test2 from "../assets/test2.png";
import Test3 from "../assets/test3.png";
import Test4 from "../assets/test4.png";
import Me1 from "../assets/me1.jpg";
import Me2 from "../assets/me2.jpg";
import Me3 from "../assets/me3.png";
import Contact from "../assets/IMG_7492.jpg";
import Foundation from "../assets/foundation.JPG";

import {
	FaInstagram,
	FaTwitter,
	FaX,
	FaFacebook,
	FaLinkedin,
	FaClock,
	FaMessage,
	FaPhone,
	FaLocationArrow,
} from "react-icons/fa6";

const Main = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		// Replace 'YOUR_API_KEY' with the actual API key you obtained
		const apiKey = "AIzaSyClAzL4E0YkP1J8NT8Bf3_FSXLe_iJTFR4";
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
		<main>
			<section className="event py-5">
				<div className="container">
					<div className="flex flex-row justify-between pb-4">
						<div className="left text-secondary">
							<h2 className="pb-2">Upcoming Events</h2>
							<h5>Events happening soon</h5>
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
									<h3>Munchies and Thoughts | Live Audience</h3>
									<p className="pb-3 pt-1">Fri 22nd Feb | Hatfield Club</p>
									<h3>From R250.00</h3>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="">
								<img src={Event2} alt="" width="100%" />
								<div className="card-body">
									<h3>Munchies and Thoughts | Live Audience</h3>
									<p className="pb-3 pt-1">Fri 22nd Feb | Hatfield Club</p>
									<h3>From R250.00</h3>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="">
								<img src={Event1} alt="" width="100%" />
								<div className="card-body">
									<h3>Munchies and Thoughts | Live Audience</h3>
									<p className="pb-3 pt-1">Fri 22nd Feb | Hatfield Club</p>
									<h3>From R250.00</h3>
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
							className="shop rounded-[1vw] bg-[#F6D95C] text-black font-poppins py-[0.7vw] px-[1.7vw] uppercase"
						>
							shop gift
						</Link>
					</div>
				</div>
			</section>
			<section className="about bg-[#0f295b] py-5">
				<div className="container py-4">
					<div className="row">
						<div className="col-md-6">
							<img src={About} alt="" width="100%" />
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-5">
							<h2>
								About <br /> Munchies and Thoughts
							</h2>
							<p>
								Munchies and thoughts is a company that was founded and
								registered with CIPIC in 2019 by Chef Phathanani Mbatha.
							</p>
							<p>
								At <b>Munchies and Thoughts</b>, our mission is to create a
								delectable space where different cultures, traditional wisdom,
								and contemporary lifestyles blend harmoniously. We believe in
								fostering open communication and meaningful dialogue,
								transcending boundaries and embracing the richness of human
								experiences.
							</p>
							<div className="pt-[3rem]">
								<Link
									to={""}
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
							<div className="col-md-3 text-center my-2" key={video.id.videoId}>
								<img
									src={`${video.snippet.thumbnails.high.url}`}
									alt=""
									className="pix"
								/>
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
					<div className="row justify-center text-center">
						<div className="col-md-7">
							<div class="flex h-[400px] gap-[2vw]">
								<div class="flex items-center justify-center h-3/4 mt-[2.7rem] d-none d-md-block">
									<img src={Me1} alt="" class="max-h-full max-w-full" />
								</div>

								<div class="flex items-center justify-center h-full">
									<img src={Me2} alt="" class="h-full w-full object-cover" />
								</div>
							</div>
						</div>
						<div className="col-md-5 relative text-left">
							<h2 className="title">Meet Your Host </h2>
							<h5>Chef Phathanani Mbatha</h5>
							<p>
								Born from humble beginnings in rural Kwazulu-Natal and fueled by
								a passion for exploration, our host, Phathanani Mbatha, is on a
								mission to inspire and motivate. With a background rooted in
								tradition and an education journey that led him to Pretoria,
								Phathanani shares his extraordinary story in his published book,
								'On My Own.'
							</p>
							<Link
								to={""}
								className="rounded-[1vw] bg-[#F6D95C] text-black font-poppins py-[0.7vw] px-[1.7vw] uppercase"
							>
								Buy the Book
							</Link>
							<img
								src={Me3}
								alt=""
								className="absolute bottom-[-48px] mx-[17rem] w-[150px] d-none d-md-block"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="contact py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<h2>Ask Anything</h2>
							<p className="text1 text-secondary">
								Got burning questions or curious thoughts? We're all ears!{" "}
							</p>

							<form action="" className="form-controls pr-[10vw]">
								<div className="col-12 mb-3">
									<label htmlFor="">First Name</label>
									<input
										type="text"
										placeholder="Enter your first name"
										className="form-control"
									/>
								</div>
								<div className="col-12 mb-3">
									<label htmlFor="">Phone Number</label>
									<input
										type="tel"
										placeholder="Enter your Phone number"
										className="form-control"
									/>
								</div>
								<div className="col-12 mb-2">
									<label htmlFor="">City</label>
									<input
										type="text"
										placeholder="Enter your City"
										className="form-control"
									/>
								</div>
								<div className="col-12 mb-2">
									<label htmlFor="">Question</label>
									<textarea
										className="form-control"
										placeholder="Enter Question..."
										rows="5"
									></textarea>
								</div>
								<div className="col-12 mb-2">
									<p className="muted pb-3 text-s">
										No question is too big or too small. Whether it's about
										spirituality, relationships, or just life in general, we
										want to hear from you{" "}
									</p>
								</div>

								<button
									className="rounded-[1vw] bg-[#4378F5] text-white font-poppins py-[0.7vw] px-[1.7vw] uppercase"
									type="submit"
								>
									Submit your question
								</button>
							</form>
						</div>
						<div className="col-md-5 mt-3 mt-md-0">
							<img src={Contact} alt="" width="100%" />
						</div>
					</div>
				</div>
			</section>
			<section className="foundation py-5 bg-[#c65991]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-md-6">
							<h2>Munchies & Thoughts Foundation</h2>
							<div className="w-[85%]">
								<p>
									At Mothupa Foundation, our mission is to create an enabling
									environment for the girl child. From basic sanitary needs to
									career guidance, we aim to uplift and support young minds,
									helping them overcome societal challenges. We believe in
									building a brighter future, one blanket at a time.
								</p>
								<p className="text">
									The organization was established 9 years ago with the help of
									my friends and family I manage to help over 500 girls.
								</p>
								<Link
									to={""}
									className="rounded-[1vw] bg-[#F6D95C] text-black font-poppins py-[0.7vw] px-[1.7vw] uppercase"
								>
									Donate a blanket now
								</Link>
							</div>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-4 image text-white mt-3 mt-md-0">
							<div className="pix">
								<img src={Foundation} alt="" width="100%" />
							</div>
							<h3>From 17 May to 17 July</h3>
							<h6 className="pb-3">Winter Blanket Drive 2024</h6>
							<p className="">
								Join us in our upcoming campaign, where warmth meets generosity.
								Our goal is to collect over 300 blankets for winter, creating a
								cocoon of comfort for those in need. The campaign kicks off in
								March 2024, and we invite you to be a part of this heartwarming
								initiative.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="contacts py-5 text-center">
				<div className="container text-center">
					<h2 className="title uppercase">Contact Us</h2>
					<div className="row justify-center text-center py-3 text-[#4378f5]">
						<div className=" col-12 col-md-3 my-2">
							<FaMessage size={32} className="mx-auto my-3" />
							<h4>Email</h4>
							<p className="pt-4 whitespace-wrap">hello@munchiesandthoughts.co.za</p>
						</div>
						<div className="col-6 col-md-3 my-2">
							<FaPhone size={32} className="mx-auto my-3" />
							<h4>Phone</h4>
							<p className="pt-4">(+27) 815-246 791</p>
						</div>
						<div className="col-6 col-md-3 my-2">
							<FaClock size={32} className="mx-auto my-3" />
							<h4>Business Hours</h4>
							<p className="pt-4"> Mon -Fri, 8:00 - 4:30 pm </p>
						</div>
						<div className="col-12 col-md-3 my-2">
							<FaLocationArrow size={32} className="mx-auto my-3" />
							<h4>Address</h4>
							<p className="pt-4">Centurion, Gauteng South Africa, 1021</p>
						</div>
					</div>
					<div className="socials flex flex-row gap-[2vw] justify-center pt-4">
						<Link to="https://www.instagram.com/munchies_thoughts/">
							<FaInstagram size={30} />
						</Link>
						<Link to="https://twitter.com/munchies_za">
							<FaX size={30} />
						</Link>
						<Link to="https://web.facebook.com/Munchiesandthought/">
							<FaFacebook size={30} />
						</Link>
						<Link to="#">
							<FaLinkedin size={30} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Main;
