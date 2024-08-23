"use client";
import FullBanner from "@/components/Banner/FullBanner";
import Newsletter from "@/components/Newsletter";
import ServicePage from "@/components/Service/ServicePage";
import { usePathname } from "next/navigation";
import data from "../../../components/Service/ServiceContent";
export default function Page() {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const Data = data.find((item) => item.url === path);
  return (
    <>
      <FullBanner title={Data?.maintitle} />
      <ServicePage data={Data} />
      <Newsletter />
    </>
  );
}
