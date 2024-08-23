import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="flex flex-col gap-6 py-14 bg-primary px-4 md:px-10 xl:px-20">
       <div className="px-5 flex flex-col justify-center items-center mb-4 gap-4 text-center">
                <h2 className="text-white text-[18px] mb-2">Our Services
                    {/* line small */}
                    <div className="bg-white h-[1px] w-12 mt-1 mx-auto"></div>
                </h2>
                
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Financial Solutions for Every Need</h2>
            {/* <div className="flex justify-between  flex-col lg:flex-row"> */}
                <div className="w-[80%] mx-auto ">
            <p className=" text-[14px] text-white mb-3 text-center ">
            At CapitaNest Financial Partners, we offer a variety of loan services to meet your diverse financial needs. Whether you&apos;re looking to buy a home, expand your business, or manage personal expenses, our expert team is here to guide you through every step. Explore our loan options below to find the perfect solution for you.
            </p>
                {/* <p className=" text-[14px] text-white mb-3">We aim to provide guidance and support that is sensitive to your varying needs, and we can help you navigate your financial journey with confidence and clarity.</p> */}
                </div>
                {/* View All Clients buttons */}
{/* 
                <div className="flex lg:justify-end">
                    <button className=" underline-offset-2 text-white underline  rounded-full">View All Clients</button>
                    </div> */}
            {/* </div> */}
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 ">
        <ServiceCard
          url="#"
          title="Home Loans"
          color={"#42cff0"}
          text="Secure the ideal home loan with our expert assistance. We provide customized solutions for buying or refinancing your home, making the process simple and efficient."
        />
        <ServiceCard
          url="logo-&-brand-guidelines"
          title="Commercial Loans"
          color={"#fff"}
          text="Expand or refinance your commercial property with our flexible financing options. We offer tailored solutions to support your business growth and property needs."
        />
        <ServiceCard
          url="#"
          title="Business Loans
"
          color={"#00BFFB"}
          text="Fuel your business’s growth with our business loans. We provide capital for start-ups, expansions, and more, with personalized support to get you the best terms.
"
        />
        <ServiceCard
          url="#"
          title="Personal Loans"
          color={"#00BFFB"}
          text="Manage personal expenses or consolidate debt with our straightforward personal loans. Enjoy competitive rates and flexible terms to fit your needs.
"
        />
        <ServiceCard
          url="#n"
          title="Asset and Equipment Finance"
          color={"#42cff0"}
          text=" Acquire essential assets and equipment with our flexible financing options. We help you get the machinery and technology you need without straining your budget.
"

        />
        <ServiceCard
          url="#"
          title="Private Loans"
          color={"#fff"} 
          text="
          For specialized financing needs, our private loans offer customized solutions. We work with you to tailor financing options that align with your goals.
"
          />
      </div>
    </div>
  );
};

export default Service;
