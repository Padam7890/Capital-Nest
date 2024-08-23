"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Star } from "lucide-react";
import icon from "../../../Images/icon.png";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
export function TestimonialCard({ content }: { content: any }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative">
      <Swiper
        navigation={{ prevEl: ".custom_left", nextEl: ".custom_right" }}
        slidesPerView={
          windowWidth < 768
            ? 1
            : windowWidth < 1024
            ? 2
            : windowWidth < 1280
            ? 3
            : 4
        }
        spaceBetween={25}
        modules={[FreeMode, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        className="mySwiper w-full my-8"
      >
        {content.map((content: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative px-6 py-9 h-[650px] shadow-md flex flex-col items-center gap-3 border-2 rounded-lg ">
              <Image src={content.src} alt="photo" width={100} height={100} />
              <div className="flex flex-col gap-1 items-center">
                <div className="font-bold text-xl text-center">
                  {content.name}
                </div>
                <div className="text-[#8E8E8E] text-sm font-medium text-center">
                  {content.title}{" "}
                </div>
                <div className="text-[#FBD300] text-sm font-semibold flex items-center">
                  <Star fill="#FBD300" />
                  <span className="text-[#7B7B7B]">{content.rating}/5</span>
                </div>
              </div>
              <p className="font-normal text-lg text-gray-600 text-left">
                {content.para}
              </p>
              <Image
                src={icon}
                alt="photo"
                width={30}
                height={30}
                className="absolute top-5 left-5"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-8 items-center justify-center">
        <button className="custom_left text-[#a19d9d] hover:text-red-100">
          <ChevronLeft size={30} />
        </button>
        <button className="custom_right text-[#a19d9d] hover:text-red-100">
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
