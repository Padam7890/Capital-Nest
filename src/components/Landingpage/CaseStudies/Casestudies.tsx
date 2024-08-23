import React from "react";
import { SwiperCaseStudy } from "./SwiperCaseStudy";
import img1 from "../../../Images/Cases/casestudy1.png";
import img2 from "../../../Images/Cases/casestudy2.png";
import img3 from "../../../Images/Cases/casestudy3.png";
const Casestudies = () => {
  const image = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img1 },
    { src: img2 },
  ];
  return (
    <div className="container py-14 flex flex-col">
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-red-100 ">Case Studies</span>
        <h2 className="font-extrabold text-2xl md:text-4xl text-center w-full md:w-[750px]">
          Explore Our Case Studies Gallery Where Ideas Flourish
        </h2>
      </div>
      <SwiperCaseStudy image={image} />
    </div>
  );
};

export default Casestudies;
