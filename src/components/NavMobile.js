import React, { useState } from "react";

//icon
import { BiMenu } from "react-icons/bi";

//import react-scroll
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {/* menu btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden"
      >
        <BiMenu />
      </div>
      {/* menu items */}
      <ul
        className={`${
          isOpen ? "max-h-60 p-8" : "max-h-0 p-0"
        } flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden font-bold transition-all`}
      >
        <li>
          <Link to="home" spy={true} smooth={true} offset={-240} duration={700}>
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-260}
            duration={700}
          >
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-400}
            duration={700}
          >
            <div>Gallery</div>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={700}
          >
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
