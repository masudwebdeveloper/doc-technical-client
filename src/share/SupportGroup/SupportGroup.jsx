import React from 'react';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import web from '../../assets/brands/web.svg';
const SupportGroup = () => {
   return (
      <section className="light:bg-gray-800 light:text-gray-100">
         <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center lg:p-6 text-justify rounded-sm lg:text-left" data-aos="fade-right" data-aos-duration="2000">
               <h1 className="text-2xl lg:text-3xl font-bold leading-none">Staying for round the clock support<br/> 
                  <span className="dark:text-violet-400">Private support group</span>
               </h1>
               <p className="mt-6 mb-8 text-lg sm:mb-12">For this course we have created a private Facebook group where 4-5 other web developers along with course instructor Masud Rana will directly answer your various questions. We promise to answer your questions within 24 hours maximum. But in most cases you will get the answer in less time than that. Besides, every week there will be live session on the discussed module where you can directly ask questions and get answers.</p>
               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Masudrana2143/" className="px-8 py-3 text-lg font-semibold rounded-badge dark:bg-violet-800 text-white hover:scale-105 duration-500"><FaFacebook className='inline mr-3 text-lg'></FaFacebook>Support</a>
                  <a rel="noopener noreferrer" href="##" className="px-8 py-3 text-lg font-semibold border rounded-badge dark:border-gray-500 hover:translate-x-5 duration-500"><FaPhone className='inline mr-3'></FaPhone>Call Me</a>
               </div>
            </div>
            <div className="flex items-center justify-center lg:w-full p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="fade-left" data-aos-duration="2000">
               <img src={web} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
         </div>
      </section>
   );
};

export default SupportGroup;