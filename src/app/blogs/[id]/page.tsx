"use client";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import img from "../../../Images/Blogs/singleblogs/banner.png";
import data from "../../../components/Blogs/BlogsContent";
import SingleBlogsPage from "@/components/Blogs/SingleBlogsPage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import img1 from "../../../Images/Blogs/latestblogs/img1.png";
import img2 from "../../../Images/Blogs/latestblogs/img2.png";
import img3 from "../../../Images/Blogs/latestblogs/img3.png";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const Data = data.find((item) => item.url === path);

  const content = [
    {
      src: img1,
      url: "the-importance-of-a-strong-brand-identity-for-startups",
      title: "The Importance of a Strong Brand Identity for Startups",
    },
    {
      src: img2,
      url: "how-to-optimize-your-website-for-better-search-engine-rankings",
      title: "How to Optimize Your Website for Better Search Engine Rankings",
    },
    {
      src: img3,
      url: "top-digital-marketing-trends-to-watch-in-2024",
      title: "Top Digital Marketing Trends to Watch in 2024",
    },
  ];

  return (
    <>
      {/* <Image src={img} alt="banner" className="w-full object-cover" /> */}
      <div className="flex flex-col lg:flex-row container gap-5 pt-40 pb-8 relative">
        <div className="lg:w-2/3">
          <SingleBlogsPage content={Data} />
        </div>
        <div className=" flex flex-row lg:flex-col gap-8 p-5 lg:w-1/3">
          <div className="sticky lg:top-5">
            <div className=" bg-white p-5 mb-5 rounded-lg shadow-md">
              <span className="font-bold text-xl block mb-4">Latest Blogs</span>
              <div className="flex flex-col gap-5">
                {content.map((image, index) => (
                  <Link
                    key={index}
                    href={`/blogs/${image.url}`}
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src={image.src}
                      alt="blog img"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-base">{image.title}</div>
                      <div className="text-red-100">May 17, 2024</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <ContactForm portfolio={false} />
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
