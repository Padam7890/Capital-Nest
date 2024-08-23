import React from "react";
import banner from "../../Images/Banner/minibanner.png";
import { ArrowRight, Dice1 } from "lucide-react";
const MiniBanner = ({ titlepara }: { titlepara: boolean }) => {
  return (
    <div
      className="flex text-white p-6 rounded-md mt-5 mb-9"
      style={{
        background: `url(${banner.src})`,
        backgroundSize: "cover",
      }}
    >
      {titlepara ? (
        <div className="flex flex-col md:flex-row gap-3 ">
          <div className="flex flex-col w-full md:w-3/4 gap-3">
            <div className="font-semibold text-sm">
              Lets Create Big Stories Together!
            </div>
            <div className="font-extrabold text-3xl">
              Share your <span className="text-[#FBD300]">Project Details</span>{" "}
              to build your path toward success.
            </div>
          </div>
          <div className="w-full md:w-1/4 flex items-center">
            <button className="flex justify-center items-center gap-2 py-3 rounded-full border-2 border-white w-full">
              Get A Quote
              <span className="bg-white p-1 rounded-full">
                <ArrowRight color="#EB3352" />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col w-full md:w-3/5 lg:w-4/5 gap-3">
            <div className="font-extrabold text-3xl">
              Your success is our success!
            </div>
            <div className="font-semibold text-sm w-full lg:w-[450px]">
              We’d Love To Partner With You And Take Some Of The Load Off Your
              Shoulders.
            </div>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/5 flex items-center">
            <button className="flex justify-center items-center gap-2 py-3 rounded-full border-2 border-white w-full">
              Get A Quote
              <span className="bg-white p-1 rounded-full">
                <ArrowRight color="#EB3352" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniBanner;
