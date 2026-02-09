import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import x from '../assets/x.svg';
import { useState } from 'react';
import phonecall from '../assets/phonecall.svg';
import mailopen from '../assets/mailopen.svg';


const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 w-full h-[50px] bg-[#023E8A] z-70">
        <div className="
          max-w-7xl mx-auto h-full
          flex items-center
          justify-center lg:justify-between
          px-4 sm:px-6 lg:px-8
        ">
          {/* Phone + Email */}
          <div className="flex items-center gap-6 text-white text-sm font-semibold">
            <div className="flex items-center gap-1">
              <img src={phonecall} className="w-5" alt="" />
              <h3 className="text-base sm:text-lg">09876543</h3>
            </div>

            <div className="flex items-center gap-1">
              <img className="w-5" src={mailopen} alt="" />
              <h3 className="text-base sm:text-lg">test@email.com</h3>
            </div>
          </div>

          {/* Social icons — desktop only */}
          <div className="hidden lg:flex items-center gap-4 text-white text-sm font-semibold">
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
          </div>
        </div>
      </div>


      {/* Main navbar directly below top bar */}
      <nav className="fixed top-10 left-0 w-full flex items-center justify-between px-6 sm:px-8 py-2 bg-white z-70 mt-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-12 rounded-full border border-black" src={logo} alt="logo" />
          <span className="text-2xl font-opensans font-bold text-gray-600">
            <span className="hidden sm:inline">Grand Bishoftu Hospital</span>
            <span className="inline sm:hidden">GBH</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-bold text-base">
          <NavLink to="/" className="hover:text-black hover:font-bold">Home</NavLink>
          <NavLink to="/about" className="hover:text-black hover:font-bold">About</NavLink>
          <NavLink to="/services" className="hover:text-black hover:font-bold">Services</NavLink>
          <NavLink to="/contact" className="hover:text-black hover:font-bold">Contact</NavLink>
        </ul>

        {/* Mobile menu icon */}
        <img 
          src={menu} 
          alt="menu" 
          onClick={() => setVisible(true)} 
          className="w-8 h-8 cursor-pointer md:hidden"

        />

        {/* Slide-out Mobile Menu */}
        <div
            className={`
              fixed top-0 right-0 h-screen bg-white
              transition-all duration-300 ease-in-out
              z-[100]
              ${visible ? 'w-full' : 'w-0'}
            `}
          >
          <div className="flex flex-col p-6">
            <img 
              src={x} 
              alt="close" 
              onClick={() => setVisible(false)} 
              className="w-8 h-8 self-end cursor-pointer transition-transform duration-200 hover:rotate-90"
            />
            <ul className="flex flex-col items-center mt-8 space-y-4 text-lg font-medium text-black overflow-hidden">
              <NavLink to="/" onClick={() => setVisible(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setVisible(false)}>About</NavLink>
              <NavLink to="/services" onClick={() => setVisible(false)}>Services</NavLink>
              <NavLink to="/contact" onClick={() => setVisible(false)}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
