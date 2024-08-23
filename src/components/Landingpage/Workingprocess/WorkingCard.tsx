import React from "react";
import { ScrollText } from "lucide-react";

const WorkingCard = ({
  step,
  title,
  para,
}: {
  step: number;
  title: string;
  para: string;
}) => {
  return (
    <div className="bg-white px-5 py-5 rounded-md  w-full flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="bg-[#FBD3001A] p-5 rounded-full">
          <ScrollText size={40} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-red-100">Step {step}</span>
          <span className="font-bold text-lg">{title}</span>
        </div>
      </div>
      <p className="pt-4 text-gray-600">{para}</p>
    </div>
  );
};

export default WorkingCard;
