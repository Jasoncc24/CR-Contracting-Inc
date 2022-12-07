import React from "react";

//images
import Image from "../assets/img/Gallery/ceiling.jpeg";
import Image2 from "../assets/img/Gallery/luxhome2.jpeg";
import Image3 from "../assets/img/Gallery/luxhome3.jpeg";
import Image4 from "../assets/img/Gallery/luxhome4.jpeg";
import Image5 from "../assets/img/Gallery/luxhome5.jpeg";
import Image6 from "../assets/img/Gallery/luxhome6.jpeg";
import Image7 from "../assets/img/Gallery/luxhome7.jpeg";
import Image8 from "../assets/img/Gallery/ceiling2.jpeg";
import Image9 from "../assets/img/Gallery/luxhome9.jpeg";
import Image10 from "../assets/img/Gallery/hallway.jpeg";
import Image11 from "../assets/img/Gallery/ceiling3.jpeg";
import Image12 from "../assets/img/Gallery/ceiling4.jpeg";
import Image13 from "../assets/img/Gallery/ceiling5.jpeg";
import Image14 from "../assets/img/Gallery/ceiling6.jpeg";

const Gallery = () => {
  return (
    <div className="m-auto w-full px-4 py-16 bg-abstract">
      <h2 className=" gc text-center p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-2 col-span-3 row-span-5">
          <img className="w-full h-full object-cover" src={Image} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image2} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image3} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image4} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image5} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image6} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image7} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image8} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image9} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image10} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image11} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image12} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image13} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={Image14} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
