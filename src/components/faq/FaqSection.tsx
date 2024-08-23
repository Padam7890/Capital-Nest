'use client'
import { useState } from "react";
import { FaPlus } from "react-icons/fa";


interface Toggle {
    toggle: boolean;
    index: number;
}

const FaqSection = () => {
   
    const [toggle, setToggle] = useState<Toggle>({toggle: false, index: 0})
   
    const handle = (index: number) => {
        setToggle({ toggle: !toggle.toggle, index: index });
    }
   
    return (
        <div className="bg-white text-black">
             <div className="container mx-auto flex flex-col gap-6 min-h-[300px]   py-16 text-black">

<div className="self-center text-center">
<h2 className="text-2xl xl:text-4xl mb-4">Frequently Asked Questions</h2>
<p className="">if you have any questions just let us know!</p>
</div>

<div className="h-[.5px] bg-gray-600 my-0"></div>
<div className="flex flex-col gap-4">
    <div className="flex justify-between cursor-pointer" onClick={()=> handle(1)}>
        <h3>What services do you offer?
        </h3>
        <div>
            <button >{ <FaPlus/> }</button>
        </div>
    </div>
    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.toggle && toggle.index === 1 ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
    <p>We offer a range of financial services including loan applications, mortgage advice, and personalized financial planning to help you navigate your financing needs smoothly.
How do you simplify the loan application process?
We handle the paperwork and details, providing guidance and support throughout the application process to ensure a stress-free experience.

</p>
</div>
    
    <div className="h-[.5px] bg-gray-600 my-0"></div>


    <div className="flex justify-between cursor-pointer " onClick={()=> handle(2)}>
        <h3>What makes Eden Financial Partners different from other financial consultants?
        </h3>
        <div>
        <button >{ <FaPlus/> }</button>
            
        </div>


    </div>
    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.toggle && toggle.index === 2 ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
    <p>Our commitment to honesty, integrity, and personalized service sets us apart. We focus on long-term relationships and tailor solutions to your unique needs.
    </p>
</div>

    <div className="h-[.5px] bg-gray-600 my-0"></div>

    
    <div className="flex justify-between cursor-pointer " onClick={()=> handle(3)}>
        <h3>How do you ensure long-term client relationships?
        </h3>
        <div>
        <button >{ <FaPlus/> }</button>

        </div>
    </div>
    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.toggle && toggle.index === 3 ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
    <p>We prioritize your long-term financial success by offering ongoing support and building trust through exceptional service and transparent practices.
    </p>
</div>
    <div className="h-[.5px] bg-gray-600 my-0"></div>
    <div className="flex justify-between cursor-pointer   " onClick={()=> handle(4)}>
        <h3>How can I get started with Eden Financial Partners?
        </h3>
        <div>
        <button >{ <FaPlus/> }</button>

        </div>
    </div>
    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.toggle && toggle.index === 4 ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p>
                        Simply contact us via our website or call us directly to schedule a consultation. We’ll assess your needs and guide you through the next steps.
                        </p>
</div>
    <div className="h-[.5px] bg-gray-600 my-0"></div>



</div>

</div>
       </div>
    )

}

export default FaqSection;