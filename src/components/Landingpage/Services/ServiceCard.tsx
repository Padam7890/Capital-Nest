"use client";
import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  url,
  color,
  text,
  title,
}: {
  url: string;
  color: any;
  text: string;
  title: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    backgroundColor: `white`,
    color: "black",
  };

  const hoverStyle = {
    backgroundColor: `${color}FF`,
    color: "white",
    border: "none",
  };

  return (


    // <Link href={`/service/${url}`} className=" cursor-default">
    <div className="cursor-pointer" >
      <div
    style={{ borderColor:color }}
    className="flex flex-col justify-betwee gap-8 justify-center items-center p-10 rounded-[60px] border rounded-tr-none w-[100%] mx-auto  min-h-[350px] "
>
    <p className="font-semibold text-2xl text-white self-start">{title}</p>
    <p className="font-normal  text-white">{text}</p>
    <button
        style={{ backgroundColor: color }}
        className="py-1 px-4 bg-white text-left  rounded-full rounded-tr-none self-start hover:scale-90 transition-all duration-500 "
    >
        Learn more <span className="rotate-90">&rarr;</span>
    </button>
      </div>
      </div>
      // </Link>

    // <div className="relative group">
    //   <Link href={`/service/${url}`}>
    //     {/* <div
    //       style={{ backgroundColor: color }}
    //       className="absolute inset-0 opacity-60 rounded-lg origin-top-left transform rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-3 z-0"
    //     ></div> */}
    //     <div
    //       className="relative flex flex-col gap-5 rounded- md bg-transparent border border-white rounded-[60px] rounded-tr-none  items-center pt-10 pb-8 shadow-lg px-5 z-10  md:h-[450px]"
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //     >
    //       <div
    //         style={{ backgroundColor: `${color}33` }}
    //         className={` w-40 h-24 rounded-full flex items-center justify-center -rotate-24`}
    //       >
    //         <CircleUserRound
    //           className={` rotate-24 group-hover:text-white`}
    //           color={color}
    //           size={60}
    //         />
    //       </div>
    //       <div className="text-lg  md:text-xl text-center text-white font-bold pt-3">
    //         {title}
    //       </div>
    //       <p className="text- text-white font-normal text-center">{text}</p>
    //       <span
    //         style={isHovered ? hoverStyle : defaultStyle}
    //         className="span py-3 px-8 rounded-full font-bold border-[1px] border-black"
    //       >
    //         Learn More
    //       </span>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default ServiceCard;
