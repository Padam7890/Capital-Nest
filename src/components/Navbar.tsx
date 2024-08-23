"use client";
import React, { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
// import logo from "../Images/Brando-Logo.png";
import logo from "../../public/logonew.png";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { ChevronDown } from "lucide-react";
import Connect from "./Landingpage/Connect";
export function Nav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="flex flex-col fixed w-full z-50">
    <>
      <Connect />
      {/* When start scrollilng display none connect */}

      {/* <nav className={scroll ? "flex justify-center fixed items-center w-full  shadow-lg h-[20px] pb-10 bg-primary top-0":"flex justify-between fixed items-center w-full  bg-transparent shadow-lg"}> */}
      <nav
        className={`flex justify-between items-center w-full fixed  shadow-lg z-50 ${
          scroll ? "bg-primary top-0" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center w-full  ">
          {children}
        </div>
      </nav>
    </>
  );
}
export function NavHamburger({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className=" text-white flex xl:hidden 9l-4">{children}</nav>
    </>
  );
}
export function Navlink({
  href,
  dropdown,
  children,
}: {
  href: any;
  dropdown: boolean;
  children: any;
}) {
  const pathname = usePathname();
  const path = pathname.split("/");
  const newPath = `/${path[1]}`;
  const activepath = `/${path[1]}/${path[2]}`;

  const isActive = newPath === href;
  const isFullyActive = activepath === href;

  const content = [
    {
      title: "Brand Consulting",
      url: "brand-consulting",
    },
    { title: "Business Lead Generation", url: "business-lead-generation" },
    { title: "Logo & Brand Guideliness", url: "logo-&-brand-guidelines" },
    { title: "Website Development", url: "website-&-app-development" },
    {
      title: "Asset and Equipment Finance",
      url: "digital-marketing-&-content-creation",
    },
    { title: "Private Loans", url: "social-media-management" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {dropdown ? (
        <Dropdown
          placement="bottom-start"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <DropdownTrigger className="border-none">
            <button
              className={`flex gap-1 items-center ${
                isActive || isFullyActive ? "active text-primary" : ""
              }`}
            >
              Services <ChevronDown size={18} />
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            className="bg-primary p-2 rounded-lg"
            variant="flat"
          >
            {content.map((value, index) => (
              <DropdownItem
                key={index}
                className="hover:cursor-pointer hover:bg-secondary rounded px-2 text-white font-extrabold flex flex-col gap-4 justify-between items-start py-3"
              >
                <Link href={`/service/${value.url}`} className="outline-none">
                  {value.title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link
          href={href}
          className={`navlink hover:text-secondary-100  focus-visible:bg-secondary-100 focus-visible:text-white ${
            isActive || isFullyActive ? "active  underline" : ""
          }`}
        >
          {children}
        </Link>
      )}
    </div>
  );
}
export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const pathname = usePathname();
  // const path = pathname.split("/");
  // const droppath = `/service/${path[2]}`;
  const toggleDrawer = () => {
    console.log("toggled", isDrawerOpen);

    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Nav>
        <div className="  mx- 4 my-1 w-[50px] md:w-[80px] xl:w-[100] rounded-xl ">
          <Link
            href="/"
            className="flex p-1 items-center w-full justify-center"
          >
            <Image
              src={"/logonew.png"}
              alt="company logo"
              width={500}
              height={400}
              className="w-50 bg-white rounded-full object-cover"
            ></Image>
          </Link>
        </div>
        <NavHamburger>
          <button onClick={toggleDrawer}>
            <Menu className="w-8 h-8 text-white" />
          </button>
        </NavHamburger>
        <div className=" text-white font-semibold gap-6 xl:gap-8 hidden xl:flex whitespace-nowrap">
          {/* <Navlink href="/" dropdown={false}>
            Home
          </Navlink> */}
          <Navlink dropdown={true} href="#">
            Services <ChevronDown />
          </Navlink>
          <Navlink dropdown={false} href="/calendly">
            Booking Schedule
          </Navlink>
          <Navlink dropdown={false} href="/portfolio">
            Portfolio
          </Navlink>
          <Navlink dropdown={false} href="/aboutus">
            About Us
          </Navlink>
          <Navlink dropdown={false} href="/blogs">
            Blogs
          </Navlink>
          <Navlink dropdown={false} href="/contactus">
            Contact Us
          </Navlink>
        </div>
        <div className=" items-center gap-10 hidden xl:flex">
          <span>
            <Search className="text-white" />
          </span>
          <div className="text-white bg-[#3189c3] border border-white py-3 px-7 rounded-full whitespace-nowrap">
            <Link href="#">Get Free Consultation</Link>
          </div>
        </div>
        <div
          className={`fixed inset-y-0 right-0 z-50 bg-white w-64 transition duration-300 ease-in-out transform shadow-2xl ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } xl:hidden`}
        >
          <div className="flex items-center justify-between p-3 gap-6 border-b">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="company logo" className=""></Image>
            </Link>
            <button onClick={toggleDrawer}>
              <Menu className="w-8 h-8 text-secondary" />
            </button>
          </div>
          <div className="py-4 text-black flex flex-col gap-4 font-semibold text-lg">
            {/* <div onClick={toggleDrawer} className="px-4">
              {/* <Navlink href="/" dropdown={false}>
                Home
              </Navlink> 
            </div> 
            {/* <div className="flex flex-col gap-3">
              <div
                className="flex px-4"
                onClick={() => setDropdown((prev) => !prev)}
              >
                <Navlink href="" dropdown={false}>
                  Services{" "}
                </Navlink>
                <ChevronDown />
              </div>
            </div> */}
            <div onClick={toggleDrawer} className="px-4">
              <Navlink href="/calendly" dropdown={false}>
                Our Lenders
              </Navlink>
            </div>
            <div onClick={toggleDrawer} className="px-4">
              <Navlink href="/portfolio" dropdown={false}>
                Portfolio
              </Navlink>
            </div>
            <div onClick={toggleDrawer} className="px-4">
              <Navlink href="/aboutus" dropdown={false}>
                About Us
              </Navlink>
            </div>
            <div onClick={toggleDrawer} className="px-4">
              <Navlink href="/blogs" dropdown={false}>
                Blogs
              </Navlink>
            </div>
            <div onClick={toggleDrawer} className="px-4">
              <Navlink href="/contactus" dropdown={false}>
                Contact Us
              </Navlink>
            </div>
            <div
              onClick={toggleDrawer}
              className="px-4 py-2 bg-primary text-white"
            >
              <Navlink href="#" dropdown={false}>
                Get Started{" "}
              </Navlink>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
