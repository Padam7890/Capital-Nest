"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../Images/Onlineservice/swiperimg.png";
const SwiperPara = () => {
  const image = [{ src: img1 }, { src: img1 }];
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
    <div className="container relative flex flex-col lg:flex-row">
      <div className=" w-full lg:w-1/2 bg-white text-black flex flex-col gap-3 py-10">
        <span className="font-bold text-2xl px-10">Preview Image</span>
        <p className="px-10">
          Tempus condimentum ullamcorper fermentum montes luctus nisl. Lobortis
          a tincidunt magna arcu gravida.
        </p>
        <Swiper
          navigation={{ nextEl: ".custom_right" }}
          slidesPerView={1}
          spaceBetween={25}
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          className="mySwiper absolute left-4 w-full h-full "
        >
          {image.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-4 md:px-8 lg:absolute lg:bottom-0 lg:right-60 xl:right-80 lg:block hidden">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col gap-3 p-10">
        <span className="font-bold text-3xl">Client Requirements</span>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            Nibh diam tincidunt senectus congue. Felis ut quam adipiscing felis.
            Habitasse vestibulum egestas iaculis volutpat mauris. Morbi mauris
            faucibus nunc integer et ultrices.
          </li>
          <li>
            Ultricies non dignissim eget amet sed. Faucibus tempor ut ac lacus
            sollicitudin sem.{" "}
          </li>
          <li>
            Nibh diam tincidunt senectus congue. Felis ut quam adipiscing felis.
            Habitasse vestibulum egestas iaculis volutpat mauris. Morbi mauris
            faucibus nunc integer et ultrices. Ultricies non dignissim eget amet
            sed. Faucibus tempor ut ac lacus sollicitudin sem. Sit vel augue
            faucibus imperdiet at vitae iaculis. Porta facilisis erat integer
            quis urna. At tellus arcu lacinia pretium tortor interdum integer
            neque turpis. Viverra massa lectus sed pellentesque facilisis.
            Euismod vulputate adipiscing tincidunt eu vel luctus. Praesent
            fermentum pellentesque accumsan eu urna. Gravida amet tincidunt
            maecenas id integer placerat. Tempor aenean egestas id est sed.
            Interdum id massa purus sed consectetur.
          </li>
          <li>
            Viverra massa lectus sed pellentesque facilisis. Euismod vulputate
            adipiscing tincidunt eu vel luctus. Praesent fermentum pellentesque
            accumsan eu urna. Gravida amet tincidunt maecenas id integer
            placerat.{" "}
          </li>
          <li>
            Tempor aenean egestas id est sed. Interdum id massa purus sed
            consectetur.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SwiperPara;
