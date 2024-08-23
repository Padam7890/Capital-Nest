import FullBanner from "@/components/Banner/FullBanner";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";

import TrustedBy from "@/components/TrustedBy";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
       <FullBanner title="Food Ordering Website" />
      <PortfolioBanner />
      <div className="container">
        <ContactForm portfolio={true} />
      </div>
      <TrustedBy />
      <Newsletter />
    </div>
  );
};

export default page;
