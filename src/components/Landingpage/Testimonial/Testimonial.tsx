import React from "react";
import img1 from "../../../Images/janakipp.jpeg";
import img2 from "../../../Images/testimonial1.jpg";
import img3 from "../../../Images/testimonial3.png";
import img4 from "../../../Images/testimonial4.png";
import { TestimonialCard } from "./TestimonialCard";
// import { title } from "process";
const Testimonial = () => {
  const content = [
    {
      src: img1,
      name: "Januka Gurung",
      title: "Founder- Janaki Foundation",
      para: "Working with Brando Digital was a game-changer for our organization. Their strategic approach and creative solutions helped us redefine our brand and significantly boost our online presence. Their team is professional, responsive, and truly understands our needs.",
      rating: "5",
    },
    {
      src: img2,
      name: "Keshav P Nepal",
      title: "CEO of Canberra College of Management and Technology",
      para: "Brando Digital exceeded our expectations in every way. From the initial consultation to the final product, their attention to detail and commitment to excellence were evident. Our new website and app have received rave reviews from our clients and have helped us reach new heights.",
      rating: "5",
    },
    {
      src: img3,
      name: "Lisa Gomez",
      title: "Marketing Director at Trendy Apparel",
      para: "The team at Brando Digital is simply amazing. They took the time to understand our brand and created content that truly resonates with our audience. Their optimization and promotion strategies have significantly increased our visibility and engagement. We couldn’t be happier with the results.",
      rating: "4.5",
    },
    {
      src: img4,
      name: "David Wong",
      title: "Owner of Wellness Market",
      para: "Brando Digital's comprehensive approach to brand development and digital marketing has transformed our business. Their insights and expertise have helped us attract more customers and grow our online presence. The ongoing support and maintenance they provide ensure that we continue to thrive.",
      rating: "5",
    },
    // {
    //   src: img1,
    //   name: "Samantha Lee",
    //   title: "CEO of InnovateTech Solutions",
    //   para: "Working with Brando Digital was a game-changer for our company. Their strategic approach and creative solutions helped us redefine our brand and significantly boost our online presence. Their team is professional, responsive, and truly understands our needs.",
    //   rating: "3",
    // },
    // {
    //   src: img2,
    //   name: "Raj Patel",
    //   title: "Founder of EcoFriendly Initiatives",
    //   para: "Brando Digital exceeded our expectations in every way. From the initial consultation to the final product, their attention to detail and commitment to excellence were evident. Our new website and app have received rave reviews from our clients and have helped us reach new heights.",
    // },
    // {
    //   src: img3,
    //   name: "Lisa Gomez",
    //   title: "Marketing Director at Trendy Apparel",
    //   para: "The team at Brando Digital is simply amazing. They took the time to understand our brand and created content that truly resonates with our audience. Their optimization and promotion strategies have significantly increased our visibility and engagement. We couldn’t be happier with the results.",
    // },
    // {
    //   src: img4,
    //   name: "David Wong",
    //   title: "Owner of Wellness Market",
    //   para: "Brando Digital's comprehensive approach to brand development and digital marketing has transformed our business. Their insights and expertise have helped us attract more customers and grow our online presence. The ongoing support and maintenance they provide ensure that we continue to thrive.",
    // },
  ];
  return (
    <div className="container py-14">
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-bold text-red-100">Testimonial</span>
        <h2 className="font-extrabold text-2xl md:text-4xl">
          What Our Clients Say{" "}
        </h2>
      </div>
      <TestimonialCard content={content} />
    </div>
  );
};

export default Testimonial;
