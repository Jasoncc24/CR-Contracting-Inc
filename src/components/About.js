import React from "react";
//react count-up
import CountUp from "react-countup";
//image
import Image from "../assets/img/richard-camacho.png";
//data
import { facts } from "../data";

const Facts = () => {
  return (
    <section className="section-sm lg:section-lg" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
        {/* numbers */}
        <div className="flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]">
          {facts.map((item, index) => {
            //data
            const { startNumber, endNumber, unit, title, desc } = item;
            return (
              <div className="w-[45%]" key={index}>
                <h2 className="h2 mb- lg:mb-4">
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={2}
                    enableScrollSpy
                  />
                  {unit}+
                </h2>
                <div className="text-xl font-bold text-heading mb-3">
                  {title}
                </div>
                <p className="max-w-[240px] font-medium text-heading">{desc}</p>
              </div>
            );
          })}
        </div>
        {/* text */}
        <div className="flex-1 -order-1 lg:order-none">
          <div className="flex flex-col justify-center h-full lg:pl-[100px]">
            <h2
              className="h2 text-[40px] mb-12 max-w-[295px] md:max-w-none"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Our Team Consists of Versatile Experts for Any Type of Project
              Whether it's Residential or Commercial.
            </h2>
            <div className="mb-2" data-aos="fade-down" data-aos-delay="600">
              <img src={Image} width={200} alt="" />
            </div>
            <div
              className="text-lg mb-6 font-bold text-heading"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Richard Camacho{" "}
              <span className="text-base text-paragraph font-normal">
                /Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
