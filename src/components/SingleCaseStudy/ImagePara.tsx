import Image from "next/image";
import React from "react";
import img from "../../Images/Onlineservice/parabanner.png";
const ImagePara = () => {
  return (
    <div className="container flex flex-col lg:flex-row  my-6">
      <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-center">
        <span className="font-extrabold text-3xl">
          Online Delivery Service App
        </span>
        <p>
          Tempus condimentum ullamcorper fermentum montes luctus nisl. Lobortis
          a tincidunt magna arcu gravida. Eu arcu non sed eget lectus aenean.
          Eget odio vel tincidunt ullamcorper morbi egestas id vivamus dui.
        </p>
        <p>
          Proin dolor quis laoreet enim. Ipsum molestie fringilla sapien ligula
          vivamus enim egestas pretium. Mauris a ullamcorper sit massa feugiat
          purus consequat duis cras. Diam aliquet feugiat consectetur vulputate
          donec velit pharetra at.
        </p>
        <p>
          Purus cum nibh commodo nec quis mi commodo ut nulla. Urna etiam
          vestibulum vitae volutpat risus ornare consequat mi velit.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={img} alt="para image" />
      </div>
    </div>
  );
};

export default ImagePara;
