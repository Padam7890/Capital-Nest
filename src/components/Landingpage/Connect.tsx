import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const Connect = () => {
  return (
    <div className="bg-primary hidden xl:block">
      <div className=" container mx-auto h-12 flex flex-row items-center justify-end gap-2 xl:gap-4 bg-gradient-to-r  text-[12px] md:text-sm ">
        {/* <span className="text-white text-center flex items-center justify-end  px-8"> */}
        <p className="text-white"><a href="mailto:info@edenfp.com.au">E. padamthapamoho@gmail.com</a></p>
        <p className="text-white cursor-pointer">T. (977) 9861.....</p>
        {/* </span> */}
        <Link href="#">
          <span className="flex bg-light text-black  p-[5px] rounded-lg gap-1 items-center">
            Lets Connect! <ArrowRight size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Connect;
