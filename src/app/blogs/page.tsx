import FullBanner from "@/components/Banner/FullBanner";
import BannerBlogs from "@/components/Blogs/BannerBlogs";
import OurBlogs from "@/components/Blogs/OurBlogs";
import Newsletter from "@/components/Newsletter";

const page = () => {
  return (
    <>
      <FullBanner title="Blogs" />
      <BannerBlogs />
      <OurBlogs />
      <Newsletter />
    </>
  );
};

export default page;
