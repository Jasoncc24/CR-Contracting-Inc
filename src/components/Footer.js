import React from "react";

//import logo
import Logo from "../assets/img/logo.svg";

//import icons
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-[10px]" data-aos="fade-up" data-aos-offset="0">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          {/* Logo */}
          <a href="/">
            <img src={Logo} width={160} alt="logo" />
          </a>
          {/* copyright text */}
          <p>&copy; 2022. All rights reserved</p>
          {/* social icons */}
          <div className="flex gap-x-4 text-orange text-lg">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaFacebook />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaInstagram />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
