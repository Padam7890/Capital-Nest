import React from "react";
import Image from "next/image";
import img11 from "../../Images/Cases/casestudy1.png";
import img12 from "../../Images/Cases/casestudy2.png";
import img13 from "../../Images/Cases/casestudy3.png";
import img1 from "../../Images/Cases/casestudy6.png";
import img2 from "../../Images/Cases/casestudy7.png";
import img3 from "../../Images/Cases/casestudy8.png";
import img4 from "../../Images/Cases/casestudy4.png";
import img5 from "../../Images/Cases/casestudy5.png";
import { SwiperCaseStudy } from "../Landingpage/CaseStudies/SwiperCaseStudy";
import Link from "next/link";
import ServicePara from "./ServicePara";
import data from "./ServiceContent";

const ServicePage = ({ data }: { data: any }) => {
  const swiperimage = [
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img11 },
    { src: img12 },
  ];
  const content = [
    { title: "Brand Consulting", url: "brand-consulting", img: img1 },
    {
      title: "Logo & Brand Guidelines",
      url: "logo-&-brand-guidelines",
      img: img2,
    },
    {
      title: "Website & App Development",
      url: "website-&-app-development",
      img: img3,
    },
    {
      title: "Digital Marketing & Content Creation",
      url: "digital-marketing-&-content-creation",
      img: img1,
    },
    {
      title: "Social Media Management",
      url: "social-media-management",
      img: img4,
    },
    {
      title: "Business Lead Generation",
      url: "business-lead-generation",
      img: img4,
    },
  ];

  return (
    <div className="container flex flex-col xl:flex-row mt-10 gap-6 relative">
      <div className="flex flex-col w-full xl:w-2/3">
        <ServicePara content={data} />
        <div className="xl:hidden">
          <SwiperCaseStudy image={swiperimage} />
        </div>
      </div>
      <div className="hidden xl:flex xl:w-1/3">
        <div className="w-full  flex flex-col">
          <div className="sticky top-5 rounded-sm  px-5 pt-5  border-[0.5px] border-[#e2e2e2]">
            <span className="font-bold text-2xl">Services</span>
            {content.map((value, index) => (
              <>
                <Link
                  href={`/service/${value.url}`}
                  key={index}
                  className="flex gap-2 my-4"
                >
                  <Image
                    src={value.img}
                    alt="case img"
                    className="object-cover w-[15%] rounded-full"
                  />
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="font-bold">{value.title}</div>
                  </div>
                </Link>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
