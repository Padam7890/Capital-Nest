import React from "react";
import FeaturedCard from "./FeaturedCard";
import img1 from "../../../Images/featured1.png";
import img2 from "../../../Images/featured2.png";
const Featured = () => {
  return (
    <div className="container flex pt-14 gap-7">
      <div className="w-full lg:w-1/2">
        <FeaturedCard image={img1} />
      </div>
      <div className="hidden lg:flex w-1/2">
        <FeaturedCard image={img2} />
      </div>
    </div>
  );
};

export default Featured;
