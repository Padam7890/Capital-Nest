import React from "react";
import img1 from "../../Images/Portfolio/img1.jpeg";
import img2 from "../../Images/Portfolio/img2.jpeg";
import img3 from "../../Images/Portfolio/img3.jpeg";
import img4 from "../../Images/Portfolio/img4.jpeg";
import img5 from "../../Images/portfolio5.png";
import img6 from "../../Images/portfolio6.png";
import img7 from "../../Images/portfolio7.png";
import img8 from "../../Images/portfolio8.png";
import img9 from "../../Images/portfolio9.png";
import img10 from "../../Images/portfolio10.png";
import img11 from "../../Images/portfolio11.png";

import PortfolioCard from "../Landingpage/Portfolio/PortfolioCard";
import MiniBanner from "../Banner/MiniBanner";
import Link from "next/link";
const PortfolioOurWorks = () => {
  const images = [
    {
      src: img1,
      text: "Web Development",
      title: "Restaurant Food Booking Web Development",
    },
    {
      src: img2,
      text: "Mobile App Development",
      title: "Online shopping web and mobile app",
    },
    {
      src: img3,
      text: "Logo Design",
      title: "Real Estate Web and Mobile application",
    },
    {
      src: img4,
      text: "Social Media Marketing",
      title: "Ride sharing Application",
    },
    // {
    //   src: img5,
    //   text: "Content Writng",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img6,
    //   text: "Digital Product Development",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img7,
    //   text: "Social Media Marketing",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img8,
    //   text: "Content Writing",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img9,
    //   text: "Digital Product Development",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img10,
    //   text: "Social Media Marketing",
    //   title: "Restaurant Food Booking Web Development",
    // },
    // {
    //   src: img11,
    //   text: "Content Writing",
    //   title: "Restaurant Food Booking Web Development",
    // },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-7 items-center pt-16">
        <div className="text-2xl text-center md:text-4xl font-extrabold">
          Our Amazing Works
        </div>
        <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-9 w-80 sm:w-96 md:w-full overflow-x-auto h-12">
          <li className="flex-shrink-0">All</li>
          <li className="flex-shrink-0">Mobile Apps</li>
          <li className="flex-shrink-0">Websites</li>
          <li className="flex-shrink-0">Digital Products</li>
          <li className="flex-shrink-0">Design</li>
          <li className="flex-shrink-0">Managements</li>
        </ul>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {images.map((image: any, index: number) => (
          <Link key={index} href="/portfolio/single">
            <PortfolioCard
              key={index}
              img={image.src}
              text={image.text}
              title={image.title}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-5 my-10 items-center justify-center">
        <button className="px-5 py-2 bg-[#f4f3f3] rounded-full">Back</button>
        <div className="flex gap-2">
          <button className="py-2 px-4 rounded-full bg-red-100 text-white">
            1
          </button>
          <button className="border-[1px] border-[#C4C4C4] rounded-full py-2 px-4">
            2
          </button>
          <button className="border-[1px] border-[#C4C4C4] rounded-full py-2 px-4">
            3
          </button>
        </div>
        <button className="px-5 py-2 bg-red-100 rounded-full text-white">
          Next
        </button>
      </div>
      <MiniBanner titlepara={false} />
    </div>
  );
};

export default PortfolioOurWorks;
