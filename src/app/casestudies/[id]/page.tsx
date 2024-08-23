import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import img from "../../../Images/Onlineservice/banner.png";
import ImagePara from "@/components/SingleCaseStudy/ImagePara";
import SwiperPara from "@/components/SingleCaseStudy/SwiperPara";
import ListPara from "@/components/SingleCaseStudy/ListPara";
import Typography from "@/components/SingleCaseStudy/Typography";
import TechnologyStack from "@/components/SingleCaseStudy/TechnologyStack";

const page = () => {
  return (
    <>
      <Image src={img} alt="banner" className="w-full object-cover" />
      <ImagePara />
      <SwiperPara />
      <ListPara />
      <Typography />
      <TechnologyStack/>
      <Newsletter />
    </>
  );
};

export default page;
