"use client";
import React, { useState } from "react";
import img1 from "../../Images/Blogs/blog1.png";
import img2 from "../../Images/Blogs/blog2.png";
import img3 from "../../Images/Blogs/blog3.png";

import MiniBanner from "../Banner/MiniBanner";
import BlogCard from "../Landingpage/Blogs/BlogCard";
import Link from "next/link";
import { Button, Paragraph } from "@/shared/ui/components";

const OurBlogs = () => {
  const content = [
    {
      id: 1,
      src: img1,
      url: "the-importance-of-a-strong-brand-identity-for-startups",
      title: "The Importance of a Strong Brand Identity for Startups",
      text: "For startups, building a strong brand identity is a crucial step toward long-term success. It’s more than just a logo or a catchy tagline; it’s about creating a distinct presence that resonates with your target audience and sets you apart from the competition. ",
    },
    {
      id: 2,
      src: img2,
      url: "how-to-optimize-your-website-for-better-search-engine-rankings",
      title: "How to Optimize Your Website for Better Search Engine Rankings",
      text: "In today’s digital landscape, having a well-optimized website is essential for attracting and retaining visitors. Higher search engine rankings lead to increased visibility, traffic, and ultimately, business growth. This blog post offers practical tips on how to optimize ...",
    },
    {
      id: 3,
      src: img3,
      url: "top-digital-marketing-trends-to-watch-in-2024",
      title: "Top Digital Marketing Trends to Watch in 2024",
      text: "Being updated with the latest trends is essential for businesses to remain competitive. In this post, we’ll highlight some of the top digital marketing trends to watch in 2024 and provide insights on how to leverage them to boost your business.",
    },
    {
      id: 4,
      src: img3,
      url: "top-digital-marketing-trends-to-watch-in-2024",
      title: "Top Digital Marketing Trends to Watch in 2024",
      text: "Being updated with the latest trends is essential for businesses to remain competitive. In this post, we’ll highlight some of the top digital marketing trends to watch in 2024 and provide insights on how to leverage them to boost your business.",
    },
    {
      id: 5,
      src: img3,
      url: "top-digital-marketing-trends-to-watch-in-2024",
      title: "Top Digital Marketing Trends to Watch in 2024",
      text: "Being updated with the latest trends is essential for businesses to remain competitive. In this post, we’ll highlight some of the top digital marketing trends to watch in 2024 and provide insights on how to leverage them to boost your business.",
    },
  ];

  const navMenus = [
    {
      name: "All",
      link: "#",
    },
    {
      name: "Mobile Apps",
      link: "#",
    },
    {
      name: "Websites",
      link: "#",
    },
    {
      name: "Digital Products",
      link: "#",
    },
    {
      name: "Design",
      link: "#",
    },
    {
      name: "Managements",
      link: "#",
    },
  ];

  const PERPAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(content.length / PERPAGE);

  const paginatedContent = content.slice(
    (currentPage - 1) * PERPAGE,
    currentPage * PERPAGE
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageNumber = parseInt(
      (event.target as HTMLButtonElement).innerText,
      10
    );
    setCurrentPage(pageNumber);
  };

  const handleBack = () => {
    setCurrentPage((prev) => Math.max(prev - 1,  1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-7 items-center pt-16">
        <Paragraph  size="3xl" weight="medium" >
          Read Our technical blogs
        </Paragraph>
        <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-9 w-80 sm:w-96 md:w-full overflow-x-auto h-12">
          {navMenus.map((menu, index) => (
            <li key={index} className="flex-shrink-0">
              {menu.name}
            </li>
          ))}{" "}
        </ul>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedContent.map((image, index) => (
          <Link key={index} href={`blogs/${image.url}`}>
            <BlogCard image={image.src} title={image.title} text={image.text} />
          </Link>
        ))}
      </div>
      <div className="flex gap-5 my-10 items-center justify-center">
        <Button
          onClick={handleBack}
          className="px-5 py-2 bg-[#f4f3f3] rounded-full"
          disabled={currentPage === 1}
        >
          Back
        </Button>
        <div className="flex gap-2">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((num) => (
            <Button
              key={num}
              onClick={handleClick}
              className={`py-2 px-4 rounded-full ${
                currentPage === num
                  ? "bg-red-100 text-white"
                  : "bg-[#f4f3f3] text-black"
              }`}
            >
              {num}
            </Button>
          ))}
        </div>
        <Button
          onClick={handleNext}
          className="px-5 py-2 bg-red-100 rounded-full text-white"
          disabled={currentPage === pageCount}
        >
          Next
        </Button>
      </div>
      <MiniBanner titlepara={true} />
    </div>
  );
};

export default OurBlogs;
