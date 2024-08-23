import FullBanner from "@/components/Banner/FullBanner";

import Newsletter from "@/components/Newsletter";
import PortfolioPage from "@/components/Portfolio/PortfolioPage";

const page = () => {
  return (
    <>
      <FullBanner title="Portfolio" />
      <PortfolioPage />
      <Newsletter />
    </>
  );
};

export default page;
