import React from 'react';
import photo1 from '../../assets/brands/woman-project-gallary.svg'
import chat from '../../assets/brands/photo-gallary/chat aplication.png'
import video from '../../assets/brands/photo-gallary/video-gallay.png'
import expence from '../../assets/brands/photo-gallary/expence tracker.jpg'
import blog from '../../assets/brands/photo-gallary/blog-application.jpg'
import todo from '../../assets/brands/photo-gallary/todo-application.png'

const WebProjectGallary = () => {
   return (
      <section className="py-6 light:bg-gray-800 light:text-gray-50">
         <div className='flex flex-col items-center'>
            <img className='w-32' src={photo1} alt="" />
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">The <span className="dark:text-violet-400">projects that will be</span> done in the course</h1>
            <p className='my-5 font-mono text-lg'>We will do ten projects together</p>

         </div>
         <div className="container grid grid-cols-2 gap-4 p-5 lg:p-10 mx-auto md:grid-cols-4 dark:bg-gray-800 rounded-xl">
            <img src={todo} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm max-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" data-aos="zoom-in-left" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={todo} data-aos="fade-down-right" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={video} data-aos="fade-down-right" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={chat} data-aos="fade-down-right" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={expence} data-aos="fade-down-right" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={blog} data-aos="fade-up-left" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={chat} data-aos="fade-up-left" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={video} data-aos="fade-up-left" data-aos-duration="2000"/>
            <img alt="" className="w-full h-full rounded shadow-sm max-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" src={todo} data-aos="fade-up-left" data-aos-duration="2000"/>
            <img src={video} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm max-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square hover:scale-105 duration-500" data-aos="zoom-in-right" data-aos-duration="2000"/>
         </div>
      </section>
   );
};

export default WebProjectGallary;