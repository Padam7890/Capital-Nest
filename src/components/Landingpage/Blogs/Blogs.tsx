'use client'
import React from "react";
import BlogCard from "./BlogCard";
import img3 from "../../../Images/news1.jpg";
import img2 from "../../../Images/news2.jpg";
import img1 from "../../../Images/news3.jpg";
import Link from "next/link";
import Slider from "react-slick";

const Blogs = () => {
  const content = [
    {
      src: img1,
      url: "#",
      title: "Maximizing Your Home Loan Benefits: Tips and Strategies",
      text: "Securing a home loan is a major step in buying your dream home, but navigating the process can be overwhelming. At CapitaNest Financial Partners, we want to help you make the most of your home loan. In this blog, we share essential tips and strategies to maximize your loan benefits, from understanding interest rates to improving your credit score. Discover how to simplify your home loan process and achieve financial success with our expert advice.",
    },
    {
      src: img2,
      url: "#",
      title: "The Importance of Financial Planning: How to Build a Strong Financial Future",
      text: "Effective financial planning is crucial for achieving long-term success and security. At CapitaNest Financial Partners, we believe that a well-thought-out financial plan can make a significant difference in your financial health. Our blog explores the fundamentals of financial planning, including setting goals, creating a budget, and investing wisely. Read on to learn how to develop a robust financial plan that will support your goals and ensure a stable financial future.",    },
    {
      src: img3,
      url: "#",
      title: "Understanding Business Loans: A Guide for Entrepreneurs",
      text: "Starting or expanding a business often requires financial support, and business loans can be a valuable resource. But with so many options available, how do you choose the right one? In our latest blog post, we break down the key factors to consider when applying for a business loan, including loan types, interest rates, and repayment terms. Learn how to make informed decisions and secure the funding you need to grow your business with confidence.",

    },
  ];
  return (
    <div className="conatiner mx-auto flex flex-col">
      <div className="flex flex-col items-center gap-2 mb-5">
        <h2 className=" title-text">
          Latest News & Blog{" "}
        </h2>
      </div>

      <Slider 
        dots={true}
        infinite={true}
        speed={1000}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        arrows={false}
        

        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ]}
     className="flex container mx-auto " >

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        {/* <BlogCard
          image={img1}
          title={"The Importance of a Strong Brand Identity for Startups"}
        />
        <BlogCard
          image={img2}
          title={
            "How to Optimize Your Website for Better Search Engine Rankings"
          }
          />
          <BlogCard
          image={img3}
          title={"top-digital-marketing-trends-to-watch-in-2024"}
          /> */}


        {content.map((image, index) => (
         
          <div key={index} className="p-5 mb-4">
            <BlogCard
              image={image.src}
              title={image.title}
              text={image.text}
            />
          </div>
          
        ))}
      {/* </div> */}
      {/* <button className="border-[1px] border-black rounded-full w-32 py-3 mt-7 font-bold">
        View More
        </button> */}
        </Slider>
    </div>
  );
};

export default Blogs;
