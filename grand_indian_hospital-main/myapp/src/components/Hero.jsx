import React from "react";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-visible">
      {/* Hero container */}
      <div className="relative w-full h-[100vh] sm:h-[50vh] md:h-[60vh] lg:h-[100vh] min-h-[350px] overflow-hidden">

        {/* Background image */}
        <img
          src={home}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 75%" }}
        />

        {/* Gradient 1 — BLUE → WHITE (unchanged) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(2,62,138,0.95) 0%,
                rgba(2,62,138,0.85) 25%,
                rgba(2,62,138,0.55) 45%,
                rgba(2,62,138,0.25) 65%,
                rgba(255,255,255,0.25) 85%,
                rgba(255,255,255,0.35) 100%
              )
            `,
          }}
        />

        {/* Hero content */}
        <div className="relative z-40 flex flex-col justify-center items-center h-full px-6 md:px-16 lg:px-24">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl">
            <span className="block">Health is a treasure</span>
            <span className="block">We care together</span>
          </h1>
        </div>

        {/* White curved divider */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-50">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="w-full h-32 md:h-40 lg:h-48"
          >
            <path
              d="M0,0 C480,180 960,180 1440,0 L1440,200 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Gradient 2 & 3 — WHITE overflow curves */}
      <div className="absolute left-0 bottom-0 w-full h-48 md:h-56 lg:h-64 pointer-events-none z-30">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Back white curve (softer) */}
            <linearGradient id="whiteSoft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>

            {/* Front white curve (stronger) */}
            <linearGradient id="whiteStrong" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
            </linearGradient>
          </defs>

          {/* Back curve */}
           {/* Back curve — slightly longer */}
            <path
              d="M0,0 C480,165 960,180 1440,0 L1440,200 L0,200 Z"
              fill="url(#whiteSoft)"
            />

            {/* Front curve — slightly shorter */}
            <path
              d="M0,0 C480,150 960,150 1440,0 L1440,200 L0,200 Z"
              fill="url(#whiteStrong)"
            />

        </svg>
      </div>
    </section>
  );
};

export default Hero;
