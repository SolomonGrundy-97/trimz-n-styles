//import React from "react";
import LandingImg from "../assets/images/slide-1.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative w-full h-screen mb-10 flex items-center justify-center"
      id="#"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={LandingImg}
          alt="Barber Shop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-xl mb-3 md:text-6xl font-bold text-white"
          data-aos="fade-right"
        >
          Welcome To Our Barber Shop
        </h1>
        <p
          className="mb-10 text-sm md:text-6xl text-white"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <em>Let your hair do the talking...</em>
        </p>
        <div className="" data-aos="fade-left">
          <a
            href="#appointment"
            className="bg-yellow-400 text-green-900 px-4 py-4 rounded-md font-bold hover:bg-yellow-500 transition"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
