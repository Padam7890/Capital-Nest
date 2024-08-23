"use client";
import React, { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";
const FAQ = () => {
  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const content = [
    {
      title: "What services does Brando Digital offer?",
      ans: "Brando Digital offers a range of digital marketing services, including SEO, PPC advertising, social media management, content marketing, email marketing, and web design and development. Additionally, we provide web and mobile app development and custom ERP products.",
    },
    {
      title: "How can Brando Digital help my business grow?",
      ans: "Brando Digital helps businesses grow by increasing online visibility, driving targeted traffic, enhancing customer engagement, and improving conversion rates through tailored digital marketing strategies. Our web and mobile app development services also ensure your business has a strong digital presence, while our custom ERP solutions streamline your business operations.",
    },
    {
      title: "What is your approach to SEO?",
      ans: "Our SEO approach involves comprehensive keyword research, on-page optimization, high-quality content creation, technical SEO, and building high-quality backlinks to improve your search engine rankings.",
    },
    {
      title:
        "How do you measure the success of your digital marketing campaigns?",
      ans: "We measure success through various metrics such as website traffic, conversion rates, click-through rates (CTR), return on investment (ROI), and engagement metrics across different platforms.",
    },
    {
      title: "Can you manage our social media accounts?",
      ans: "Yes, we offer social media management services which include content creation, scheduling, posting, monitoring, and engaging with your audience across all major social media platforms.",
    },
    {
      title: "What is your pricing model?",
      ans: "Our pricing model varies based on the specific services and the scope of the project. We offer customized packages tailored to meet the unique needs and budgets of our clients.",
    },
    {
      title:
        "How long does it take to see results from digital marketing efforts?",
      ans: "The timeline for seeing results can vary depending on the strategies employed and the competitiveness of your industry. Generally, SEO results can take a few months, while PPC and social media campaigns can yield quicker results. Development projects, such as websites, mobile apps, and ERP systems, have their own timelines based on complexity.",
    },
    {
      title: "Do you provide custom digital marketing strategies?",
      ans: "Yes, we create custom digital marketing strategies based on an in-depth analysis of your business, target audience, industry trends, and competitive landscape.",
    },
    {
      title: "What platforms do you specialize in for PPC advertising?",
      ans: "We specialize in PPC advertising on platforms such as Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and other relevant channels.",
    },
    {
      title: "How can I get started with Brando Digital?",
      ans: "Getting started is easy! Contact us through our website, and we’ll schedule an initial consultation to discuss your business goals and how our services, including digital marketing, web and mobile app development, and custom ERP solutions, can help you achieve them.",
    },
    {
      title:
        "What kind of web and mobile app development services do you offer?",
      ans: "We offer full-cycle web and mobile app development services, from initial concept and design to development, testing, and deployment. We work with various technologies to create user-friendly and high-performing applications tailored to your business needs.",
    },
    {
      title: "Can you develop custom ERP solutions for my business?",
      ans: "Yes, we specialize in developing custom ERP (Enterprise Resource Planning) solutions designed to meet the unique requirements of your business, helping you streamline operations, improve efficiency, and gain actionable insights.",
    },
    {
      title: "What industries do you serve with your custom ERP products?",
      ans: "Our custom ERP solutions cater to a wide range of industries, including manufacturing, retail, healthcare, education, and more. We tailor each solution to fit the specific needs and processes of your industry.",
    },
    {
      title: "How do you ensure the quality of your web and mobile apps?",
      ans: "We follow a rigorous development process that includes thorough testing and quality assurance at every stage. Our team uses best practices and the latest technologies to ensure our web and mobile apps are reliable, secure, and user-friendly.",
    },
  ];
  console.log(content[0].title);

  return (
    <div className=" bg-[#f7f7f7] mt-10 py-12">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col text-center gap-3 items-center justify-center">
          <div className="font-extrabold text-3xl">
            Frequently Asked Questions
          </div>
          <p className="text-[#2E2E2E] w-full lg:w-[580px] text-center">
            Tempus condimentum ullamcorper fermentum montes luctus nisl.
            Lobortis a tincidunt magna arcu gravida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* {content.map((value, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                <div>{value.title}</div>
                <div onClick={() => setShow(!show)}>
                  <CirclePlus />
                </div>
              </div>
              {show && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{value.ans}</div>
                </div>
              )}
            </div>
          ))} */}
          <div className="flex flex-col gap-3">
            <div
              className={`flex flex-col gap-2 ${
                show0 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              <div
                className="flex justify-between py-5 px-6 bg-white rounded-md hover:cursor-pointer"
                onClick={() => setShow0(!show0)}
              >
                <div>{content[0].title}</div>
                <div>
                  {show0 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show0 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md ">
                  <div>{content[0].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show1 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow1(!show1)}
              >
                <div>{content[1].title}</div>
                <div>
                  {show1 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show1 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[1].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show2 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow2(!show2)}
              >
                <div>{content[2].title}</div>
                <div>
                  {show2 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show2 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[2].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show3 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow3(!show3)}
              >
                <div>{content[3].title}</div>
                <div>
                  {show3 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show3 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[3].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show4 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow4(!show4)}
              >
                <div>{content[4].title}</div>
                <div>
                  {show4 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show4 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[4].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show5 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow5(!show5)}
              >
                <div>{content[5].title}</div>
                <div>
                  {show5 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show5 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[5].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show6 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow6(!show6)}
              >
                <div>{content[6].title}</div>
                <div>
                  {show6 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show6 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[6].ans}</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className={`flex flex-col gap-2 ${
                show7 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow7(!show7)}
              >
                <div>{content[7].title}</div>
                <div>
                  {show7 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show7 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[7].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show8 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow8(!show8)}
              >
                <div>{content[8].title}</div>
                <div>
                  {show8 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show8 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[8].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show9 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow9(!show9)}
              >
                <div>{content[9].title}</div>
                <div>
                  {show9 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show9 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[9].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show10 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow10(!show10)}
              >
                <div>{content[10].title}</div>
                <div>
                  {show10 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show10 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[10].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show11 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow11(!show11)}
              >
                <div>{content[11].title}</div>
                <div>
                  {show11 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show11 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[11].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show12 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow12(!show12)}
              >
                <div>{content[12].title}</div>
                <div>
                  {show12 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show12 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[12].ans}</div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                show13 ? "text-black" : "text-[#2e2e2e]"
              }`}
            >
              {" "}
              <div
                className="flex justify-between py-5 px-6 bg-white hover:cursor-pointer rounded-md"
                onClick={() => setShow13(!show13)}
              >
                <div>{content[13].title}</div>
                <div>
                  {show13 ? <CircleMinus color="red" /> : <CirclePlus />}
                </div>
              </div>
              {show13 && (
                <div className="flex justify-between py-5 px-6 bg-white rounded-md">
                  <div>{content[13].ans}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
