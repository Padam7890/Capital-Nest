import React from "react";
import ParaImage from "../ParaImage";

const SingleBlogsPage = ({ content }: { content: any }) => {
  return (
    <div className="">
      <ParaImage content={content} />
    </div>
  );
};

export default SingleBlogsPage;
