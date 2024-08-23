"use client";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SwiperCaseStudy({ image }: { image: any }) {
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
        navigation={{ nextEl: ".custom_right" }}
        slidesPerView={windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3}
        spaceBetween={25}
        modules={[FreeMode, Autoplay, Navigation, Pagination]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        className="mySwiper w-full my-7"
      >
        {image.map((image: { src: string }, index: number) => (
          <SwiperSlide key={index}>
            <div className="shadow-md flex flex-col items-center text-center">
              <Image src={image.src} alt="photo" />
              <div className="p-4 flex flex-col gap-4">
                <div className="text-xl font-bold">
                  Online Food Booking Mobile App with API Integration
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <button className="py-1 px-2 text-red-100 bg-red-100/15 rounded-full">
                    Website Development{" "}
                  </button>
                  <button className="py-1 px-2 text-red-100 bg-red-100/15 rounded-full">
                    Mobile App Development
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-5 left-0 w-full">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
