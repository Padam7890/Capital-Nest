import Image from "next/image";
import React from "react";
// import image from "../../Images/Cases/casestudy1.png";
import icon from "../../Images/Cases/cardicon.png";
const CaseStudyCard = ({ img }: { img: any }) => {
  return (
    <div className="shadow-md flex flex-col relative">
      <Image src={icon} alt="photo" className="absolute right-0 m-5 " />
      <Image src={img} alt="photo" layout="responsive" />
      <div className="p-4 flex flex-col gap-4">
        <div className="text-xl font-bold">
          Online Food Booking Mobile App with API Integration
        </div>
        <div className="flex gap-2">
          <button className="py-1 px-2 text-red-100 bg-red-100/15 rounded-full">
            Website Development{" "}
          </button>
          <button className="py-1 px-2 text-red-100 bg-red-100/15 rounded-full">
            Mobile App Development
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
