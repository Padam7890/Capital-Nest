"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import canberralogo from "../Images/canberra.jpeg";
import janaki from "../Images/janaki.jpeg";
import vyapara from "../Images/vyapara.jpeg";
import pp from "../Images/pp.jpeg";
import aia from "../Images/aia.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// New Logo imported from images/logos

import anz from '../Images/logos/anz.jpg';
import adelbank from '../Images/logos/adelbank.jpg';
import bankwest from '../Images/logos/bankwest.jpg';
import boq from '../Images/logos/boq.jpg';
import george from '../Images/logos/george.jpg';
import melbourne from '../Images/logos/melbourne.jpg';
import pepper from '../Images/logos/pepper.jpg';
import rams from '../Images/logos/rams.jpg';
import resimac from '../Images/logos/resimac.jpg';
import suncorp from '../Images/logos/suncorp.jpg';
import westpac from '../Images/logos/westpac.jpg';

const TrustedBy = () => {
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
  // const images = [
  // 'http://www.edenfp.com.au/wp-content/uploads/2020/01/lenders-panel-1-1.jpg',
  //   janaki,
  //   vyapara,
  //   pp,
  //   aia,
  //   canberralogo,
  //   janaki,
  //   vyapara,
  //   pp,
  //   aia,
  // ];
  const images = [
   [ anz,
    adelbank,
    bankwest,
    boq,
    george,
    melbourne,
    pepper,
    rams,
    resimac,
    suncorp,
      westpac,
      melbourne,
    ],
      [ anz,
        adelbank,
        bankwest,
        boq,
        george,
        melbourne,
        pepper,
        rams,
        resimac,
        suncorp,
        westpac,
        melbourne,
      ]
  ];
  return (


    <div className="bg-primary">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
    <div className="w-full lg:w-2/4 p-4 ">
      <h2 className=" mb-4 text-white title-text">Trusted by Our Lenders</h2>
      <p className="text-white text-2xl leading-10">Our Lenders are key partners in offering you the best financing solutions. We work together to support your financial needs</p>
    </div>
    <div className="w-full lg:w-2/4 pt-24 pb-4">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        // navigation
            // pagination={{ clickable: true }}
            
            modules={[FreeMode, Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000 }}
            loop={true}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}
          >
            <div className="grid grid-cols-2 grid-flow-row xl:grid-cols-4 grid-rows-3 gap-4 ">
              {slide.map((image, imgIndex) => (
                <div key={imgIndex} className=" bg-white p-2 rounded-xl ">
                  {/* <img
                    src={image}
                    alt={`Slide ${index + 1} Image ${imgIndex + 1}`}
                    className="h-full w-full object-cover"
                  /> */}
               <Image src={image}   alt="photo" className="object- cover h-[40px] rounded-xl" />

                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
    </div>



    // <div className="bg-primary">
    //   <div className="container mx-auto flex flex-col gap-5 py-6 justify-center bg-primary items-center overflow-y-auto ">
    //   <div className="w-full md:w-[436px] text-center text-white">
    //     Trusted by our valuable and well reputable clients.
    //   </div>
    //   {/* <div className="flex gap-10 justify-between items-center w-full h-24 overflow-y-auto">
    //     {images.map((item, index) => (
    //       <Image key={index} src={item} alt="Brand logo" className="w-32" />
    //     ))}
    //   </div> */}
    //   <Swiper
    //     navigation={{ nextEl: ".custom_right" }}
    //     slidesPerView={windowWidth < 768 ? 2 : windowWidth < 1024 ? 4 : 6}
    //     spaceBetween={25}
    //     modules={[FreeMode, Autoplay, Navigation, Pagination]}
    //     pagination={{
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     }}
    //     autoplay={{
    //       delay: 1000,
    //     }}
    //     loop={true}
    //     className="mySwiper w-full"
    //   >
    //     {images.map((image: any, index: number) => (
    //       <SwiperSlide key={index}>
    //         <div className="shadow-md flex flex-col items-center text-center">
    //           <Image src={image}   alt="photo" className="object- cover h-[60px] rounded-xl" />
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    // </div>
  );
};

export default TrustedBy;
