import React from "react";
import PortfolioCard from "./PortfolioCard";
import img1 from "../../../Images/Portfolio/img1.jpeg";
import img2 from "../../../Images/Portfolio/img2.jpeg";
import img3 from "../../../Images/Portfolio/img3.jpeg";
import img4 from "../../../Images/Portfolio/img4.jpeg";
import img5 from "../../../Images/portfolio5.png";
import img6 from "../../../Images/portfolio6.png";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className="container flex flex-col gap-6 py-14 items-center">
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-red-100">Our Portfolio</span>
        <h2 className="font-extrabold text-2xl md:text-4xl text-center w-full md:w-[600px]">
          Introduce Our Projects & Check Recent Work
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <PortfolioCard
          text={"Web Development"}
          title="Restaurant Food Booking Web Development"
          img={img1}
        />
        <PortfolioCard
          text={"Online shopping web and mobile app"}
          title="Online shopping web and mobile app"
          img={img2}
        />
        <PortfolioCard
          text={"Logo Design"}
          title="Real Estate Web and Mobile application"
          img={img3}
        />
        <PortfolioCard
          text={"Social Media Marketing"}
          title="Ride sharing Application"
          img={img4}
        />
      </div>
      <Link href="/portfolio">
        <button className="border-[1px] border-black rounded-full w-44 py-3 mt-7 font-bold ">
          View More Works
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
