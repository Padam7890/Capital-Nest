import Image from "next/image";
import React from "react";
import banner from "../../Images/Bannercase.png";
import bannerbg from "../../Images/Bannercasebg.png";
import { ArrowRight, Minus } from "lucide-react";

const BannerCasestudies = () => {
  return (
    <div className="pt-24 relative container flex flex-col gap-4 lg:flex-row lg:gap-10 pb-8">
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
            Case Studies <Minus />
          </h6>
          <h1 className="text-2xl md:text-4xl font-extrabold pt-3">
            How we helped our several clients grow in online business.
          </h1>
          <div className="text-base md:text-lg pt-3 flex flex-col gap-1">
            <p>
              Ultricies amet nunc commodo at. Sit purus blandit nisi integer
              pretium. Quam at venenatis sem pulvinar leo vulputate maecenas
              eleifend. Mauris sed nisl hendrerit consequat ullamcorper lobortis
              volutpat. Arcu est quis ac nec et bibendum. Auctor eu egestas sed
              viverra odio. Lorem platea nunc leo pretium eu.
            </p>
            <p>
              Pretium cursus imperdiet molestie eleifend laoreet quis dignissim
              vel. Ac id aliquam ullamcorper dignissim scelerisque mi id non a.
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

export default BannerCasestudies;
