import React, { useState, useEffect } from "react";

//components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

//Logo
import Logo from "../assets/img/logo.svg";

//icons
import { AiFillPhone } from "react-icons/ai";
const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    //scroll event listener
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "top-0" : "top-9"
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[100px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className="flex items-center">
        {/* Logo */}
        <a href="/">
          <img src={Logo} width={130} alt="logo" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        {/* buttons */}
        <div className="flex gap-x-4 lg:gap-x-9">
          <a href="tel:7035777009">
            <button className=" flex items-center btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-bold text-sm lg:text-base hover:bg-orange-200 hover:text-white transition font-bold">
              Get in Touch
              <AiFillPhone className=" text-[20px] ml-1" />
            </button>
          </a>
        </div>
        {/* Nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
