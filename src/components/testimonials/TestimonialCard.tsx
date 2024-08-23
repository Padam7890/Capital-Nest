

interface Testimonial {
    star: number;
    title: string;
    description: string;
    avatar: string;
    name: string;
    avatar_text: string;
    color:string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (


        <div className="flex flex-col gap-4 justify-between bg-white p-10  rounded-[20px] w-[95%]  lg:w-[320px] min-h-[310px] mx-auto">
        <div className="flex items-center gap-4 ">
            {/* <img src={`/${testimonial.avatar}`} alt="avatar" className="w-16 h-16 border rounded-full object-cover object-top" /> */}
            <div className="w-20 h-20 border rounded-full overflow-hidden">
<img src={`/${testimonial.avatar}`} alt="avatar" className="w-full h-full  mt-7 scale-[1.8] mx-auto" />
</div>

            <div>
                <h3 className="text-mgray font-semibold">{testimonial.name}</h3>
                <p className="text-[#00000099]">{testimonial.avatar_text}</p>
            </div>
        </div>
        <div className="relative flex  gap-[20px] flex-col  min-h-[199px]">
            <div className="flex gap-1 justify-start">
            
            {[...Array(testimonial.star)].map((_, index) => (
<svg
    key={index}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill="#FFB800"
        stroke="#FFB800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</svg>
))}

            </div>
            <p className="font-bold text-xl">{testimonial.title}</p>
            <p className="p-text leading-5 italic">{testimonial.description}</p>
            <div className="absolute right-0 -bottom-2">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.715 0L40 2.79503C37.8959 4.57557 36.1782 6.294 34.847 7.95031C33.5588 9.56522 32.7429 10.7867 32.3994 11.6149C32.0558 12.4431 31.7338 13.4369 31.4332 14.5963L31.6908 14.9689C34.5679 14.9689 36.672 15.5694 38.0032 16.7702C39.3344 17.971 40 19.8344 40 22.3602C40 24.3064 39.27 26.0663 37.81 27.6398C36.3929 29.2133 34.6108 30 32.4638 30C30.0161 30 27.9764 29.3375 26.3446 28.0124C24.7128 26.6874 23.8969 24.5549 23.8969 21.6149C23.8969 17.7226 25.1422 13.706 27.6328 9.56522C30.1664 5.38302 33.1938 2.19462 36.715 0ZM12.818 0L16.1031 2.79503C13.9989 4.57557 12.3027 6.27329 11.0145 7.8882C9.72625 9.50311 8.88889 10.7453 8.50241 11.6149C8.15888 12.4845 7.83682 13.4783 7.53623 14.5963L7.79388 14.9689C10.671 14.9689 12.7751 15.5694 14.1063 16.7702C15.4375 17.971 16.1031 19.8344 16.1031 22.3602C16.1031 24.3064 15.3731 26.0663 13.913 27.6398C12.496 29.2133 10.7139 30 8.56683 30C6.11916 30 4.07944 29.3375 2.44766 28.0124C0.815888 26.6874 0 24.5549 0 21.6149C0 17.7226 1.2453 13.706 3.73591 9.56522C6.26946 5.38302 9.29683 2.19462 12.818 0Z" fill="#309689"/>
</svg>

            </div>
        </div>
       
    </div>


        // <div
        //     style={{ borderColor: testimonial.color }}
        //     className="flex flex-col justify-betwee gap-4 justify-center items-center p-10 rounded-[60px] border rounded-tr-none w-[100%] mx-auto xl:w-[400px] min-h-[350px]"
        // >
        //     <p className="font-semibold text-2xl text-white self-start">{testimonial.title}</p>
        //     <p className="font-normal italic text-white">{testimonial.description}</p>
        //     <button
        //         style={{ backgroundColor: testimonial.color }}
        //         className="py-2 px-4 bg-white text-left  rounded-full rounded-tr-none self-start"
        //     >
        //         Learn more <span className="rotate-90">&rarr;</span>
        //     </button>
        // </div>
    );
};

export default TestimonialCard;