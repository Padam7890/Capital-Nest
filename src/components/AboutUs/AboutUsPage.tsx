"use client";
import React, { useState } from "react";
import banner from "../../Images/Banner/minibanner.png";
import aboutus from "../../Images/aboutus.png";
import Image from "next/image";
import { aboutSections, AboutSection } from "../../data/about";

const AboutUsPage = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>("vision");

  const handleSectionChange = (sectionId: string) => {
    setActiveSectionId(sectionId);
  };

  const activeSection: AboutSection | undefined = aboutSections.find(
    (section) => section.id === activeSectionId
  );

  return (
    <div className="relative h-full">
      <div
        className="flex text-white w-full h-40 items-end pb-10 z-10"
        style={{
          background: `url(${banner.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-row gap-2 h-12 items-center">
          {aboutSections.map((section) => (
            <button
              key={section.id}
              className={`py-2 px-5 sm:py-4 sm:px-10 rounded-sm ${
                activeSectionId === section.id ? "bg-[#FBD300]" : "bg-white/80"
              } text-black`}
              onClick={() => handleSectionChange(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row py-14 lg:gap-10 z-0">
        <div className="w-full lg:w-3/5 flex flex-col">
          {activeSection && (
            <div className="flex flex-col gap-4 py-8">
              <div className="font-extrabold text-3xl">
                {activeSection.title}
              </div>
              {activeSection.children ? (
                <ul className="text-[#2E2E2E] flex flex-col gap-1">
                  {activeSection.children.map((child, index) => (
                    <li key={index}>
                      <span className="font-semibold">{child.label}: </span>
                      {child.description}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#2E2E2E]">{activeSection.content}</p>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-full lg:w-2/5 lg:top-20 lg:right-0 lg:absolute">
          <Image
            src={aboutus}
            alt="banner"
            className="w-50 h-50 lg:w-[400px] lg:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
