import Banner from "@/components/Banner/Banner";
import Blogs from "@/components/Landingpage/Blogs/Blogs";
import Casestudies from "@/components/Landingpage/CaseStudies/Casestudies";
import Featured from "@/components/Landingpage/Featured/Featured";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Landingpage/Portfolio/Portfolio";
import Testimonial from "@/components/Landingpage/Testimonial/Testimonial";
import TrustedBy from "@/components/TrustedBy";
import Workingprocess from "@/components/Landingpage/Workingprocess/Workingprocess";
import React from "react";
import WhoAreWe from "@/components/Landingpage/WhoAreWe";
import Service from "@/components/Landingpage/Services/Service";
import ChooseUs from "@/components/Landingpage/ChooseUs";
import Testimonials from "@/components/testimonials/Testimonials";
import FaqSection from "@/components/faq/FaqSection";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
const page = () => {
  return (
    <div>
      <Banner />
      <WhoAreWe />
      <Service />
      <WhyChooseUs/>
      {/* <Workingprocess /> */}
      <Portfolio />
      {/* <Casestudies /> */}
      {/* <ChooseUs /> */}
      {/* <Testimonial /> */}
      <Testimonials/>
      <Blogs />
      {/* <Newsletter /> */}
      <FaqSection />
      <TrustedBy />
      
    </div>
  );
};

export default page;
