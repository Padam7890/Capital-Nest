"use client";
import React, { useState } from "react";
import Slider from "react-input-slider";

const ContactForm = ({ portfolio }: { portfolio: boolean }) => {
  const [state, setState] = useState({ x: 500 });

  return (
    <div>
      <div
        className={`flex flex-col gap-6 w-full ${
          portfolio ? "border-none" : "border-[1px]"
        } border-[#C4C4C4] p-6 rounded-md`}
      >
        {portfolio ? (
          <div className="flex flex-col items-center">
            <div className="font-bold text-2xl">Feel Free to Contact Us!</div>
            <p>
              Tempus condimentum ullamcorper fermentum montes luctus nisl.
              Lobortis a tincidunt magna arcu gravida.
            </p>
          </div>
        ) : (
          <div className="font-bold text-2xl">Get In Touch With Us</div>
        )}

        <div className="flex gap-3">
          <input
            placeholder="Full Name"
            type="text"
            className="border-2 border-gray-300 focus:border-red-500 rounded-full p-2 w-1/2"
          />
          <input
            placeholder="Your Email"
            type="text"
            className="border-2 border-gray-300 focus:border-red-500 rounded-full p-2 w-1/2"
          />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Enter Number"
            type="text"
            className="border-2 border-gray-300 focus:border-red-500 rounded-full p-2 w-1/2"
          />
          <input
            placeholder="Whatsapp Number"
            type="text"
            className="border-2 border-gray-300 focus:border-red-500 rounded-full p-2 w-1/2"
          />
        </div>
        <input
          placeholder="Enter Address/Location"
          type="text"
          className="border-2 border-gray-300 focus:border-red-500 rounded-full p-2 w-full"
        />
        <div className="flex flex-col gap-2">
          <div className="font-semibold">
            Project Budget:<span className="text-red-100">{"$" + state.x}</span>
          </div>
          <Slider
            axis="x"
            xstep={100}
            xmin={500}
            xmax={10000}
            x={state.x}
            onChange={({ x }) => setState({ x: parseFloat(x.toFixed(2)) })}
            styles={{
              active: {
                backgroundColor: "red",
              },
              thumb: {
                backgroundColor: "red",
                width: 20,
                height: 20,
                opacity: 0.8,
              },
            }}
          />
        </div>
        <textarea
          placeholder="Describe Message"
          className="border-2 border-gray-300 focus:border-red-500 rounded-lg p-2 w-full h-40"
        />
        <button className="bg-red-100 text-white rounded-sm w-full py-4">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
