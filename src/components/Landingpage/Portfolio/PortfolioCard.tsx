import React from "react";
import Image from "next/image";

const PortfolioCard = ({
  text,
  img,
  title,
}: {
  text: string;
  img: any;
  title: string;
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 opacity-60 bg-[#EB3352] rounded-lg origin-top-left transform rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-3 z-0"></div>
      <div className="h-[400px] relative flex flex-col gap-3 rounded-md bg-white pt-10 pb-8 shadow-lg px-2 z-10">
        <Image
          src={img}
          alt="portfolio image"
          className="w-full object-cover h-64"
        />
        <div className="text-[#8E8E8E]">{text}</div>
        <div className="font-bold text-2xl">{title} </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
