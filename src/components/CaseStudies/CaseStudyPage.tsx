import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import MiniBanner from "../Banner/MiniBanner";
import img1 from "../../Images/Cases/CaseCategory/case1.png";
import img2 from "../../Images/Cases/CaseCategory/case2.png";
import img3 from "../../Images/Cases/CaseCategory/case3.png";
import img4 from "../../Images/Cases/CaseCategory/case4.png";
import img5 from "../../Images/Cases/CaseCategory/case5.png";
import img6 from "../../Images/Cases/CaseCategory/case6.png";
import img7 from "../../Images/Cases/CaseCategory/case7.png";
import img8 from "../../Images/Cases/CaseCategory/case8.png";
import img9 from "../../Images/Cases/CaseCategory/case9.png";
import img10 from "../../Images/Cases/CaseCategory/case10.png";
import img11 from "../../Images/Cases/CaseCategory/case11.png";
import img12 from "../../Images/Cases/CaseCategory/case12.png";
import img13 from "../../Images/Cases/CaseCategory/case13.png";
import img14 from "../../Images/Cases/CaseCategory/case14.png";
import Link from "next/link";
const CaseStudyPage = () => {
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
  ];
  return (
    <div className="container">
      <div className="flex flex-col gap-7 items-center pt-16">
        <div className="text-2xl text-center md:text-4xl font-extrabold">
          Explore our different Categories
        </div>
        <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-9 w-96 md:w-full overflow-x-auto h-12">
          <li className="flex-shrink-0">All</li>
          <li className="flex-shrink-0">Mobile Apps</li>
          <li className="flex-shrink-0">Websites</li>
          <li className="flex-shrink-0">Digital Products</li>
          <li className="flex-shrink-0">Design</li>
          <li className="flex-shrink-0">Managements</li>
        </ul>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image: any, index: number) => (
          <Link key={index} href="/casestudies/single">
            <CaseStudyCard key={index} img={image.src} />
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

export default CaseStudyPage;
