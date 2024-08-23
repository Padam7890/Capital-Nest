import React from "react";
import { Zap } from "lucide-react";
const FeaturedCard = ({ image }: { image: any }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),url(${image.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[425px] p-5 flex flex-col justify-between bg-black"
    >
      <span className="bg-black/50 text-white px-3 py-1 rounded-full w-28 flex gap-1">
        <Zap fill="#FBD300" />
        Featured
      </span>
      <div className="text-white flex flex-col gap-1">
        <span>Digital Marketing</span>
        <div className="font-bold text-2xl">
          Restaurant Food Booking Web Development
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
