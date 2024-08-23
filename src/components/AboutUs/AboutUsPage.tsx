"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import banner from "../../Images/Banner/minibanner.png";
import aboutus from "../../Images/aboutus.png";
import Image from "next/image";

const AboutUsPage = () => {
  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(true);
  const [values, setValues] = useState(false);
  const togglemission = () => {
    setMission(true);
    setVision(false);
    setValues(false);
  };
  const togglevision = () => {
    setMission(false);
    setVision(true);
    setValues(false);
    console.log("click");
  };
  const togglevalues = () => {
    setMission(false);
    setVision(false);
    setValues(true);
  };
  return (
    <div className="relative h-full">
      <div
        className="flex  text-white w-full h-40 items-end pb-10 z-10"
        style={{
          background: `url(${banner.src})`,
          backgroundSize: "cover",
          //   height: "50px",
        }}
      >
        <div className=" container flex flex-row gap-2 h-12 items-center">
          <button
            className={`py-2 px-5 sm:py-4 sm:px-10 rounded-sm ${
              mission ? "bg-[#FBD300]" : "bg-white/80"
            } text-black`}
            onClick={togglemission}
          >
            Our Mission
          </button>
          <button
            className={`py-2 px-5 sm:py-4 sm:px-10 rounded-sm ${
              vision ? "bg-[#FBD300]" : "bg-white/80"
            } text-black`}
            onClick={togglevision}
          >
            Our Vision
          </button>
          <button
            className={`py-2 px-5 sm:py-4 sm:px-10 rounded-sm ${
              values ? "bg-[#FBD300]" : "bg-white/80"
            } text-black`}
            onClick={togglevalues}
          >
            Our Values
          </button>
        </div>
      </div>
      <div className=" container flex flex-col lg:flex-row  py-14 lg:gap-10 z-0">
        <div className="w-full lg:w-3/5 flex flex-col ">
          {mission && (
            <div className="flex flex-col gap-4">
              <div className="font-extrabold text-3xl">Our Mission</div>
              <p className="text-[#2E2E2E]">
                Digital DNA Brand Consulting Services: Our goal is to work with
                companies to improve their online presence by utilizing their
                brands in conjunction with fully digitally driven strategies and
                innovative ideas. Our values include meeting deadlines,
                developing real relationships, and being ahead of the curve in
                the field.
              </p>
            </div>
          )}
          {vision && (
            <div className="flex flex-col gap-4 py-8">
              <div className="font-extrabold text-3xl">Our Vision</div>
              <p className="text-[#2E2E2E]">
                Pioneering Digital Excellence: Our vision is to be the forefront
                of digital innovation, empowering businesses to thrive in the
                ever-evolving online landscape. We aspire to create impactful
                experiences, drive growth, and foster lasting connections
                between brands and their audiences.
              </p>
            </div>
          )}
          {values && (
            <div className="flex flex-col gap-4 py-8">
              <div className="font-extrabold text-3xl">Our Values</div>
              <ul className="text-[#2E2E2E] flex flex-col gap-1">
                <li>
                  <span className="font-semibold">Innovation: </span>
                  We are creative people who stay on the cutting edge of digital
                  trends and are always changing to match the needs of our
                  clients.
                </li>
                <li>
                  <span className="font-semibold">Transparency: </span>
                  With our clients, partners, and team members, we value honest,
                  open communication.
                </li>
                <li>
                  <span className="font-semibold"> Cooperation: </span>
                  We promote a cooperative atmosphere where different viewpoints
                  result in superior solutions.
                </li>
                <li>
                  <span className="font-semibold">Results-driven: </span>
                  Results-driven: Our main goal is to guarantee our clients
                  success by providing them with quantifiable outcomes.
                </li>
                <li>
                  <span className="font-semibold">Empathy: </span>
                  We are aware of the difficulties faced by our clients and
                  adjust our plans to suit their particular circumstances.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-full lg:w-2/5 lg:top-20 lg:right-0 lg:absolute">
          <Image
            src={aboutus}
            alt="banner"
            className=" w-50 h-50 lg:w-[400px]  lg:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
