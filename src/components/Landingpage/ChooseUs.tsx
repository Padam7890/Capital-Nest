import React from "react";
import chooseus from "../../Images/chooseus.png";
import Image from "next/image";
import { Minus } from "lucide-react";
import { EarthLock } from "lucide-react";
const ChooseUs = () => {
  return (
    <div className="container flex flex-col gap-4 lg:flex-row">
      <div className="lg:w-1/2">
        <Image src={chooseus} alt="choose us image" />
      </div>
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-10">
          <div>
            <h6 className="flex text-lg font-bold text-[#8E8E8E] items-end">
              Why Choose Us <Minus size={30} />
            </h6>
            <h1 className="text-2xl md:text-4xl font-extrabold pt-3">
              Providing brilliant ideas for your business
            </h1>
            <div className="text-lg flex flex-col gap-2 text-[#2E2E2E] pt-1">
              <p>
                Providing Brilliant Ideas for Your Business: Innovative
                Strategies and Creative Solutions for Success.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" flex items-center justify-center rounded-full text-red-100 ">
              <EarthLock className="bg-red-100/15  rounded-full p-2 w-14 h-14 lg:p-6 lg:w-24 lg:h-24" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-xl">
                Expertise in Digital Innovation
              </div>
              <div className="text-lg text-gray-600">
                We excel in brand consulting, logo creation, website
                development, and digital marketing. Our expertise ensures
                quality lead generation and effective social media management.
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" flex items-center rounded-full text-[#2BDA27]">
              <EarthLock className="bg-[#2BDA27]/15  rounded-full p-2 w-14 h-14 lg:p-6 lg:w-24 lg:h-24" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-xl">
                Proven Track Record of Success
              </div>
              <div className="text-lg text-gray-600">
                Our expertise in brand consulting, logo creation, website
                development, and digital marketing has consistently delivered
                exceptional results, ensuring quality lead generation and
                effective social media management.
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="/15 flex items-center rounded-full text-[#00BFFB]">
              <EarthLock className="bg-[#00BFFB]/15  rounded-full p-2 w-14 h-14 lg:p-6 lg:w-24 lg:h-24" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-xl">
                Dedicated and Experienced Team
              </div>
              <div className="text-lg text-gray-600">
                Our dedicated and experienced team excels in brand consulting,
                logo creation, website development, and digital marketing,
                delivering quality leads and effective social media management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
