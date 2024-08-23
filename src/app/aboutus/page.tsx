import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import FullBanner from "@/components/Banner/FullBanner";
import ChooseUs from "@/components/Landingpage/ChooseUs";
import WhoAreWe from "@/components/Landingpage/WhoAreWe";

import Newsletter from "@/components/Newsletter";
import TrustedBy from "@/components/TrustedBy";

const page = () => {
  return (
    <>
      <FullBanner title="About Us" />
      <WhoAreWe />
      <AboutUsPage />
      <ChooseUs />
      <Newsletter />
    </>
  );
};

export default page;
