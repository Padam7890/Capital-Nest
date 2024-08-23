import Image from "next/image";
import React from "react";
// import whoarewe from "../../Images/Whoarewe.png";
import whoarewe from "@/Images/sideimageupdate.jpg"
import { Minus } from "lucide-react";
const WhoAreWe = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-10 py-10 bg-prima">
      <div className="lg:w-2/5">
        <Image src={whoarewe} alt="banner photo" className="rounded"></Image>
      </div>
      <div className=" w-full px-10 sm:px-20 lg:px-0 lg:w-[43%] flex flex-col  gap-10  ">
        <div>
          <h6 className="flex text-lg font-bold text-[#8E8E8E] items-end">
            Welcome to CapitaNest Financial Partners
            {/* <Minus size={30} /> */}
          </h6>
          <h1 className=" title-text pt-3 mb-3 whitespace-nowrap ">
          CapitaNest {" "}
            <span className="text-primary ">Financial Partners: </span> Your <br/> Path to Stress-Free Financing
          </h1>
          <div className=" flex flex-col gap-2 text-[#475569]  pt-2">
            <p className="">
            At CapitaNest Financial Partners, our vision is embodied in our name CapitaNest. We strive to make obtaining finance as stress-free and straightforward as possible. Applying for a loan often feels overwhelming, requiring significant time, patience, and resources. Our mission is to simplify this process for you , making it as seamless and efficient as possible.


            </p>
            <p className="text-2xl text-black py-1">
            Our Commitment to Excellence{" "}
            </p>
            <p>
            {/* We are dedicated to going above and beyond in all our interactions. We explore every possible solution for our clients, ensuring we are always reachable, responsive, and uphold the highest standards of honesty, integrity, and professionalism. */}
            We are dedicated to exceeding expectations in all our interactions. Our commitment to excellence drives us to explore every possible solution for our clients, ensuring we provide the best options tailored to individual needs. We pride ourselves on being always reachable and responsive, ready to address any questions or concerns you may have.

            </p>
            <p>
            Upholding the highest standards of honesty, integrity, and professionalism is at the core of our values. We believe in transparent and open communication, fostering trust and building long-term relationships with our clients. At CapitaNest Financial Partners, your financial well-being is our priority, and we are here to support you every step of the way.
            </p>
          </div>
          {/* <hr className="my-6 h-1 bg-[#C4C4C4]" /> */}
          {/* <div className="flex justify-between">
            <span className="flex flex-col">
              <span className="font-black text-2xl md:text-4xl">
                50 <span className="text-primary">+</span>
              </span>
              <span className="text-[#8E8E8E] font-semibold text-sm">
                Happy Startups
              </span>
            </span>
            <span className="flex flex-col">
              <span className="font-black text-2xl md:text-4xl">
                100 <span className="text-primary">+</span>
              </span>
              <span className="text-[#8E8E8E] font-semibold text-sm">
                Projects Realized
              </span>
            </span>
            <span className="flex flex-col">
              <span className="font-black text-2xl md:text-4xl">
                165 <span className="text-primary">+</span>
              </span>
              <span className="text-[#8E8E8E] font-semibold text-sm">
                Future Innovations
              </span>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
