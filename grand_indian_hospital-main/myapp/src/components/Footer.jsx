import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <footer className="px-6 bg-sky-900 md:px-16 lg:px-24 xl:px-32 pt-8 w-full  text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">

        {/* Logo + Title + Paragraph */}
        <div className="md:max-w-96">
          <div className="flex items-start gap-3">
            <img 
              className="w-15 rounded-full font-bold border border-gray-900"
              src={logo}
              alt="logo"
            />

            <div className='mt-3'>
              <span className="text-2xl font-bold  text-white ">
                Grand Bishoftu Hospital
              </span>
            </div>
          </div>
        </div>

        {/* Links + Contact */}
        <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-20">

          <div>
            <h2 className="font-semibold mb-5 text-white">Our Hospital</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goTo("/")}
                  className="text-black font-bold  text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/about")}
                  className="text-black font-bold  text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/services")}
                  className="text-black font-bold  text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/contact")}
                  className="text-black font-bold  text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm text-black font-bold space-y-2">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>

      </div>

      <p className="pt-4 text-center text-white font-bold text-xs md:text-sm pb-5">
          © {new Date().getFullYear()} Grand Bishoftu Hospital. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
