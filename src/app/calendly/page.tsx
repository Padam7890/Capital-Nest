"use client";


import React, { useEffect } from "react";
import FullBanner from "@/components/Banner/FullBanner";

const Page = () => {
  useEffect(() => {
    // Dynamically add the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <FullBanner title="Booking Schedule" />
      <div className="container mt-10">
        <iframe
          src="https://calendly.com/padamthapamoho/30min"
          style={{ width: "100%", height: "700px", border: "0" }}
          sandbox="allow-scripts allow-same-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Page;
