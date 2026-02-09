import React from "react";
import opration from "../assets/opration.jpg";
import star from "../assets/star.svg";
import heart from "../assets/heart.svg";


const Homeone = () => {
  return (
    <div className="mt-43 flex flex-col lg:flex-row  bg-white items-center justify-between pt-10 pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-8">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center py-6">
        {/* Soft background glow */}
        <div className="absolute w-[65%] h-[65%] bg-sky-200/40 rounded-full blur-2xl" />

        {/* Image wrapper */}
        <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[5/4]">
            {/* Blue circle - perfectly responsive positioning */}
            <div className="absolute top-[10%] left-[10%] w-6 h-6 bg-[#023E8A] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" />

            <svg width="0" height="0" className="absolute inset-0">
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.83,0.14 C0.92,0.28 0.98,0.45 0.96,0.6 C0.94,0.75 0.84,0.88 0.7,0.94 C0.56,1 0.38,0.98 0.23,0.9 C0.08,0.82 -0.02,0.68 0.01,0.52 C0.04,0.36 0.2,0.18 0.38,0.1 C0.56,0.02 0.74,0.01 0.83,0.14 Z" />
                </clipPath>
              </defs>
            </svg>

            <img
              src={opration}
              alt="Operation"
              className="w-full h-full object-cover shadow-xl rounded-lg"
              style={{ clipPath: "url(#blobClip)" }}
            />
          </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h3 className="text-3xl text-[#023E8A] font-poppins leading-tight">
          Committed to Exceptional Patient Care
        </h3>
        <p className="mt-4 font-opensans text-justify">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment and personalized
          care.
        </p>
        <p className="mt-4 font-opensans text-justify ">
          At Grand Bishoftu Hospital, we are dedicated to delivering world-class
          healthcare with empathy and innovation, ensuring safety, comfort, and
          trust for every patient we serve.
        </p>

        <div className="flex flex-col md:flex-row gap-6 my-8 justify-center md:justify-start">
          <div className="bg-white w-full md:w-80 h-40 rounded-2xl shadow-md p-5 hover:scale-105 transition duration-300">
            <img src={star} alt="Star" className="mb-3 w-10" />
            <p className="font-semibold mb-1">Compassionate Care</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white w-full md:w-80 h-40 rounded-2xl shadow-md p-5 hover:scale-105 transition duration-300">
            <img src={heart} alt="Heart" className="mb-3 w-10" />
            <p className="font-semibold mb-1">Patient Safety</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeone;
