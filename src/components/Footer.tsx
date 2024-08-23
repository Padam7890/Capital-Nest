import Image from "next/image";
import React from "react";
import logo from "../Images/Brando-Logo.png";
import map from "../Images/map.png";
import map1 from "../Images/worldmap.png";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black pb-8">
      <div className="container flex flex-col gap-14 pb-5">
        <div className=" text-white pt-14 flex flex-col lg:flex-row lg:gap-10 ">
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="flex flex-col gap-6 w-full">
              <Image src={logo} alt="logo" />
              <p className="text-[#8E8E8E] w-full">
                Brando Digital is a startup specializing in brand consulting,
                digital marketing, and web and app development. We create
                tailored strategies and engaging content to boost your online
                presence and drive growth. Our expert team ensures your brand
                stands out and thrives.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-extrabold text-xl">Follow Us:</div>
              <div className="flex gap-2">
                <Link href="https://www.facebook.com/brando.digital97761/">
                  <Facebook
                    className="bg-white text-black rounded-full p-1"
                    size={35}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/74129367/admin/dashboard/">
                  <Linkedin
                    className="p-1 bg-white text-black rounded-full"
                    size={35}
                  />
                </Link>
                <Link href="https://www.instagram.com/brando.digital97761/">
                  <Instagram
                    className="bg-white text-black rounded-full p-1"
                    size={35}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-2/3 justify-between  ">
            <div className="flex flex-col gap-7">
              <span className="font-extrabold text-xl">Our Services</span>
              <ul className="text-[#8E8E8E] flex flex-col gap-2 hover:cursor-pointer">
                <Link href="/service/brand-consulting">Brand Consulting</Link>
                <Link href="/service/logo-&-brand-guidelines">
                  Logo & Brand Guidelines
                </Link>
                <Link href="/service/website-&-app-development">
                  Web & App Development
                </Link>
                <Link href="/service/digital-marketing-&-content-creation">
                  Digital Marketing & Content Creations
                </Link>
                <Link href="/service/business-lead-generation">
                  Business Lead Generation
                </Link>
                <Link href="/service/social-media-management">
                  Social Media Management
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <span className="font-extrabold text-xl">Resources</span>
              <ul className="text-[#8E8E8E] flex flex-col gap-2">
                <Link href="/aboutus">About Us</Link>
                <Link href="/contactus">Case Studies</Link>
                <Link href="/portfolio">Our Portfolio</Link>
                <Link href="/blogs">Blog</Link>
                {/* <li>Career</li> */}
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <span className="font-extrabold text-xl">Support</span>
              <ul className="text-[#8E8E8E] flex flex-col gap-2">
                {/* <li>Help Center</li> */}
                <Link href="/contactus">FAQ</Link>
                <Link href="/privacyandpolicy">Privacy Policy</Link>
                <Link href="/termsandconditions">Terms & Conditions</Link>
                <Link href="/contactus">Contact Us</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flexborder-dashed border-2 border-white p-2 object-cover">
          {/* <Image src={map} alt="map" className="w-full object-cover" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.424548519405!2d151.2057112764953!3d-33.878718319574006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d33255555%3A0x815001600e8ee8ef!2sSuite%2012%20Level%201%2F301%20Castlereagh%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2snp!4v1717407766205!5m2!1sen!2snp"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Responsive footer */}
        <div className="grid grid-cols-2 lg:hidden gap-2 ">
          <div className="flex flex-col gap-7">
            <span className="font-extrabold text-xl text-white">
              Our Services
            </span>
            <ul className="text-[#8E8E8E] flex flex-col gap-2 hover:cursor-pointer">
              <Link href="/service/brand-consulting">Brand Consulting</Link>
              <Link href="/service/logo-&-brand-guidelines">
                Logo & Brand Guidelines
              </Link>
              <Link href="/service/website-&-app-development">
                Web & App Development
              </Link>
              <Link href="/service/digital-marketing-&-content-creation">
                Digital Marketing & Content Creations
              </Link>
              <Link href="/service/business-lead-generation">
                Business Lead Generation
              </Link>
              <Link href="/service/social-media-management">
                Social Media Management
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <span className="font-extrabold text-xl text-white">Resources</span>
            <ul className="text-[#8E8E8E] flex flex-col gap-2">
              <Link href="/aboutus">About Us</Link>
              <Link href="/contactus">Case Studies</Link>
              <Link href="/portfolio">Our Portfolio</Link>
              <Link href="/blogs">Blog</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <span className="font-extrabold text-xl text-white">Support</span>
            <ul className="text-[#8E8E8E] flex flex-col gap-2">
              <Link href="/contactus">FAQ</Link>
              <Link href="/privacyandpolicy">Privacy Policy</Link>
              <Link href="/termsandconditions">Terms & Conditions</Link>
              <Link href="/contactus">Contact Us</Link>
            </ul>
          </div>
          <div className="flexborder-dashed border-2 border-none p-2 object-cover">
            {/* <Image
              src={map1}
              alt="map"
              className="w-full object-cover h-full"
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.424548519405!2d151.2057112764953!3d-33.878718319574006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d33255555%3A0x815001600e8ee8ef!2sSuite%2012%20Level%201%2F301%20Castlereagh%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2snp!4v1717407766205!5m2!1sen!2snp"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-[#8E8E8E] flex items-center justify-center mt-5 px-8 text-center">
        Copyright © 2024 Brando Digital | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
