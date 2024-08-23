import Image from "next/image";
import React from "react";
import banner from "../../Images/Blogs/bannerblog.png";
import bannerbg from "../../Images/Bannercasebg.png";
import { Minus } from "lucide-react";

const BannerBlogs = () => {
  return (
    <div className="relative container flex flex-col gap-4 lg:flex-row lg:gap-10 pb-8">
      <div className="absolute inset-0 z-0 left-[25%] top-[15%]">
        <Image
          src={bannerbg}
          alt="banner background"
          layout=""
          objectFit=""
          quality={100}
          className="opacity-50 "
        />
      </div>
      <div className="relative z-10 flex flex-col gap-10 pt-10 items-center text-left  lg:items-start lg:w-1/2 lg:text-left">
        <div>
          <h6 className="text-lg md:text-lg font-extrabold text-red-100 flex items-end">
            Latest Blogs <Minus />
          </h6>
          <h1 className="text-2xl md:text-4xl font-extrabold pt-3">
            Hear it Here from the Best in Tech{" "}
          </h1>
          <div className="text-base md:text-lg pt-3 flex flex-col gap-1">
            <p>
              For startups, building a strong brand identity is a crucial step
              toward long-term success. It’s more than just a logo or a catchy
              tagline; it’s about creating a distinct presence that resonates
              with your target audience and sets you apart from the competition.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 lg:w-1/2">
        <Image src={banner} alt="banner photo" />
      </div>
    </div>
  );
};

export default BannerBlogs;
