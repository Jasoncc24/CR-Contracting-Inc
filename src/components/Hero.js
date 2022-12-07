import React from "react";

import { Parallax } from "react-parallax";

//images
import Image from "../assets/img/hero/luxhome.png";

//components
import Header from "../components/Header";

//icons
import { MdOutlineRequestQuote } from "react-icons/md";

//react-scroll
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="min-h-[618px] lg:min-h-[815px] pt-9 bg-geometric bg-no-repeat bg-cover"
      id="home"
    >
      <div className="container mx-auto">
        {/* header */}
        <Header />
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32">
          <div className="flex-1 lg:mt-12">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              CR Contracting <br /> Custom Quality Craftsmanship
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Whether You're looking for a New Building, Renovation, Expansion,
              or Addition,{" "}
              <span className="font-bold">CR Contracting Inc.</span> is Here to
              Help.
            </p>
            {/* btn group */}
            <div
              className="m-6 space-x-4"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
              >
                <button className=" flex items-center btn btn-sm lg:btn-lg btn-orange">
                  Get Free Quote
                  <MdOutlineRequestQuote className="text-[30px] ml-2" />
                </button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div
              className="flex-1 flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="w-[334px] h-[234px] lg:w-[620px] lg:h-[724px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-28 lg:p-18"
                  bgImage={Image}
                  bgImageAlt="building image"
                  strength={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
