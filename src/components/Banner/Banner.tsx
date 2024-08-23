"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay  } from "swiper/modules";

import MainBanner1 from "../../Images/Banner/mainbanner1.jpg";
import MainBanner2 from "../../Images/Banner/mainbanner2.jpg";
import MainBanner3 from "../../Images/Banner/mainbanner3.jpg";

const Banner = () => {
  const ImageList = [MainBanner1, MainBanner2, MainBanner3];

  return (
    <div className="relative flex items-center justify-center gap-5 mb-0 lg:gap-10 min-h-[30vh] md:max-h-[90vh] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 -z-10"></div>

      <div className="w-full h-full overflow-hidden">
        <Swiper
          className="w-full"
          navigation={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard ,Autoplay]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {ImageList.map((image: any, index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0  bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
              <Image
                src={image}
                alt="Main Banner 1"
                objectFit="cover"
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
