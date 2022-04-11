import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="  ">
      <div className="main sm:flex justify-center md:gap-20 gap-10 px-20 md:py-20 py-0 md:mx-20 mx-0">
        <div className="md:my-10 my-20">
          <h2 className="md:text-5xl text-3xl text-left font-medium my-3">
            Mackbook Air 2021
          </h2>
          <div className="home-left-text">
            <p className="text-left text-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is th
            </p>
          </div>
          <div className="my-5 flex justify-start">
            <button className="bg-emerald-500 text-white font-medium shadow-lg px-5 py-3 rounded ">
              Learn More
            </button>
            <p></p>
          </div>
        </div>

        <img
          className="home-img my-10"
          src="https://5.imimg.com/data5/SELLER/Default/2021/5/IP/DX/OI/122431461/apple-macbook-air-mgnd3hn-a-m1-chip-macos-big-sur-laptop-500x500.jpg"
          alt=""
        />
      </div>

      {/* Review area  */}
      <div className="bg-indigo-700 text-white py-10">
        <h2 className="text-5xl">Customer Review</h2>
        <div className="review-area"></div>
      </div>
    </div>
  );
};

export default Home;
