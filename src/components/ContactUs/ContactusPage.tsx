"use client";
import React, { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactusPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-6 w-full my-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="font-extrabold text-3xl">Contact Us</div>
            <p className="text-[#2E2E2E]">
              Reach out to Us for Expert Solutions and Personalized Support!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-7">
              <div>
                <div className="flex gap-1">
                  <MapPin color="#EB3352" />
                  <div className="font-bold text-lg">Address</div>
                </div>
                <span className="text-[#8E8E8E]">
                Suite 1017, level 10, 420 George St, Sydney NSW 2000
                </span>
              </div>
              <div>
                <div className="flex gap-1">
                  <Phone color="#EB3352" />
                  <div className="font-bold text-lg">Phone</div>
                </div>
                <span className="text-[#8E8E8E]">(977) 9861</span>
              </div>
              <div>
                <div className="flex gap-1">
                  <Mail color="#EB3352" />
                  <div className="font-bold text-lg">Email</div>
                </div>
                <span className="text-[#8E8E8E]">padamthapamoho@gmail.com</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="font-bold text-xl">Working Hours</span>
              <ul className="text-[#2E2E2E] list-disc p-5">
                <li>10:00 AM - 6:00 PM</li>
                <li>Holidays on Saturday</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div
            className="visme_d"
            data-title="Stylish Contact Form"
            data-url="8r6g9kgm-stylish-contact-form"
            data-domain="forms"
            data-full-page="false"
            data-min-height="500px"
            data-form-id="75051"
          ></div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13250.049499508237!2d151.2059567!3d-33.8764557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12affdecaa9533%3A0x143b7bad1ab511f5!2sEden%20Financial%20Partners!5e0!3m2!1sen!2snp!4v1723819754819!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactusPage;
