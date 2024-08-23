import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Connect from "@/components/Landingpage/Connect";
import Footer from "@/components/Footer";
import NewFooter from "@/components/NewFooter";
import CookieConsent from "@/components/Cookie/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital Nest Financial Partners",
  description: "Brand Consulting Services with Digital DNA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-playFair`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <NewFooter/>
      </body>
    </html>
  );
}
