import Image from "next/image";
import React from "react";
import banner from "../../Images/portfoliobanner.png";
import { ArrowRight } from "lucide-react";
const PortfolioBanner = () => {
  return (
    <div className="container flex flex-col gap-4 lg:flex-row lg:gap-10 ">
      <div className="flex flex-col gap-10 pt-10 items-center text-center lg:items-start lg:w-1/2 lg:text-left">
        <div>
          <h6 className="text-lg md:text-xl font-extrabold">
            <span className="text-red-100">Website Development</span>
          </h6>
          <h1 className="text-xl md:text-4xl font-extrabold pt-3">
            Food Ordering Website{" "}
          </h1>
          <p className="text-base md:text-lg pt-3">
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

        <button className="flex justify-center gap-2 items-center bg-red-100 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base">
          Live Preview
        </button>
      </div>
      <div className="lg:w-1/2 bg-[#DEE1E6] flex items-center justify-center">
        <Image src={banner} alt="banner photo"></Image>
      </div>
    </div>
  );
};

export default PortfolioBanner;
