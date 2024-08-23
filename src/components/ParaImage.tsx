import Image from "next/image";
import React from "react";

const ParaImage = ({ content }: { content: any }) => {
  const { maintitle, para1, para2, img, child, secondtitle, secondchild } =
    content;

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold mb-4">{maintitle}</h1>
      <Image
        src={img}
        alt="Web Design"
        width={800}
        height={600}
        className="w-full h-auto mb-4"
      />
      <p className="mb-4">{para1}</p>
      <p className="mb-4">{para2}</p>
      <div className="mb-9">
        {child.map((item: any, index: number) => (
          <div key={index} className="mb-5">
            <h2 className="text-base md:text-2xl font-semibold mb-2">
              {item.title}
            </h2>
            {item.title === "iOS App Development" ? (
              <ul className="list-disc list-inside">
                {item.para &&
                  item.para.map((paraItem: any, paraIndex: number) => (
                    <li key={paraIndex} className="mb-2">
                      {paraItem.p}
                    </li>
                  ))}
              </ul>
            ) : (
              item.para &&
              item.para.map((paraItem: any, paraIndex: number) => (
                <p key={paraIndex} className="mb-2">
                  {paraItem.p}
                </p>
              ))
            )}
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-4">{secondtitle}</h1>
      <div className="">
        {secondchild?.map((sitem: any, sindex: number) => (
          <div key={sindex} className="mb-5">
            <h2 className="text-2xl font-semibold mb-2">{sitem.title}</h2>
            {sitem.para.map((paraItem: any, paraIndex: number) => (
              <p key={paraIndex} className="mb-2">
                {paraItem.p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParaImage;
