import React from "react";
import { SwiperCaseStudy } from "../Landingpage/CaseStudies/SwiperCaseStudy";
import img1 from "../../Images/Portfolio/img1.png";
import img2 from "../../Images/Portfolio/img2.png";
import img3 from "../../Images/Portfolio/img3.png";
import PortfolioOurWorks from "./PortfolioOurWorks";
const PortfolioPage = () => {
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img1 },
    { src: img2 },
  ];
  return (
    <div className="container">
      <div className="mt-10">
        <div className="font-extrabold text-3xl text-center">
          Featured Projects
        </div>

        <SwiperCaseStudy image={images} />
      </div>
      <PortfolioOurWorks />
    </div>
  );
};

export default PortfolioPage;
