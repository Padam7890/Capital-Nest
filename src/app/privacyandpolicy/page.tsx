import FullBanner from "@/components/Banner/FullBanner";
import Newsletter from "@/components/Newsletter";
import TermsAndConditionPage from "../../components/PrivacyAndPolicyPage";
import PrivacyAndPolicyPage from "../../components/PrivacyAndPolicyPage";

const page = () => {
  return (
    <>
      <FullBanner
        title="Terms & Conditions"
      />
      <PrivacyAndPolicyPage />
      <Newsletter />
    </>
  );
};

export default page;
