import React from "react";
import CountUp from "../components/CountUp";

import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import inside from "../assets/inside.jpg";
import middle from "../assets/middle.jpg";

const TitleAbout = () => {
  return (
    <div className="mt-10 bg-white py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Title */}
      <div className="flex flex-col items-center">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-16">
          About
        </p>
        <p className="text-center mt-4 md:mt-6 max-w-3xl">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment, personalized
          care, and a patient-first approach.
        </p>
      </div>

      {/* Main Section */}
      <div className="my-20 flex flex-col gap-16">
        {/* Row 1 — Hospital + Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Image */}
          <div className="flex justify-center md:max-w-[450px] w-full">
            <img
              className="w-full rounded-2xl transition-transform duration-300 hover:scale-105"
              src={hospital}
              alt="Hospital"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-6 text-justify">
            <p>
              At Grand Bishoftu Hospital, we are committed to providing exceptional
              healthcare with compassion and expertise. Our experienced medical
              specialists work tirelessly to ensure every patient's well-being
              through advanced treatments and personalized care.
            </p>
            <p className="mt-5">
              We strive to create a safe and welcoming environment where health,
              comfort, and trust come first. Our mission is to deliver trusted
              healthcare services with excellence and compassion.
            </p>
          </div>
        </div>

        {/* Row 2 — Images + Stats */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Images */}
          <div className="flex justify-center gap-6 w-full md:w-[450px]">
            <img
              className="border border-gray-500 rounded-2xl w-1/2 h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              src={doctor}
              alt="Doctor"
            />
            <img
              className="border border-gray-500 rounded-2xl w-1/2 h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              src={middle}
              alt="Inside"
            />
          </div>
                    
          {/* Stats */}
          <div className="w-full md:flex-1">
            <div className="bg-white rounded-xl shadow-md p-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-center">

                {/* Stat 1 */}
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#023E8A]">
                    <CountUp end={25} suffix="+" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Years of Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#023E8A]">
                    <CountUp end={50000} suffix="+" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Patients Treated
                  </p>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TitleAbout;
