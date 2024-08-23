import React from "react";
import Background from "../../../Images/work.jpeg";
import WorkingCard from "./WorkingCard";
const Workingprocess = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(9, 0, 1, 0.8), rgba(9, 0, 1, 1)), url(${Background.src})`,
        // backgroundColor: "#090001",
      }}
      className="py-14 flex flex-col gap-10 "
    >
      <div className="flex flex-col items-center container">
        <span className="text-lg font-bold text-red-100">
          Our Working Process
        </span>
        <h2 className="font-extrabold text-2xl md:text-4xl text-white w-full md:w-[650px] text-center">
          Here is how we work to Grow Your Online Presence
        </h2>
      </div>
      <div className="container flex lg:grid lg:grid-cols-4 gap-6 overflow-auto">
        <WorkingCard
          step={1}
          title={"Plan & Analyze"}
          para="We initiate by comprehensively understanding your objectives, target demographic, and technical prerequisites. This phase involves outlining the project's scope, estimating budgetary requirements, and establishing a timeline for execution."
        />
        <WorkingCard
          step={2}
          title={"Design & Prototype"}
          para="Next, we delve into the creative process, conceptualizing the user journey and crafting intuitive interfaces. Through the creation of wireframes and prototypes, we ensure alignment with your vision while allowing for iterative feedback and refinement."
        />
        <WorkingCard
          step={3}
          title={"Develop & Test"}
          para="With designs approved, our development team brings your vision to life, adhering to industry best practices and coding standards. Rigorous testing is conducted to ensure functionality, performance, and security, addressing any bugs or issues prior to launch."
        />
        <WorkingCard
          step={4}
          title={"Deploy & Support"}
          para="Upon completion, we deploy your website or app to the chosen hosting environment, managing the launch process to ensure a seamless transition. Our commitment extends beyond launch, providing ongoing maintenance and support to optimize performance and user experience."
        />
      </div>
    </div>
  );
};

export default Workingprocess;
