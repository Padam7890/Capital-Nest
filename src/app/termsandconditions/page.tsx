import FullBanner from "@/components/Banner/FullBanner";
import Newsletter from "@/components/Newsletter";
import TermsAndConditionPage from "../../components/TermsAndConditionPage";

const page = () => {
  return (
    <>
      <FullBanner title="Terms & Conditions" />
      <TermsAndConditionPage />
      <Newsletter />
    </>
  );
};

export default page;
