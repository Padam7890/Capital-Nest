import React from "react";
import img1 from "../../Images/Blogs/blog1.png";
import img2 from "../../Images/Blogs/blog2.png";
import img3 from "../../Images/Blogs/blog3.png";
import img4 from "../../Images/Blogs/blog4.png";
import img5 from "../../Images/Blogs/blog5.png";
import img6 from "../../Images/Blogs/blog6.png";
import img7 from "../../Images/Blogs/blog7.png";
import img8 from "../../Images/Blogs/blog8.png";

import MiniBanner from "../Banner/MiniBanner";
import BlogCard from "../Landingpage/Blogs/BlogCard";
import Link from "next/link";
const OurBlogs = () => {
  const content = [
    {
      src: img1,
      url: "the-importance-of-a-strong-brand-identity-for-startups",
      title: "The Importance of a Strong Brand Identity for Startups",
      text: "For startups, building a strong brand identity is a crucial step toward long-term success. It’s more than just a logo or a catchy tagline; it’s about creating a distinct presence that resonates with your target audience and sets you apart from the competition. ",
    },
    {
      src: img2,
      url: "how-to-optimize-your-website-for-better-search-engine-rankings",
      title: "How to Optimize Your Website for Better Search Engine Rankings",
      text: "In today’s digital landscape, having a well-optimized website is essential for attracting and retaining visitors. Higher search engine rankings lead to increased visibility, traffic, and ultimately, business growth. This blog post offers practical tips on how to optimize ...",
    },
    {
      src: img3,
      url: "top-digital-marketing-trends-to-watch-in-2024",
      title: "Top Digital Marketing Trends to Watch in 2024",
      text: "Being updated with the latest trends is essential for businesses to remain competitive. In this post, we’ll highlight some of the top digital marketing trends to watch in 2024 and provide insights on how to leverage them to boost your business.",
    },
    // {
    //   src: img4,
    //   url: "top-digital-marketing-trends-to-watch-in-2024",
    //   title: "Blogs",
    // },
    // {
    //   src: img5,
    //   url: "top-digital-marketing-trends-to-watch-in-2024",
    //   title: "Blogs",
    // },
    // {
    //   src: img6,
    //   url: "top-digital-marketing-trends-to-watch-in-2024",
    //   title: "Blogs",
    // },
    // {
    //   src: img7,
    //   url: "top-digital-marketing-trends-to-watch-in-2024",
    //   title: "Blogs",
    // },
    // {
    //   src: img8,
    //   url: "top-digital-marketing-trends-to-watch-in-2024",
    //   title: "Blogs",
    // },
  ];
  // console.log(content.title);

  return (
    <div className="container">
      <div className="flex flex-col gap-7 items-center pt-16">
        <div className="text-2xl text-center md:text-4xl font-extrabold">
          Read Our technical blogs
        </div>
        <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-9 w-80 sm:w-96 md:w-full overflow-x-auto h-12">
          <li className="flex-shrink-0">All</li>
          <li className="flex-shrink-0">Mobile Apps</li>
          <li className="flex-shrink-0">Websites</li>
          <li className="flex-shrink-0">Digital Products</li>
          <li className="flex-shrink-0">Design</li>
          <li className="flex-shrink-0">Managements</li>
        </ul>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.map((image, index) => (
          <Link key={index} href={`blogs/${image.url}`}>
            <BlogCard image={image.src} title={image.title} text={image.text} />
          </Link>
        ))}
      </div>
      <div className="flex gap-5 my-10 items-center justify-center">
        <button className="px-5 py-2 bg-[#f4f3f3] rounded-full">Back</button>
        <div className="flex gap-2">
          <button className="py-2 px-4 rounded-full bg-red-100 text-white">
            1
          </button>
          <button className="border-[1px] border-[#C4C4C4] rounded-full py-2 px-4">
            2
          </button>
          <button className="border-[1px] border-[#C4C4C4] rounded-full py-2 px-4">
            3
          </button>
        </div>
        <button className="px-5 py-2 bg-red-100 rounded-full text-white">
          Next
        </button>
      </div>
      <MiniBanner titlepara={false} />
    </div>
  );
};

export default OurBlogs;
