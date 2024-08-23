import React from "react";

const Typography = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
      <div className="flex flex-col gap-3">
        <span className="font-bold text-2xl">Typography</span>
        <span className="font-black text-8xl">Aa</span>
        <span className="font-bold text-xl">Mulish</span>
        <div className="flex gap-2">
          <p>
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww
            Xx Yy Zz
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-2xl">Color Palettes</span>
        <div className="flex gap-3">
          <div>
            <div className="bg-red-100 h-28 w-16 rounded-full"></div>
            <span>#DF3832</span>
          </div>
          <div>
            <div className="bg-[#F7BD2E] h-28 w-16 rounded-full"></div>
            <span>#F7BD2E</span>
          </div>
          <div>
            <div className="bg-[#53B3E5] h-28 w-16 rounded-full"></div>
            <span>#53B3E5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
