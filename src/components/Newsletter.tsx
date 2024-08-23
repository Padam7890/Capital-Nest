import React from "react";

const Newsletter = () => {
  return (
    <div className="container flex flex-col items-center gap-10 py-14">
      <div className="font-extrabold text-2xl md:text-4xl text-center w-full md:w-[650px]">
        Sign up for our <span className="text-red-100">Newsletter</span> to stay
        up to date with each news
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row justify-center gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border-[1px] border-[#C4C4C4] px-7 py-5 rounded-full w-full  lg:w-96"
        />
        <input
          type="text"
          placeholder="Your Email Address"
          className="border-[1px] border-[#C4C4C4] px-7 py-5 rounded-full w-full lg:w-96"
        />
        <button className=" text-white bg-red-100 py-5 rounded-full font-extrabold text-xl w-36">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
