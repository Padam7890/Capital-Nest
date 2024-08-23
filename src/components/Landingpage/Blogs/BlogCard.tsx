import React from "react";
import { ArrowRight } from "lucide-react";

const BlogCard = ({
  image,
  title,
  text,
}: {
  image: any;
  title: string;
  text: String;
}) => {
  return (
    <div className="mb-8 shadow-md relative h-[540px]">
      <div
        style={{
          background: `url(${image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundPosition: "center",
          height: "200px",
        }}
        className="h-60 w-full relative flex justify-end items-end bg-no-repeat rounded-lg"
      >
        <div className="absolute bottom-0 right-5 transform translate-y-1/2 bg-black/80 text-white py-2 px-3 font-semibold rounded-md w-16 h-20 md:w-14 md:h-16 flex flex-col items-center justify-center text-center">
          <span className="text-lg md:text-base">06</span>
          <span className="text-lg md:text-base">May</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4 pb-6 pt-10">
        <div className="font-bold text-xl">{title} </div>
        <p className=" font-normal text-gray-600 line-clamp-6 ">{text}</p>
        <div className="text-primary flex gap-2 items-center">
          <span>Read More</span>
          <ArrowRight size={15} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
