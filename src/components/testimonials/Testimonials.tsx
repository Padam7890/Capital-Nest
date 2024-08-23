'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
    star: number;
    title: string;
    description: string;
    avatar: string;
    name: string;
    avatar_text: string;
    color: string;
}

import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonials:Testimonial[] = getTestimonials();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
               
           },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative p-8 xl:p-14  mb-6 bg-primary mt-10 ">
            <div className="flex justify-center pb-4">
                <h2 className="title-text text-white mb-4">Testimonials

                <div className="bg-white h-[2px] w-28 mt-2 text-center mx-auto"></div>
                </h2>
            </div>
            {/* <div className="flex justify-center"> */}
            <Slider {...settings} className="flex gap-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-5 mb-4">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </Slider>
            {/* </div> */}
        </div>
    );
};

export default Testimonials;

function getTestimonials() {
    return [
        {
            star: 5,
            title: "Business Owners & Self-Employed",
            description: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
            avatar: 'tavatar1.png',
            name: 'Marko Kihn',
            avatar_text: 'Happy Client',
            color: '#fff'
        },
        {
            star: 5,
            title: "Senior Executive or Professional",
            description: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
            avatar: 'tavatar2.png',
            name: 'Kristin Hester',
            avatar_text: 'Happy Client',
            color:"#a4c6e9"
        },
        {
            star: 5,
            title: "Approaching Retirement",
            description: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
            avatar: 'tavatar3.png',
            name: 'Zis Cisneros',
            avatar_text: 'Happy Client',
            color: "#2B8E97"
        },
        {
            star: 5,
            title: "Awesome, thank you!",
            description: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
            avatar: 'tavatar1.png',
            name: 'Zis Cisneros',
            avatar_text: 'Happy Client',
            color:"#a4c6e9"

        },
        {
            star: 5,
            title: "Awesome, thank you!",
            description: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
            avatar: 'tavatar2.png',
            name: 'Zis Cisneros',
            avatar_text: 'Happy Client',
            color: "#2B8E97"

        },

        {
            star: 5,
            title: "Business Owners & Self-Employed",
            description: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
            avatar: 'tavatar1.png',
            name: 'Marko Kihn',
            avatar_text: 'Happy Client',
            color: '#fff'
        },
        
    ];
}
