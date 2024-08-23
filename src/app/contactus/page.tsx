import FullBanner from "@/components/Banner/FullBanner";
import ContactusPage from "@/components/ContactUs/ContactusPage";
import FAQ from "@/components/ContactUs/FAQ";
import NewContactUsPage from "@/components/ContactUs/NewContactUsPage";

import Newsletter from "@/components/Newsletter";

const page = () => {
  return (
    <>
      {/* <FullBanner title="Contact Us" /> */}
      {/* <ContactusPage /> */}
      <NewContactUsPage/>
      <FAQ />

      <Newsletter />
    </>
  );
};

export default page;
