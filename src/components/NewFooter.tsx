import React from 'react';
import { FaTwitter, FaNewspaper, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const NewFooter = () => {
  return (
    <footer className="bg-primary text-white py-8 font-sans ">
      <div className=" container mx-auto px-6 lg:px-8 py-[68px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-[14px]">
              {/* <div className='flex justify-between '> */}
          <div>
            <h5 className="font-bold mb-2">About Us</h5>
            <ul className='flex flex-col gap-4 mt-4'>
            <li><a href="#" className="hover:underline cursor-pointer">Our Fees</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Contact Us and Find Our Offices</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Our Team</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Complaints Procedure</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Cookie and Privacy Statement</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Appointed Representatives</a></li>
  <li><a href="#" className="hover:underline cursor-pointer">Client Hub</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 whitespace-nowrap">Introducer and Affiliate Schemes</h5>
            <ul className='flex flex-col gap-4 mt-4'>
            <li><a className="hover:underline cursor-pointer">Careers</a></li>
  <li><a className="hover:underline cursor-pointer">Regulatory Statement</a></li>
  <li><a className="hover:underline cursor-pointer">Client Testimonials</a></li>
  <li><a className="hover:underline cursor-pointer">Our Awards</a></li>
  <li><a className="hover:underline cursor-pointer">Accessibility</a></li>
  <li><a className="hover:underline cursor-pointer">Sitemap</a></li>
            </ul>
          </div>
          <div className='flex flex-col gap-8'>

         
              <div className="contact-info pb-4  text-white rounded">
    <h2 className="font-bold mb-2">Contact Us</h2>
    <p className="mb-2">Suite 1017, level 10, 420 George St, Sydney NSW 2000</p>
    <p className="mb-2">Email: <a href="#" className="text-blue-400 hover:underline">padamthapamoho@gmail.com</a></p>
    <p>Phone: <a href="#" className="text-blue-400 hover:underline">(977) 9861....</a></p>
</div>


            <form className='flex flex-col '>
            <h5 className="font-bold mb-1">Sign Up to Our Newsletter</h5>
                          <div className='flex  '>
                          <input
                type="email"
                placeholder="email address"
                className="p-2 grow bg-white border border-gray-700"
              />
              <button
                type="submit"
                className=" pr-3 pl-1  hover:bg-light bg-secondary text-white transition-all duration-1000"
              >
                Subscribe
              </button>
              </div>
                      </form>
                      <div className='flex flex-col '>
                      <div className="flex justify-center space-x-4 py-4 self-end">
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaTwitter size={20} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaNewspaper size={20} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaFacebookF size={20} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaLinkedinIn size={20} />
      </a>
    </div>
                     
                      </div>
                      
          </div>
          
              </div>
              <div className='mt-24 mb-5'>
              <div className='h-[.5px] bg-gray-600 '></div>
                  
              </div>
        <div className="text-left text-gray-400 mb-4 py-4 flex flex-col gap-4 justify-center items-center">
        {/* <p className='font-semibold text-[18px] text-white'>Legal</p> */}
          <p>
            YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON A MORTGAGE OR ANY DEBT SECURED ON IT.
          </p>
          <p className="text-xs leading-[18px] text-center">
          At CapitaNest Financial Partners, our vision is to simplify securing finance, making it stress-free and straightforward. We prioritize honesty, integrity, and professionalism, exploring every option to provide the best solutions for our clients. Our focus is on building long-term relationships through personalized financial plans, ensuring your long-term benefit. Our success is built on referrals, word-of-mouth, and repeat clients. Expect extraordinary and unmatched service from us.
          </p>
        </div>
        <div className="flex justify-center items-center text-xs text-gray-400">
          <span>&copy; 2024 CapitaNest Financial Partners. All right reserved </span>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
