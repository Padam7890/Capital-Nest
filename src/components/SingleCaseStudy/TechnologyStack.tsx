import Image from "next/image";
import React from "react";
import ps from "../../Images/Onlineservice/photoshop.png";
import xd from "../../Images/Onlineservice/xd.png";
import figma from "../../Images/Onlineservice/figma.png";
import js from "../../Images/Onlineservice/js.png";
import scss from "../../Images/Onlineservice/scss.png";
import tailwind from "../../Images/Onlineservice/tailwind.png";
import bs from "../../Images/Onlineservice/bootstrap.png";
import webflow from "../../Images/Onlineservice/webflow.png";
const TechnologyStack = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-3 my-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-3xl">Technology Stacks</div>
          <p>
            Tempus condimentum ullamcorper fermentum montes luctus nisl.
            Lobortis a tincidunt magna arcu gravida. Eu arcu non sed eget lectus
            aenean. Eget odio vel tincidunt ullamcorper morbi egestas id vivamus
            dui.
          </p>
          <p>
            Proin dolor quis laoreet enim. Ipsum molestie fringilla sapien
            ligula vivamus enim egestas pretium.
          </p>
        </div>
        <span>
          <button className="bg-black text-white py-3 px-6 rounded-full">
            Our Working Process
          </button>
        </span>
      </div>
      <div className="border-2 border-gray-300 rounded-2xl grid grid-cols-4 gap-3 py-4 px-12">
        <div className="flex flex-col items-center gap-4">
          <Image src={ps} alt="icon" className="h-16" />
          <span className="font-semibold">Photoshop</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={xd} alt="icon" className="h-16" />
          <span className="font-semibold">XD</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={figma} alt="icon" className="h-16" />
          <span className="font-semibold">Figma</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={js} alt="icon" className="h-16" />
          <span className="font-semibold">JavScript</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={scss} alt="icon" className="h-16" />
          <span className="font-semibold">Scss</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={tailwind} alt="icon" className="h-16" />
          <span className="font-semibold">Tailwind</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={bs} alt="icon" className="h-16" />
          <span className="font-semibold">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={webflow} alt="icon" className="h-16" />
          <span className="font-semibold">Webflow</span>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
