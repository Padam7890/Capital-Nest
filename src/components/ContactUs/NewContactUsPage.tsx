
"use client"
import React from "react";
import Demo from "../../Images/Contact/demo1.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const NewContactUsPage = () => {
  return (
    <div className="">
      <div
        className="relative min-h-screen bg-fixed bg-cover  bg-center"
        style={{ backgroundImage: `url(${Demo.src})` }}
      >
        <div className="flex items-center  px-10 justify-center min-h-screen bg-slate-600 bg-opacity-50 pb-10 pt-10 ">
          <div className="flex flex-col md:flex-row max-w-[60rem] bg-primary mt-16 md:mt-114  rounded-lg  justify-center">
            <div className="w-full md:w-1/2 py-10  h-full ">
              <div className=" flex  flex-col text-white  gap-3 items-start justify-center">
                <div className="contact_details">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ml-9">
                      <div>
                        <div className="flex gap-1">
                          <MapPin color="#ccc" />
                          <div className="font-bold text-lg">Address</div>
                        </div>
                        <span className="text-[#ccc]">
                        Suite 1017, level 10, 420 George St, Sydney NSW 2000
                        </span>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          <Phone color="#ccc" />
                          <div className="font-bold text-lg">Phone</div>
                        </div>
                        <span className="text-[#ccc]">(02) 9861</span>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          <Mail color="#ccc" />
                          <div className="font-bold text-lg">Email</div>
                        </div>
                        <span className="text-[#ccc]">padamthapamoho@gmail.com</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-xl">Working Hours</span>
                        <ul className="text-[#ccc] list-disc ">
                          <li>10:00 AM - 6:00 PM</li>
                          <li>Holidays on Saturday</li>
                        </ul>
                      </div>
                    </div>
                    <hr className="w-full " />
                  </div>
                </div>
                <div className="ml-9 mr-2  tracking-wide">
                  <h3 className=" text-2xl mt-8">
                  We are open to <span>Partnership&nbsp;!</span>
                  </h3>
                  <div className=" max-w-[80%] mt-8">
                    <p className=" text-base text-stone-200">
                      At Capital Nest Financial Partners, we&rsquo;re here to help you
                      navigate your financial journey with confidence. Whether
                      you&rsquo;re looking for expert loan brokerage services or have
                      questions about our offerings, our team is ready to assist
                      you.
                    </p>
                  </div>
                  <div className=" mt-7">
                    <button className=" bg-white text-black px-6 py-2 rounded-md uppercase">
                      Become A partner
                    </button>
                  </div>
                </div>
              </div>
              {/* <h3>
            We are open to <span>Partnership</span> 
           </h3> */}
            </div>
            <div className="bg-white w-full md:w-1/2 p-8 rounded-lg shadow-lg  ">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848300.8253314648!2d150.27255546310082!3d-33.84648855820782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2snp!4v1724395754303!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default NewContactUsPage;
