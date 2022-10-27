import React from 'react';
import { FaCertificate, FaPeopleArrows } from 'react-icons/fa';
import { MdEmojiPeople } from 'react-icons/md';
import oldman from '../../assets/brands/oldman.svg'

const CourseBenifit = () => {
   return (
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
         <div className="container mx-auto">
            <div className='flex flex-col items-center'>
               <img className='w-32' src={oldman} alt="" />
               <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">What you will get from <span className="dark:text-violet-400">the course</span></h1>
               <p className='my-5 font-mono text-lg'>Everything you will get from us after completing the course</p>
            </div>
            <div className="grid gap-6 my-16 lg:grid-cols-3" data-aos="fade-down" data-aos-duration="2000">
               <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:scale-105 duration-500">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900"><FaCertificate></FaCertificate></div>
                  <p className="text-2xl font-semibold">
                     <b>Course Certificate</b>
                  </p>
                  <p className='font-semibold'>Everyone will get a course completion certificate which can be scanned and verified from our website. You can download the soft copy of the certificate online and the printed copy will be delivered to your address.</p>
               </div>
               <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:scale-105 duration-500" >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900"><FaPeopleArrows></FaPeopleArrows></div>
                  <p className="text-2xl font-semibold">
                     <b>Opportunity to work with us</b>
                  </p>
                  <p className='font-semibold'>Among those who will do well in the course, 3 people will be screened and given the opportunity of paid internship in our company. Also, you will get the opportunity to work directly with Masud Rana, the founder of Doc Technical.</p>
               </div>
               <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:scale-105 duration-500">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900"><MdEmojiPeople></MdEmojiPeople></div>
                  <p className="text-2xl font-semibold">
                     <b>Lifetime course access</b>
                  </p>
                  <p className='font-semibold'>Those who purchase the course once, will receive lifetime access to all course content and will continue to receive all future updates. In addition, you will have lifetime access to the private group where we will try to answer your questions.</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CourseBenifit;