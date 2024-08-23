'use client'
import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaRegHandshake, FaUser, FaUniversity, FaCheckCircle, FaHeadset, FaTools, FaSmile, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import whyusimg from '../../Images/whyus-img.jpg';
const ScrollingLayout = () => {
   

    return (
        <div className=" relative bg-white text-black  pt-5 ">

           
            <div className=" container mx-auto flex flex-col lg:flex-row ">
            
                <div id="left-section" className="relative w-full lg:w-1/2 pr-4  ">
                
                    <div id="left- content" className="lg:sticky lg:top-[160px] flex justify-center flex-col">
                        
<div className='title-text  mb-[30px]'>Why CapitaNest Financial Partenrs?
            {/* <div className="bg-white h-[2px] w-28 mt-2 text-center "></div> */}
                </div>

                    
                        
                        {/* Image  */}

                        
                        
                        <h1 className=" text-[24px] py-1 mb-4 ">
                        Enjoy stress-free financing with our honest, professional service. We offer tailored solutions and long-term partnerships built on trust and excellence.
                        </h1>
                        {/* <Image src={whyusimg} alt="Why Choose Us" className="rounded-lg" /> */}

                       
                    </div>
                </div>
                <div id="right-section" className="w-full lg:w-1/2 ">
                    <div className="" >
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaRegHandshake size={32} className="mr-2"/> Expertise in Australian Mortgage Market
                            </h3>
                            <p className='p-text px-8 py-3 leading-6 tracking -[.5px]' >With years of experience in the Australian mortgage industry, our team understands the unique challenges and opportunities of the local market. We stay updated with the latest market trends and lender offerings to provide you with the most relevant advice and options.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaUser size={32} className="mr-2"/> Personalized Service
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>We believe in a client-first approach. Our brokers take the time to understand your financial situation and goals, offering tailored solutions that best meet your needs. From first-time homebuyers to seasoned investors, we provide personalized support every step of the way.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaUniversity size={32} className="mr-2"/> Wide Range of Lender Partnerships
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>We have strong relationships with a diverse network of lenders, including major banks and non-bank lenders. This extensive network allows us to offer a broad range of mortgage products and competitive rates, giving you more options and better chances of securing the best deal.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaCheckCircle size={32} className="mr-2"/> Transparent and Honest Advice
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>Integrity is at the core of our business. We provide clear, honest, and straightforward advice, ensuring you fully understand your options and the implications of your choices. There are no hidden fees or surprises—just transparent, reliable guidance.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaHeadset size={32} className="mr-2"/> Dedicated Support Throughout the Process
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>Our commitment to you doesn’t end with securing a mortgage. We offer ongoing support throughout the entire process, from application to settlement. Our team is here to answer your questions, handle any issues, and ensure a smooth and stress-free experience.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaTools size={32} className="mr-2"/> Advanced Tools and Technology
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>We leverage the latest technology and tools to streamline the mortgage process, making it faster and more efficient. Our online application system and secure client portal provide convenience and keep you informed every step of the way.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaSmile size={32} className="mr-2"/> Customer Satisfaction
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>Our clients are our greatest asset, and their satisfaction is our top priority. We pride ourselves on delivering exceptional service and have a track record of happy clients who recommend us to their friends and family.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                        <div className="p-4 bg-transparent rounded mb-3">
                            <h3 className="text-xl  flex items-center">
                                <FaMapMarkerAlt size={32} className="mr-2"/> Local Knowledge and Community Focus
                            </h3>
                            <p className='p-text px-8 py-3 leading-6'>As a local business, we are deeply invested in the Australian community. We understand the nuances of different regions and suburbs, helping you make informed decisions based on local market conditions and community insights.</p>
                        </div>
                        <div className='px-5'>
                        <div className='bg-gray-500 h-[1px] w-full mb-3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingLayout;
