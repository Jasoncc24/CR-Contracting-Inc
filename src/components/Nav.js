import React from "react";

//react-scroll
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="ml-[70px]">
      <ul className="flex gap-x-[42px] font-bold cursor-pointer">
        <li>
          <Link to="home" spy={true} smooth={true} offset={-140} duration={700}>
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
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
            offset={-180}
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
            offset={-100}
            duration={700}
          >
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
