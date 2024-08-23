import React from "react";
import banner from "../../Images/Service/Banner.png";

const FullBanner = ({ title }: { title: any }) => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(	229, 59, 58, 0.3), rgba(	53, 31, 37, 0.7)),url(${banner.src})`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <span className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </span>
      </div>
    </div>
  );
};
// background-image: linear-gradient(rgba(255, 255, 255, 0), #  ),
export default FullBanner;
