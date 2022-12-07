import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section
      className="bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]"
      id="gallery"
    >
      <div className="container mx-auto">
        {/* Image */}
        <div
          className="bg-building h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="500"
        ></div>
        {/* text */}
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex-1" data-aos="fade-right">
            {/* line */}
            <div className="w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full"></div>
            <h2 className="h2 mb-3 lg:mb-0">
              Why Choose Us <br /> For Your Next Project
            </h2>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <p className="max-w-[360px] mb-[18px] lg:mb-[38px] font-bold">
              {" "}
              We know Choosing the Right Contractor is Important, View Our Work
              Portfolio.
            </p>
            <Link to="/gallery">
              <button className="btn btn-sm btn-orange">View Gallery</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
