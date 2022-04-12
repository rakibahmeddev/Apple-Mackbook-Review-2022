import React from "react";
import { Link } from "react-router-dom";
import ReviewHome from "../Review/ReviewHome";
import "./Home.css";

const Home = () => {
  return (
    <div className="  ">
      <div className="main sm:flex justify-center md:gap-20 gap-10 px-20 md:py-20 py-0 md:mx-20 mx-0">
        <div className="md:my-10 my-20">
          <h2 className="md:text-5xl text-3xl md:text-left text-center font-medium my-3">
            Mackbook Air 2021
          </h2>
          <div className="home-left-text">
            <p className="md:text-left text-center text-3">
              Apple MacBook Air 2020 is a macOS laptop with a 13.30-inch display
              that has a resolution of 2560x1600 pixels. It is powered by a Core
              i3 processor and it comes with 8GB of RAM. The Apple MacBook Air
              2020 packs 256GB of SSD storage. Graphics are powered by
              Integrated Graphics Processor
            </p>
          </div>
          <div className="my-5 flex md:justify-start justify-center">
            <button className="font-semibold leading-none text-white py-4 px-10 bg-emerald-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-non">
              Learn More
            </button>
            <p></p>
          </div>
        </div>

        <img
          className="home-img mt-10 "
          src="https://5.imimg.com/data5/SELLER/Default/2021/5/IP/DX/OI/122431461/apple-macbook-air-mgnd3hn-a-m1-chip-macos-big-sur-laptop-500x500.jpg"
          alt=""
        />
      </div>

      {/* Review area  */}
      <div className="bg-indigo-700 text-white py-14">
        <h2 className="text-5xl font-medium">Customer Review</h2>
        <div className="review-area">
          <ReviewHome></ReviewHome>

          <div className="mb-10">
            <Link
              to="/review"
              className="font-semibold leading-none text-white py-4 px-10 bg-emerald-500 rounded hover:bg-white hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              See more reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
