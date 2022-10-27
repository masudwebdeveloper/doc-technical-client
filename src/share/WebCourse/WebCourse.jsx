import React from 'react';
import { FaCode, FaDesktop, FaUserFriends, FaVideo } from 'react-icons/fa';
import photo1 from '../../assets/brands/course-man.svg'
import { MdLayers, MdQuiz } from "react-icons/md";

const WebCourse = () => {
   return (
      <section className="dark:bg-gray-800 dark:text-gray-100 py-5">
         <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
            <img className='w-32' src={photo1} alt="" />
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Our <span className="dark:text-violet-400">web course</span> at a glance</h1>
            <p className='my-5 font-mono text-lg'>Everything in this course</p>

            <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
               <div className="flex flex-col w-full divide-y divide-gray-700">
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-down-right" data-aos-duration="2000">
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <FaVideo className='w-10 h-10 text-center'></FaVideo>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">135+ videos in 12 modules</h1>
                        <p className='text-center font-serif'>The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.</p>
                     </div>
                  </a>
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-up-right" data-aos-duration="2000">
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <FaCode className='w-10 h-10 text-center'></FaCode>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">10 assignments</h1>
                        <p className='text-center font-serif'>At the end of each module there will be large assignments that you will do on your own.</p>
                     </div>
                  </a>

               </div>
               <div className="flex flex-col w-full divide-y divide-gray-700">
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-down" data-aos-duration="2000">
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <FaDesktop className='w-10 h-10 text-center'></FaDesktop>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">30 hours of 15GB of recorded</h1>
                        <p className='text-center font-serif text-gray-100'>Video size and duration are optimized taking into account time and bandwidth consumption.</p>
                     </div>
                  </a>
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-up" data-aos-duration="2000">
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <FaUserFriends className='w-10 h-10 text-center'></FaUserFriends>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">5 live sessions</h1>
                        <p className='text-center font-serif'>There are weekly live sessions where we will discuss important topics and answer your questions.</p>
                     </div>
                  </a>

               </div>
               <div className="flex flex-col w-full divide-y divide-gray-700">
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-down-left" data-aos-duration="2000"> 
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <MdQuiz className='w-10 h-10 text-center'></MdQuiz>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">120+ quizzes</h1>
                        <p className='text-center font-serif'>There will be quizzes with explanations and answers at the end of each video so that you can check your progress</p>
                     </div>
                  </a>
                  <a rel="noopener noreferrer" href="#" className=" p-4 sm:py-8 lg:py-12" data-aos="fade-up-left" data-aos-duration="2000">
                     <div className='hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <MdLayers className='w-10 h-10 text-center'></MdLayers>
                        <h1 className="my-4 text-xl font-medium leading-none text-center sm:text-xl">10 projects</h1>
                        <p className='text-center font-serif'>We have followed project based learning process throughout the course. In the course we will do 10 projects together.</p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WebCourse;